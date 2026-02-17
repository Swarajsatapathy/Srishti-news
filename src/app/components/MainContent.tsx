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
        where: { mediaType: "article" },
        orderBy: { createdAt: "desc" },
        take: 6,
      }),
    ]);

    heroStory = heroData[0];
    secondaryStories = secondaryData;
    trendingStories = trendingData;
    videoStories = videoData;
    latestNews = latestData;
  } catch (error) {
    // console.error("Failed to fetch news content:", error); // Silencing expected DB error
    // Fallback to empty states confirms we don't crash
  }

  const displayHero =
    heroStory ||
    latestNews[0] || null;

  const hasAnyNews = displayHero || latestNews.length > 0 || videoStories.length > 0 || editorPicksData.length > 0;

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

  const webNewsList: NewsItem[] = (latestNews.length ? latestNews : []).slice(0, 6).map(toPlain);
  const videoNewsList: NewsItem[] = (videoStories.length ? videoStories : secondaryStories.length ? secondaryStories : []).slice(0, 6).map(toPlain);
  const liveNewsList: NewsItem[] = (videoStories.length > 1 ? videoStories.slice(1) : latestNews.length ? latestNews : []).slice(0, 6).map(toPlain);
  const editorsDeskList: NewsItem[] = [leadEditorPick, ...otherEditorPicks].filter(Boolean).slice(0, 6).map(toPlain);

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

      {!hasAnyNews ? (
        <div className="flex flex-col items-center justify-center py-20 bg-slate-50 rounded-xl border border-slate-200">
          <div className="h-20 w-20 bg-slate-100 rounded-full flex items-center justify-center text-4xl mb-4">
            📰
          </div>
          <h2 className="text-2xl font-bold text-slate-900">News to come!</h2>
          <p className="text-slate-500 mt-2 text-center max-w-sm">
            We are working on bringing you the latest stories. Please check back later.
          </p>
        </div>
      ) : (
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
      )}
    </section>
  );
}
