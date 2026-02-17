import { getSupabaseServiceRoleClient, isSupabaseConfigured } from "@/lib/supabaseServer";

const TABLE_NAME = "editor_picks";

export const demoEditorPicks: any[] = [];

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
