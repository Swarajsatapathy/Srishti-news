import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import ImagePlaceholder from "../components/ImagePlaceholder";

function getYouTubeThumbnail(url: string | null) {
  if (!url) return null;
  // Simple regex to extract ID from standard YT URLs
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  const id = (match && match[2].length === 11) ? match[2] : null;
  
  if (id) return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
  return null;
}

export default async function VideoNewsPage() {
  let videos: any[] = [];

  try {
    videos = await prisma.news.findMany({
      where: { mediaType: "video" },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to load video news:", error);
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-360 mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-red-600 font-bold">
            Sristhi TV
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Video News
          </h1>
          <p className="text-sm text-slate-500">
            Watch the latest coverage and reports.
          </p>
        </header>

        {videos.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
            No videos available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => {
               const thumb = video.imageUrl || getYouTubeThumbnail(video.videoUrl);
               
               return (
                <article
                  key={video.id}
                  className="group rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-video bg-slate-100">
                    {thumb ? (
                      <Image
                        src={thumb}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <ImagePlaceholder
                         width={640}
                         height={360}
                         text="Video"
                         className="w-full h-full"
                      />
                    )}
                    <a 
                      href={video.videoUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2 py-1 rounded">
                        {video.category || "News"}
                      </span>
                      <span className="text-xs text-slate-400">
                        {new Date(video.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 leading-tight line-clamp-2 group-hover:text-red-700 transition-colors mb-2">
                      <a href={video.videoUrl || "#"} target="_blank" rel="noopener noreferrer">
                        {video.title}
                      </a>
                    </h3>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
