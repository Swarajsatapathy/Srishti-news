export default function YouTubeVideoCard({ videoId, title, views, timeAgo, showControls = true }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
      <div className="relative">
        {/* Live Badge */}
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded animate-pulse">
            🔴 LIVE
          </span>
        </div>
        
        {/* YouTube Video */}
        <div className="relative w-full" style={{paddingBottom: '56.25%'}}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0&controls=${showControls ? 1 : 0}&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Video Info */}
      <div className="p-3 lg:p-4">
        <h3 className="font-bold text-sm lg:text-base text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs lg:text-sm text-gray-500 gap-2">
          <span>👁️ {views} ଦର୍ଶକ</span>
          <span>🕐 {timeAgo}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-3 lg:px-4 pb-3 lg:pb-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="flex items-center space-x-1 text-xs lg:text-sm text-gray-600 hover:text-red-600 transition-colors">
              <span>👍</span>
              <span className="hidden sm:inline">ପସନ୍ଦ</span>
            </button>
            <button className="flex items-center space-x-1 text-xs lg:text-sm text-gray-600 hover:text-blue-600 transition-colors">
              <span>📤</span>
              <span className="hidden sm:inline">ସେୟାର</span>
            </button>
          </div>
          <button className="text-xs lg:text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 transition-colors">
            ସବସ୍କ୍ରାଇବ
          </button>
        </div>
      </div>
    </div>
  );
}
