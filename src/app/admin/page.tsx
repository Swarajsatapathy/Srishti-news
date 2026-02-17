"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface NewsItem {
  id: number;
  title: string;
  content: string;
  imageUrl: string | null;
  category: string;
  author: string;
  createdAt: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
    category: "General",
    mediaType: "article",
    videoUrl: "",
    featured: false,
    trending: false,
  });

  const fetchNews = async () => {
    try {
      const res = await fetch("/api/news");
      const data = await res.json();
      setNews(data.news || []);
    } catch {
      setError("Failed to fetch news");
    } finally {
      setLoading(false);
    }
  };

  // Check auth on mount
  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.user?.role !== "admin") {
          router.push("/auth");
          return;
        }
        setAuthorized(true);
        fetchNews();
      })
      .catch(() => {
        router.push("/auth");
      });
  }, [router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    const name = target.name;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setSuccess("News article published!");
      setFormData({
        title: "",
        content: "",
        imageUrl: "",
        category: "General",
        mediaType: "article",
        videoUrl: "",
        featured: false,
        trending: false,
      });
      fetchNews();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create news");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Are you sure you want to delete this article?")) return;

    try {
      const res = await fetch(`/api/news/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");
      setNews(news.filter((n) => n.id !== id));
      setSuccess("Article deleted successfully");
    } catch {
      setError("Failed to delete article");
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex items-center space-x-2 text-slate-600">
          <span className="loading-spinner"></span>
          <span>Checking authorization...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-black sm:text-4xl">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-lg text-black font-medium">
            Manage your news articles — add new stories or remove outdated ones
          </p>
        </div>

        {error && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}
        {success && (
          <div className="mb-6 bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md">
            <p className="text-sm text-green-700">{success}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add News Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
              <h3 className="text-xl font-bold text-black mb-6 flex items-center">
                <span className="mr-2">✍️</span> Publish New Article
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-bold text-black mb-1"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="appearance-none rounded-lg block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    placeholder="Article title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="appearance-none rounded-lg block w-full px-3 py-2 border border-slate-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    >
                      <option value="General">General</option>
                      <option value="State">State</option>
                      <option value="Politics">Politics</option>
                      <option value="Education">Education</option>
                      <option value="Sports">Sports</option>
                      <option value="Technology">Technology</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">
                      Type
                    </label>
                    <select
                      name="mediaType"
                      value={formData.mediaType}
                      onChange={handleChange}
                      className="appearance-none rounded-lg block w-full px-3 py-2 border border-slate-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    >
                      <option value="article">Article</option>
                      <option value="video">Video</option>
                    </select>
                  </div>
                </div>

                {formData.mediaType === "video" && (
                  <div>
                    <label className="block text-sm font-bold text-black mb-1">
                      YouTube Video ID
                    </label>
                    <input
                      name="videoUrl"
                      type="text"
                      className="appearance-none rounded-lg block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      placeholder="e.g. dQw4w9WgXcQ"
                      value={formData.videoUrl}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}

                <div>
                  <label
                    className="block text-sm font-bold text-black mb-1"
                    htmlFor="content"
                  >
                    Content / Summary
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    rows={4}
                    className="appearance-none rounded-lg block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    placeholder="Article content..."
                    value={formData.content}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-bold text-black mb-1"
                    htmlFor="imageUrl"
                  >
                    Image URL (optional)
                  </label>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    className="appearance-none rounded-lg block w-full px-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    placeholder="https://example.com/image.jpg"
                    value={formData.imageUrl}
                    onChange={handleChange}
                  />
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center space-x-2 text-sm font-medium text-black">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleChange}
                      className="rounded text-red-600 focus:ring-red-500"
                    />
                    <span>Featured (Hero)</span>
                  </label>
                  <label className="flex items-center space-x-2 text-sm font-medium text-black">
                    <input
                      type="checkbox"
                      name="trending"
                      checked={formData.trending}
                      onChange={handleChange}
                      className="rounded text-red-600 focus:ring-red-500"
                    />
                    <span>Trending</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-70 transition-colors"
                  disabled={submitting}
                >
                  {submitting ? "Publishing..." : "Publish Article"}
                </button>
              </form>
            </div>
          </div>

          {/* News List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                <h3 className="text-lg font-bold text-black">
                  📋 Published Articles
                </h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  {news.length} Total
                </span>
              </div>

              {loading ? (
                <div className="p-12 text-center text-slate-500">
                  Loading articles...
                </div>
              ) : news.length === 0 ? (
                <div className="p-12 text-center">
                  <div className="text-4xl mb-4">📝</div>
                  <h3 className="text-lg font-medium text-slate-900">
                    No articles yet
                  </h3>
                  <p className="mt-1 text-slate-500">
                    Publish your first article to see it here.
                  </p>
                </div>
              ) : (
                <div className="divide-y divide-slate-200">
                  {news.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-black line-clamp-1 mb-1">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-xs text-slate-500 mb-2 space-x-2">
                          <span className="uppercase text-red-600 font-bold">
                            {item.category || "General"}
                          </span>
                          <span>•</span>
                          <span>By {item.author}</span>
                          <span>•</span>
                          <span>
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-IN",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </span>
                        </div>

                        <p className="text-sm text-black line-clamp-2">
                          {item.content}
                        </p>
                      </div>
                      <div className="flex items-center sm:self-center">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-900 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-red-50 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
