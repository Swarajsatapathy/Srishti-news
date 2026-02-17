import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import ImagePlaceholder from "../components/ImagePlaceholder";
import ReadMore from "../components/ReadMore";

function formatPublishedAt(date: Date) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function WebNewsPage() {
  let articles: any[] = [];

  try {
    articles = await prisma.news.findMany({
      where: { mediaType: "article" },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Failed to load web news:", error);
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-360 mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8 space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Web News
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Latest Articles
          </h1>
          <p className="text-sm text-slate-500">
            All news articles published by the Srishti News team.
          </p>
        </header>

        {articles.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500">
            No articles available yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((story) => (
              <article
                key={story.id}
                className="group rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div className="relative">
                  {story.imageUrl ? (
                    <Image
                      src={story.imageUrl}
                      alt={story.title}
                      width={520}
                      height={320}
                      className="h-48 w-full object-cover"
                    />
                  ) : (
                    <ImagePlaceholder
                      width={520}
                      height={320}
                      text={story.category || "News"}
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-red-600 shadow">
                    {story.category || "News"}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <Link
                    href={`/web-news/${story.id}`}
                    className="block text-lg font-bold text-slate-900 leading-tight group-hover:text-red-600 transition-colors"
                  >
                    {story.title}
                  </Link>
                  {story.content ? (
                    <ReadMore
                      text={story.content}
                      maxWords={20}
                      className="text-sm text-slate-600 whitespace-pre-line"
                      href={`/web-news/${story.id}`}
                    />
                  ) : null}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span>{formatPublishedAt(story.createdAt)}</span>
                    <span>•</span>
                    <span>{story.author || "Srishti News"}</span>
                    {typeof story.views === "number" ? (
                      <>
                        <span>•</span>
                        <span>{story.views} views</span>
                      </>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
