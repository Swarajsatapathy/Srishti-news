import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { listEditorPicks } from "@/lib/editorPicks";
import ImagePlaceholder from "./ImagePlaceholder";
import FixedSocialSidebar from "./FixedSocialSidebar";
import NewsGrid, { NewsItem, PersonCard } from "./NewsGrid";

function formatPublishedAt(date: Date | string | number | undefined) {
  if (!date) return "Just now";
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

  let heroStory: any;
  let secondaryStories: any[] = [];
  let trendingStories: any[] = [];
  let videoStories: any[] = [];
  let latestNews: any[] = [];

  try {
    const [heroData, secondaryData, trendingData, videoData, latestData] = await Promise.all([
      prisma.news.findMany({
        where: { featured: true },
        orderBy: { createdAt: "desc" },
        take: 1,
      }),
      prisma.news.findMany({
        where: { featured: false },
        orderBy: { createdAt: "desc" },
        take: 3,
      }),
      prisma.news.findMany({
        where: { trending: true },
        orderBy: { createdAt: "desc" },
        take: 3,
      }),
      prisma.news.findMany({
        where: { mediaType: "video" },
        orderBy: { createdAt: "desc" },
        take: 2,
      }),
      prisma.news.findMany({
        orderBy: { createdAt: "desc" },
        take: 6,
      }),
    ]);

    heroStory = heroData[0];
    secondaryStories = secondaryData.filter((s) => s.id !== heroStory?.id).slice(0, 2);
    trendingStories = trendingData;
    videoStories = videoData;
    latestNews = latestData;
  } catch (error) {
    console.error("Failed to fetch news content", error, editorPicksWarning);

    heroStory = {
      id: 1,
      title: "Bhubaneswar smart corridor clears final safety audit",
      content: "The 18-km elevated stretch will open next month with dedicated bus, cycle, and emergency lanes for seamless travel.",
      category: "State",
      author: "Srishti News Desk",
      createdAt: new Date("2024-03-08"),
      imageUrl: null,
      featured: true,
    };

    secondaryStories = [
      {
        id: 2,
        title: "Election Commission unveils inclusive polling plan",
        content: "Community volunteers will assist senior citizens and first-time voters at model booths across the state.",
        category: "Politics",
        views: 256,
        createdAt: new Date("2024-03-08"),
        imageUrl: null,
      },
      {
        id: 3,
        title: "Schools adopt blended learning toolkit for 2024",
        content: "Teachers receive new digital resources and training to bridge classroom gaps in science and languages.",
        category: "Education",
        views: 198,
        createdAt: new Date("2024-03-08"),
        imageUrl: null,
      },
    ];

    trendingStories = [
      { id: 101, title: "Metro ridership hits all-time high over weekend", category: "Trending", views: 282, createdAt: new Date() },
      { id: 102, title: "Monsoon preparedness drive starts early this year", category: "Trending", views: 256, createdAt: new Date() },
      { id: 103, title: "New agri markets bring relief to coastal farmers", category: "Trending", views: 214, createdAt: new Date() },
    ];

    videoStories = [
      { id: 201, title: "Live with Amiya: The headlines you need this week", videoDuration: "12:45", mediaType: "video" },
      { id: 202, title: "Daily Briefing: Key policy announcements explained", videoDuration: "08:21", mediaType: "video" },
    ];

    latestNews = [
      { id: 301, title: "Health department issues summer heat advisory", category: "Health", createdAt: new Date() },
      { id: 302, title: "City announces 24x7 water helpline", category: "Civic", createdAt: new Date() },
      { id: 303, title: "₹150 crore credit support cleared for farmer collectives", category: "Agriculture", createdAt: new Date() },
      { id: 304, title: "Disaster response teams hold mock drills statewide", category: "Update", createdAt: new Date() },
      { id: 305, title: "Mega district job fair opens tomorrow", category: "Employment", createdAt: new Date() },
      { id: 306, title: "Indie filmmakers announce three new releases", category: "Entertainment", createdAt: new Date() },
    ];
  }

  const displayHero =
    heroStory ||
    latestNews[0] || {
      id: 0,
      title: "Welcome to Srishti News",
      excerpt: "Breaking news and latest updates from Odisha and beyond.",
      category: "General",
      author: "System",
      createdAt: new Date(),
      imageUrl: null,
    };

  const toPlain = (item: any): NewsItem => ({
    id: item?.id ?? Math.random(),
    title: item?.title ?? "",
    content: item?.content ?? item?.excerpt ?? null,
    summary: item?.summary ?? null,
    category: item?.category ?? null,
    imageUrl: item?.imageUrl ?? null,
    videoUrl: item?.videoUrl ?? null,
    createdAt: item?.createdAt ? new Date(item.createdAt).toISOString() : undefined,
    views: item?.views ?? 0,
  });

  const webNewsList: NewsItem[] = (latestNews.length ? latestNews : [displayHero]).slice(0, 6).map(toPlain);
  const videoNewsList: NewsItem[] = (videoStories.length ? videoStories : secondaryStories.length ? secondaryStories : [displayHero]).slice(0, 6).map(toPlain);
  const liveNewsList: NewsItem[] = (videoStories.length > 1 ? videoStories.slice(1) : latestNews.length ? latestNews : [displayHero]).slice(0, 6).map(toPlain);
  const editorsDeskList: NewsItem[] = [leadEditorPick, ...otherEditorPicks, displayHero].filter(Boolean).slice(0, 6).map(toPlain);

  const dignitaryMessage: PersonCard = {
    photoUrl: null,
    name: "Guest Dignitary",
    designation: "Community Leader",
    message: "Message from different dignitaries of the society.",
  };

  const correspondent: PersonCard = {
    photoUrl: null,
    name: "Manoj Satapathy",
    designation: "Block Correspondent",
    location: "Junagarh, Kalahandi",
  };

  const getProp = (item: any, key: string, fallback: any) => item?.[key] ?? fallback;

  return (
    <section className="relative">
      <div className="hidden xl:block">
        <FixedSocialSidebar />
      </div>

      <div className="space-y-5">
        <NewsGrid
          webNewsList={webNewsList}
          videoNewsList={videoNewsList}
          liveNewsList={liveNewsList}
          editorsDeskList={editorsDeskList}
          dignitaryMessage={dignitaryMessage}
          correspondent={correspondent}
        />
      </div>
    </section>
  );
}
