"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

export type NewsItem = {
  id: number | string;
  title: string;
  content?: string | null;
  summary?: string | null;
  category?: string | null;
  imageUrl?: string | null;
  videoUrl?: string | null;
  createdAt?: string;
  views?: number;
};

export type PersonCard = {
  photoUrl?: string | null;
  name: string;
  designation?: string;
  location?: string;
  message?: string;
};

type Props = {
  webNewsList: NewsItem[];
  videoNewsList: NewsItem[];
  liveNewsList: NewsItem[];
  editorsDeskList: NewsItem[];
  dignitaryMessage: PersonCard;
  correspondent: PersonCard;
};

export default function NewsGrid({
  webNewsList,
  videoNewsList,
  liveNewsList,
  editorsDeskList,
  dignitaryMessage,
  correspondent,
}: Props) {
  const [webIdx, setWebIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);
  const [liveIdx, setLiveIdx] = useState(0);
  const [editorIdx, setEditorIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const safeCycle = (list: NewsItem[]) => (list?.length ?? 0) > 0 ? list : [];

  const wList = useMemo(() => safeCycle(webNewsList), [webNewsList]);
  const vList = useMemo(() => safeCycle(videoNewsList), [videoNewsList]);
  const lList = useMemo(() => safeCycle(liveNewsList), [liveNewsList]);
  const eList = useMemo(() => safeCycle(editorsDeskList), [editorsDeskList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (paused) return;
      if (wList.length > 1) setWebIdx((i) => (i + 1) % wList.length);
      if (vList.length > 1) setVideoIdx((i) => (i + 1) % vList.length);
      if (lList.length > 1) setLiveIdx((i) => (i + 1) % lList.length);
      if (eList.length > 1) setEditorIdx((i) => (i + 1) % eList.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [wList.length, vList.length, lList.length, eList.length, paused]);

  const formatDate = (value?: string) => {
    if (!value) return "Just now";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Just now";
    const diffInSeconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return date.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
  };

  const renderNewsCard = (
    item: NewsItem,
    titleFallback: string,
    ctaText: string,
    href: string,
    accent?: "live" | "video" | "default",
    onPrev?: () => void,
    onNext?: () => void,
  ) => {
    const icon = accent === "video" ? "▶" : accent === "live" ? "🔴" : null;
    const hasPrev = Boolean(onPrev);
    const hasNext = Boolean(onNext);
    return (
      <article className="relative border-2 border-[#2b4d8f] bg-white rounded-lg overflow-hidden min-h-88 flex flex-col shadow-sm hover:shadow-md transition-shadow">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button
            type="button"
            onClick={onPrev}
            disabled={!hasPrev}
            className={`pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md hover:bg-[#1f3b75] focus:ring-2 focus:ring-offset-2 focus:ring-[#1f3b75] focus:outline-none border-2 border-[#d6deef] ${
              hasPrev ? "" : "opacity-40 cursor-not-allowed"
            }`}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className={`pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md hover:bg-[#1f3b75] focus:ring-2 focus:ring-offset-2 focus:ring-[#1f3b75] focus:outline-none border-2 border-[#d6deef] ${
              hasNext ? "" : "opacity-40 cursor-not-allowed"
            }`}
            aria-label="Next"
          >
            →
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full h-full min-h-40">
            {item?.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            ) : (() => {
                // Inline helper to get YT thumb if videoUrl exists
                const getYtThumb = (url?: string | null) => {
                    if (!url) return null;
                    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);
                    return (match && match[2].length === 11) ? `https://img.youtube.com/vi/${match[2]}/mqdefault.jpg` : null;
                };
                const thumb = getYtThumb(item?.videoUrl);
                return thumb ? (
                     <Image
                        src={thumb}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        className="object-cover"
                      />
                ) : (
                  <ImagePlaceholder
                    width={600}
                    height={360}
                    text={item?.category || "News"}
                    className="w-full h-full"
                  />
                );
            })()}
            {icon && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white text-lg shadow">
                  {icon}
                </span>
              </span>
            )}
          </div>
        </div>
        <div className="bg-[#e7a915] text-center text-sm font-semibold text-slate-900 py-2 leading-tight">
          {item?.title || titleFallback}
        </div>
        <div className="p-3 space-y-2 text-xs text-slate-700 flex flex-col flex-none">
          <p className="line-clamp-2">{item?.content || item?.summary || "Latest update from Srishti News."}</p>
          <div className="flex items-center justify-between text-[11px] text-slate-500">
            <span>{formatDate(item?.createdAt)}</span>
            <span>{item?.views ?? 0} views</span>
          </div>
          <Link
            href={href}
            className="inline-flex items-center justify-center rounded bg-red-600 px-3 py-2 text-[11px] font-semibold text-white hover:bg-red-700 self-start"
          >
            {ctaText}
          </Link>
        </div>
      </article>
    );
  };

  const webItem = wList[webIdx] || wList[0];
  const videoItem = vList[videoIdx] || vList[0];
  const liveItem = lList[liveIdx] || lList[0];
  const editorItem = eList[editorIdx] || eList[0];

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {renderNewsCard(
        webItem,
        "Web News",
        "Read Article",
        `/web-news/${webItem?.id ?? ""}`,
        "default",
        wList.length > 1 ? () => setWebIdx((webIdx - 1 + wList.length) % wList.length) : undefined,
        wList.length > 1 ? () => setWebIdx((webIdx + 1) % wList.length) : undefined,
      )}

      {renderNewsCard(
        videoItem,
        "Video News",
        "Watch Video",
        videoItem?.videoUrl || `/web-news/${videoItem?.id ?? ""}`,
        "video",
        vList.length > 1 ? () => setVideoIdx((videoIdx - 1 + vList.length) % vList.length) : undefined,
        vList.length > 1 ? () => setVideoIdx((videoIdx + 1) % vList.length) : undefined,
      )}

      <article className="relative border-2 border-[#2b4d8f] bg-[#e7a915] rounded-lg overflow-hidden min-h-72 flex flex-col md:col-span-2 shadow-sm hover:shadow-md transition-shadow">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button className="pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md opacity-40 cursor-not-allowed border-2 border-[#d6deef]" aria-label="Previous" disabled>
            ←
          </button>
          <button className="pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md opacity-40 cursor-not-allowed border-2 border-[#d6deef]" aria-label="Next" disabled>
            →
          </button>
        </div>
        <div className="flex flex-col lg:flex-row h-full">
          <div className="flex flex-col items-center justify-center p-4 gap-3 lg:w-4/12">
            <div className="h-14 w-14 rounded-full bg-[#2b4d8f] text-white flex items-center justify-center text-[11px] font-semibold">
              PHOTO
            </div>
            <div className="bg-[#2b4d8f] text-white text-xs font-semibold px-3 py-2 rounded text-center leading-tight">
              {dignitaryMessage.name}
              <div className="text-[11px] font-normal">{dignitaryMessage.designation}</div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center p-4 text-[#1f3b75] text-sm font-semibold text-center lg:text-right leading-relaxed">
            {dignitaryMessage.message}
          </div>
        </div>
      </article>

      {renderNewsCard(
        liveItem,
        "Live@Srishti",
        "Watch Live",
        liveItem?.videoUrl || `/web-news/${liveItem?.id ?? ""}`,
        "live",
        lList.length > 1 ? () => setLiveIdx((liveIdx - 1 + lList.length) % lList.length) : undefined,
        lList.length > 1 ? () => setLiveIdx((liveIdx + 1) % lList.length) : undefined,
      )}

      {renderNewsCard(
        editorItem,
        "Editor's Desk",
        "Read More",
        editorItem?.videoUrl || `/web-news/${editorItem?.id ?? ""}`,
        "default",
        eList.length > 1 ? () => setEditorIdx((editorIdx - 1 + eList.length) % eList.length) : undefined,
        eList.length > 1 ? () => setEditorIdx((editorIdx + 1) % eList.length) : undefined,
      )}

      <article className="relative border-2 border-[#2b4d8f] bg-white rounded-lg overflow-hidden min-h-40 flex flex-col">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button className="pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md opacity-40 cursor-not-allowed border-2 border-[#d6deef]" aria-label="Previous" disabled>
            ←
          </button>
          <button className="pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md opacity-40 cursor-not-allowed border-2 border-[#d6deef]" aria-label="Next" disabled>
            →
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="space-y-3 w-full">
            <div className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-[#2b4d8f] text-white flex items-center justify-center text-[11px] font-semibold">
                PHOTO
              </div>
            </div>
            <div className="bg-[#2b4d8f] text-white text-center text-xs font-semibold px-3 py-2 rounded leading-tight">
              {correspondent.name}
              <div className="text-[11px] font-normal">{correspondent.designation}</div>
              <div className="text-[11px] font-normal">{correspondent.location}</div>
            </div>
          </div>
        </div>
      </article>

      <article className="relative border-2 border-[#2b4d8f] bg-white rounded-lg overflow-hidden min-h-40 flex items-center justify-center text-[#2b4d8f] font-semibold text-sm tracking-wide">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10">
          <button className="pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md opacity-40 cursor-not-allowed border-2 border-[#d6deef]" aria-label="Previous" disabled>
            ←
          </button>
          <button className="pointer-events-auto h-9 w-9 rounded-full bg-[#2b4d8f] text-[#e7edff] shadow-md opacity-40 cursor-not-allowed border-2 border-[#d6deef]" aria-label="Next" disabled>
            →
          </button>
        </div>
        ADVERTISE HERE
      </article>
    </div>
  );
}
