import Image from "next/image";

export default function ImagePlaceholder({ width = 300, height = 200, text = "News Image", className = "" }) {
  // Create a simple data URL for placeholder
  const createPlaceholder = (w, h, txt) => {
    const canvas = typeof window !== 'undefined' ? document.createElement('canvas') : null;
    if (!canvas) {
      // Server-side fallback
      return `data:image/svg+xml;base64,${btoa(`
        <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#e5e7eb"/>
          <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="16" fill="#6b7280">
            ${txt}
          </text>
        </svg>
      `)}`;
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    
    // Background
    ctx.fillStyle = '#e5e7eb';
    ctx.fillRect(0, 0, w, h);
    
    // Text
    ctx.fillStyle = '#6b7280';
    ctx.font = '16px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(txt, w / 2, h / 2);
    
    return canvas.toDataURL();
  };

  return (
    <div className={`relative ${className} bg-gray-200 rounded overflow-hidden`} style={{ width, height }}>
      <div 
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300"
        style={{
          backgroundImage: `url("data:image/svg+xml;base64,${btoa(`
            <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#e5e7eb"/>
              <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial, sans-serif" font-size="14" fill="#6b7280">
                ${text}
              </text>
            </svg>
          `)}")`
        }}
      />
    </div>
  );
}
