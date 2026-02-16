import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { listEditorPicks } from "@/lib/editorPicks";
import ImagePlaceholder from "./ImagePlaceholder";
import FixedSocialSidebar from "./FixedSocialSidebar";

function formatPublishedAt(date: Date) {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - new Date(date).getTime()) / 1000);
  
  if (diffInSeconds < 60) return "Just now";
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function MainContent() {
  const { data: editorPicksData, warning: editorPicksWarning } = await listEditorPicks();
  const [leadEditorPick, ...otherEditorPicks] = editorPicksData;

  // Initialize variables for data
  let heroStory, secondaryStories, trendingStories, videoStories, latestNews;
  
  try {
    // Fetch real data from Prisma
    // We use Promise.allSettled to allow some queries to fail without crashing everything, 
    // or just one big try/catch if we want to fallback entirely. 
    // Given the connection error, a simple try/catch around all of them is safer for now.
    
    const [heroData, secondaryData, trendingData, videoData, latestData] = await Promise.all([
      prisma.news.findMany({
        where: { featured: true },
        orderBy: { createdAt: "desc" },
        take: 1
      }),
      prisma.news.findMany({
        where: { featured: false },
        orderBy: { createdAt: "desc" },
        take: 2 // We'll filter ID client-side or just take 2 non-featured
      }),
      prisma.news.findMany({
        where: { trending: true },
        orderBy: { createdAt: "desc" },
        take: 3
      }),
      prisma.news.findMany({
        where: { mediaType: "video" },
        orderBy: { createdAt: "desc" },
        take: 2
      }),
      prisma.news.findMany({
        where: { mediaType: "article" },
        orderBy: { createdAt: "desc" },
        take: 6
      })
    ]);

    heroStory = heroData[0];
    
    // Filter secondary stories to avoid duplicating hero if logic wasn't perfect in query
    secondaryStories = secondaryData.filter(s => s.id !== heroStory?.id).slice(0, 2);
    
    trendingStories = trendingData;
    videoStories = videoData;
    latestNews = latestData;

  } catch (error) {
    console.error("Database connection failed, using fallback data:", error);
    
    // Fallback Data
    heroStory = {
      id: 1,
      title: "Bhubaneswar smart corridor clears final safety audit",
      content: "The 18-km elevated stretch will open next month with dedicated bus, cycle, and emergency lanes for seamless travel.",
      category: "State",
      views: 282,
      author: "Srishti News Desk",
      createdAt: new Date("2024-03-08"),
      imageUrl: null,
      featured: true
    };

    secondaryStories = [
      {
        id: 2,
        title: "Election Commission unveils inclusive polling plan",
        content: "Community volunteers will assist senior citizens and first-time voters at model booths across the state.",
        category: "Politics",
        views: 256,
        createdAt: new Date("2024-03-08"),
        imageUrl: null
      },
      {
        id: 3,
        title: "Schools adopt blended learning toolkit for 2024",
        content: "Teachers receive new digital resources and training to bridge classroom gaps in science and languages.",
        category: "Education",
        views: 198,
        createdAt: new Date("2024-03-08"),
        imageUrl: null
      }
    ];

    trendingStories = [
      { id: 101, title: "Metro ridership hits all-time high over weekend", category: "Trending", views: 282, createdAt: new Date() },
      { id: 102, title: "Monsoon preparedness drive starts early this year", category: "Trending", views: 256, createdAt: new Date() },
      { id: 103, title: "New agri markets bring relief to coastal farmers", category: "Trending", views: 214, createdAt: new Date() }
    ];

    videoStories = [
      { id: 201, title: "Live with Amiya: The headlines you need this week", videoDuration: "12:45", mediaType: "video" },
      { id: 202, title: "Daily Briefing: Key policy announcements explained", videoDuration: "08:21", mediaType: "video" }
    ];

    latestNews = [
      { id: 301, title: "Health department issues summer heat advisory", category: "Health", createdAt: new Date() },
      { id: 302, title: "New eco-tourism circuit unveiled for coastal Odisha", category: "Travel", createdAt: new Date() },
      { id: 303, title: "₹150 crore credit support cleared for farmer collectives", category: "Agriculture", createdAt: new Date() },
      { id: 304, title: "Disaster response teams hold mock drills statewide", category: "Update", createdAt: new Date() },
      { id: 305, title: "Mega district job fair opens tomorrow", category: "Employment", createdAt: new Date() },
      { id: 306, title: "Indie filmmakers announce three new releases", category: "Entertainment", createdAt: new Date() }
    ];
  }

  // Fallback for Hero if no featured story
  const displayHero = heroStory || latestNews[0] || {
    id: 0,
    title: "Welcome to Sristhi News",
    excerpt: "Breaking news and latest updates from Odisha and beyond.",
    category: "General",
    views: 0,
    author: "System",
    createdAt: new Date(),
    imageUrl: null
  };

  // Helper to safely access properties that might be missing if schema push failed
  const getProp = (item: any, key: string, fallback: any) => item?.[key] ?? fallback;

  return (
    <section className="relative">
      <div className="hidden xl:block">
        <FixedSocialSidebar />
      </div>

      <div className="space-y-12">
        {/* Main Stories Row */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-8 space-y-6">
            <article className="relative overflow-hidden rounded-3xl bg-slate-950 text-white shadow-xl group">
              {displayHero.imageUrl ? (
                 <Image 
                   src={displayHero.imageUrl} 
                   alt={displayHero.title}
                   width={960}
                   height={540}
                   className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover opacity-80 group-hover:opacity-60 transition-opacity"
                 />
              ) : (
                <ImagePlaceholder
                  width={960}
                  height={540}
                  text="Hero Story"
                  className="w-full h-[280px] sm:h-[360px] md:h-[420px] object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <span className="inline-flex items-center bg-red-600/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                  {getProp(displayHero, 'category', 'News')}
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-bold leading-tight drop-shadow-lg">
                  {displayHero.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-white/80 max-w-2xl line-clamp-2">
                  {displayHero.content}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-white/70">
                  <span>{getProp(displayHero, 'views', 0)} views</span>
                  <span className="opacity-70">•</span>
                  <span>{formatPublishedAt(displayHero.createdAt)}</span>
                  <span className="opacity-70">•</span>
                  <span>{displayHero.author}</span>
                </div>
              </div>
            </article>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {secondaryStories.map((story) => (
                <article
                  key={story.id}
                  className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative">
                    {story.imageUrl ? (
                      <Image
                        src={story.imageUrl}
                        alt={story.title}
                        width={460}
                        height={280}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <ImagePlaceholder
                        width={460}
                        height={280}
                        text={getProp(story, 'category', 'News')}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <span className="absolute top-4 left-4 bg-white/90 text-red-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {getProp(story, 'category', 'News')}
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                      {story.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {story.content}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                      <span>{getProp(story, 'views', 0)} views</span>
                      <span>•</span>
                      <span>{formatPublishedAt(story.createdAt)}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="col-span-12 xl:col-span-4 space-y-6">
            <div className="rounded-3xl border border-dashed border-red-200 bg-red-50 p-6 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-red-400 font-semibold">
                Advertisement
              </p>
              <h4 className="mt-3 text-lg font-bold text-red-600">
                Showcase your brand here
              </h4>
              <p className="mt-2 text-sm text-red-500">
                Reach over 1M Srishti readers every week
              </p>
              <button className="mt-4 inline-flex items-center justify-center rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white hover:bg-red-500 transition-colors">
                Book Now
              </button>
            </div>

            <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="px-5 py-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Trending Now
                </h3>
              </div>
              <div className="divide-y divide-slate-100">
                {trendingStories.length > 0 ? trendingStories.map((story, index) => (
                  <div
                    key={story.id}
                    className="flex gap-4 px-5 py-4 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 text-red-600 font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-sm font-semibold text-slate-900 leading-snug hover:text-red-600 transition-colors line-clamp-2">
                        {story.title}
                      </h4>
                      <div className="flex flex-wrap gap-2 text-xs text-slate-500">
                        <span>{getProp(story, 'category', 'Trending')}</span>
                        <span>•</span>
                        <span>{formatPublishedAt(story.createdAt)}</span>
                      </div>
                    </div>
                  </div>
                )) : (
                  <p className="px-5 py-4 text-sm text-slate-500">No trending stories.</p>
                )}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl shadow-sm overflow-hidden">
              <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-900">
                  Editor’s Pick
                </h3>
                <span className="text-xs uppercase tracking-wide text-red-500 font-semibold">
                  Handpicked
                </span>
              </div>
              {editorPicksWarning ? (
                <div className="px-5 py-3 bg-amber-50 text-amber-700 text-xs border-b border-amber-100 flex gap-2">
                  <span role="img" aria-label="info">
                    ℹ️
                  </span>
                  <span>{editorPicksWarning}</span>
                </div>
              ) : null}

              {leadEditorPick ? (
                <div className="px-5 pt-5 pb-5 space-y-5">
                  <article className="space-y-3">
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                      {leadEditorPick.mediaType === "video" &&
                      leadEditorPick.videoId ? (
                        <div className="aspect-video">
                          <iframe
                            title={`Editor's pick video ${leadEditorPick.title}`}
                            src={`https://www.youtube.com/embed/${leadEditorPick.videoId}`}
                            className="h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ) : leadEditorPick.imageUrl ? (
                        <Image
                          src={leadEditorPick.imageUrl}
                          alt={leadEditorPick.title}
                          width={640}
                          height={360}
                          className="h-full w-full object-cover"
                          priority
                        />
                      ) : (
                        <ImagePlaceholder
                          width={360}
                          height={220}
                          text="Editor's pick"
                          className="w-full h-48"
                        />
                      )}
                    </div>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-red-500 font-semibold">
                        <span>{leadEditorPick.category}</span>
                        {leadEditorPick.mediaType === "video" ? (
                          <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2.5 py-1 text-[10px] font-semibold text-red-600">
                            🎬 Video
                          </span>
                        ) : null}
                      </div>
                      <a
                        href={
                          leadEditorPick.articleUrl ||
                          leadEditorPick.videoUrl ||
                          "#"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <h4 className="text-lg font-bold text-slate-900 leading-tight hover:text-red-600 transition-colors">
                          {leadEditorPick.title}
                        </h4>
                      </a>
                      {leadEditorPick.summary ? (
                        <p className="text-sm text-slate-600 line-clamp-3">
                          {leadEditorPick.summary}
                        </p>
                      ) : null}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span>
                          {formatPublishedAt(new Date(leadEditorPick.publishedAt))}
                        </span>
                        <span>•</span>
                        <span>{leadEditorPick.author || "Editorial Desk"}</span>
                        {leadEditorPick.mediaType === "video" &&
                        leadEditorPick.videoDuration ? (
                          <>
                            <span>•</span>
                            <span>{leadEditorPick.videoDuration}</span>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </article>

                  {otherEditorPicks.length > 0 ? (
                    <div className="space-y-4 border-t border-slate-200 pt-4">
                      {otherEditorPicks.map((story) => (
                        <article
                          key={story.id}
                          className="flex gap-4 rounded-2xl border border-transparent px-3 py-3 transition-colors hover:border-slate-200 hover:bg-white"
                        >
                          <div className="w-32 flex-shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 relative">
                            {story.imageUrl ? (
                              <Image
                                src={story.imageUrl}
                                alt={story.title}
                                width={192}
                                height={144}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <ImagePlaceholder
                                width={128}
                                height={96}
                                text={
                                  story.mediaType === "video"
                                    ? "Video"
                                    : "Story"
                                }
                                className="w-full h-full"
                              />
                            )}
                            {story.mediaType === "video" ? (
                              <span className="absolute inset-0 flex items-center justify-center">
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white text-xs shadow-lg">
                                  ▶
                                </span>
                              </span>
                            ) : null}
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wide text-red-500 font-semibold">
                              <span>{story.category}</span>
                              {story.mediaType === "video" ? (
                                <span className="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-[2px] text-[9px] font-semibold text-red-600">
                                  Video
                                </span>
                              ) : null}
                            </div>
                            <a
                              href={story.articleUrl || story.videoUrl || "#"}
                              target="_blank"
                              rel="noreferrer"
                              className="block"
                            >
                              <h5 className="text-sm font-semibold text-slate-900 leading-snug hover:text-red-600 transition-colors line-clamp-2">
                                {story.title}
                              </h5>
                            </a>
                            {story.summary ? (
                              <p className="text-xs text-slate-500 line-clamp-2">
                                {story.summary}
                              </p>
                            ) : null}
                            <div className="flex flex-wrap items-center gap-1 text-[11px] text-slate-500">
                              <span>
                                {formatPublishedAt(new Date(story.publishedAt))}
                              </span>
                              <span>•</span>
                              <span>{story.author || "Editorial Desk"}</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : (
                <p className="px-5 py-4 text-sm text-slate-500">
                  No editor picks available yet.
                </p>
              )}
            </div>
          </aside>
        </div>

        {/* Popular Stories */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Popular Stories
              </h3>
              <p className="text-sm text-slate-500">
                Weekly round-up you shouldn’t miss
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((headline) => (
              <article
                key={headline.id}
                className="group bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <p className="text-xs uppercase tracking-wide text-red-500 font-semibold">
                  {getProp(headline, 'category', 'News')}
                </p>
                <h4 className="mt-3 text-lg font-bold text-slate-900 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                  {headline.title}
                </h4>
                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                  <span>{formatPublishedAt(headline.createdAt)}</span>
                  <span>•</span>
                  <span>Srishti Desk</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Opinion & Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">
                Opinion &amp; Analysis
              </h3>
              <a
                href="#"
                className="text-sm font-semibold text-red-500 hover:text-red-600"
              >
                View All
              </a>
            </div>
            <div className="divide-y divide-slate-100 p-6 text-center text-slate-500 text-sm">
              <p>Opinion pieces coming soon.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">SRISHTI TV</h3>
              <p className="text-sm text-slate-500">
                Watch the latest video highlights
              </p>
            </div>
            <div className="space-y-4 p-6">
              {videoStories.map((video) => (
                <div
                  key={video.id}
                  className="group border border-slate-200 rounded-2xl overflow-hidden hover:border-red-400 transition-all"
                >
                  <div className="relative">
                    <ImagePlaceholder
                      width={420}
                      height={240}
                      text="Video"
                      className="w-full h-40 object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/90 text-red-500 shadow-lg">
                        ▶
                      </span>
                    </span>
                    <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {getProp(video, 'videoDuration', 'LIVE')}
                    </span>
                  </div>
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-slate-900 leading-snug group-hover:text-red-600 transition-colors line-clamp-2">
                      {video.title}
                    </h4>
                  </div>
                </div>
              ))}
              {videoStories.length === 0 && (
                 <p className="text-sm text-slate-500">No videos available.</p>
              )}
            </div>
          </section>
        </div>

        {/* Gallery & Quick Reads */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section className="lg:col-span-2 rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">Gallery</h3>
              <a
                href="#"
                className="text-sm font-semibold text-red-500 hover:text-red-600"
              >
                View Photos
              </a>
            </div>
            <div className="p-6 text-center text-slate-500 text-sm">
               <p>Gallery images coming soon.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="px-6 py-5 border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900">Quick Reads</h3>
              <p className="text-sm text-slate-500">Catch up in minutes</p>
            </div>
            <div className="divide-y divide-slate-100">
              {latestNews.slice(0, 3).map((story) => (
                <article
                  key={story.id}
                  className="px-6 py-5 hover:bg-slate-50 transition-colors"
                >
                  <p className="text-xs uppercase tracking-wide text-red-500 font-semibold">
                    {getProp(story, 'category', 'Quick Read')}
                  </p>
                  <h4 className="mt-2 text-base font-semibold text-slate-900 leading-tight hover:text-red-600 transition-colors line-clamp-2">
                    {story.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-500">2 min read</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
