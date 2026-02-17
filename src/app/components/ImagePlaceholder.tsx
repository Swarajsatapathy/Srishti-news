export default function ImagePlaceholder({
  width = 300,
  height = 200,
  text = "News Image",
  className = "",
}: {
  width?: number;
  height?: number;
  text?: string;
  className?: string;
}) {
  // Create SVG data URL for placeholder
  const createPlaceholder = (w: number, h: number, txt: string) => {
    const svg = `
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#e5e7eb"/>
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" fill="#6b7280">
          ${txt}
        </text>
      </svg>
    `;

    const encodeSvg = (markup: string) => {
      if (typeof window === "undefined") {
        return Buffer.from(markup).toString("base64");
      }

      return window.btoa(unescape(encodeURIComponent(markup)));
    };

    return `data:image/svg+xml;base64,${encodeSvg(svg)}`;
  };

  return (
    <div
      className={`relative ${className} bg-gray-200 rounded overflow-hidden`}
      style={{ width: className.includes("w-full") ? "100%" : width, height: className.includes("h-full") ? "100%" : height }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-300"
        style={{
          backgroundImage: `url("${createPlaceholder(width, height, text)}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
}
