import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ImagePlaceholder from "../../components/ImagePlaceholder";

function formatPublishedAt(date: Date) {
  return new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function WebNewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const newsId = parseInt(id, 10);

  if (Number.isNaN(newsId)) {
    notFound();
  }

  const article = await prisma.news.findUnique({ where: { id: newsId } });

  if (!article || article.mediaType !== "article") {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-360 mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <header className="space-y-2 mb-6">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
            Web News
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <span>{article.category || "News"}</span>
            <span>•</span>
            <span>{formatPublishedAt(article.createdAt)}</span>
            <span>•</span>
            <span>{article.author || "Srishti News"}</span>
          </div>
        </header>

        <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.title}
              width={1200}
              height={640}
              className="w-full max-h-105 object-cover"
              priority
            />
          ) : (
            <ImagePlaceholder
              width={1200}
              height={640}
              text={article.category || "News"}
              className="w-full max-h-105"
            />
          )}

          <div className="p-6 sm:p-8 space-y-6">
            {article.content ? (
              <p className="whitespace-pre-line text-base leading-relaxed text-slate-800">
                {article.content}
              </p>
            ) : (
              <p className="text-sm text-slate-500">No content available.</p>
            )}

            <div className="flex flex-wrap gap-3 text-xs text-slate-500 border-t border-slate-200 pt-4">
              <span>{article.views ?? 0} views</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
