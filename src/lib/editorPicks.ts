import { getSupabaseServiceRoleClient, isSupabaseConfigured } from "@/lib/supabaseServer";

const TABLE_NAME = "editor_picks";

export const demoEditorPicks = [
  {
    id: 1,
    title: "Hyderabad metro expansion connects new cultural hub",
    category: "City Desk",
    summary:
      "The long-awaited metro extension opens to commuters, bringing faster travel and renewed investment to the old town.",
    articleUrl: "https://srishti.news/newsroom/demo-hyderabad",
    imageUrl: "https://images.unsplash.com/photo-1529429617124-aee0014819be?w=1200&q=80",
    author: "Newsroom Desk",
    publishedAt: new Date().toISOString(),
    priority: 1,
    status: "published",
    mediaType: "article",
    updatedAt: new Date().toISOString()
  },
  {
    id: 2,
    title: "Odisha coastal clean-up rallies 2,000 volunteers",
    category: "Environment",
    summary:
      "Students and fisherfolk collaborate for the region's biggest shoreline clean-up ahead of tourist season.",
    articleUrl: "https://srishti.news/newsroom/demo-coast",
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    author: "Srishti News Digital",
    publishedAt: new Date().toISOString(),
    priority: 2,
    status: "draft",
    mediaType: "article",
    updatedAt: new Date().toISOString()
  },
  {
    id: 3,
    title: "Watch: Editor's Pick – Stories behind the headlines",
    category: "Video",
    summary: "Our editors explain the week in under five minutes.",
    articleUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    imageUrl: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    author: "Video Desk",
    publishedAt: new Date().toISOString(),
    priority: 3,
    status: "published",
    mediaType: "video",
    videoId: "dQw4w9WgXcQ",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    updatedAt: new Date().toISOString()
  }
];

function mapDbRecord(item: any) {
  return {
    id: item.id,
    title: item.title,
    category: item.category,
    summary: item.summary ?? "",
    articleUrl: item.article_url ?? item.video_url ?? "",
    imageUrl: item.image_url ?? null,
    author: item.author ?? "Srishti News",
    publishedAt: item.published_at,
    priority: item.priority ?? 99,
    status: item.status ?? "draft",
    mediaType: item.media_type ?? "article",
    videoId: item.video_id ?? null,
    videoUrl: item.video_url ?? null,
    videoChannel: item.video_channel ?? null,
    videoDuration: item.video_duration ?? null,
    updatedAt: item.updated_at ?? item.published_at
  };
}

export async function listEditorPicks() {
  if (!isSupabaseConfigured()) {
    return { data: demoEditorPicks, warning: "Supabase environment variables are missing. Showing demo data." };
  }

  try {
    const supabase = getSupabaseServiceRoleClient();
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select(
        "id, title, category, summary, article_url, image_url, author, published_at, priority, status, media_type, video_id, video_url, video_channel, video_duration, updated_at"
      )
      .order("priority", { ascending: true })
      .order("updated_at", { ascending: false });

    if (error) {
      if (error.code === "42P01") {
        return {
          data: demoEditorPicks,
          warning:
            "Editor picks table is missing in Supabase. Run the setup SQL from the editor portal README to create it."
        };
      }
      throw error;
    }

    return { data: (data ?? []).map(mapDbRecord) };
  } catch (error) {
    console.error("Failed to load editor picks", error);
    return { data: demoEditorPicks, warning: "Falling back to demo data. Check Supabase configuration." };
  }
}
