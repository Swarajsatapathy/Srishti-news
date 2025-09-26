import YouTubeVideoCard from './YouTubeVideoCard';
import { featuredVideo } from '../constants/data';

export default function Sidebar({ sideNews }) {
  return (
    <div className="space-y-6">
      {/* Breaking News */}
      <div className="bg-white rounded-lg shadow-lg p-4 lg:p-6">
        <h3 className="text-lg lg:text-xl font-bold mb-4 text-red-600">
          🔥 ଜରୁରୀ ଖବର
        </h3>
        <div className="space-y-3">
          {sideNews.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
            >
              <h4 className="font-medium text-sm hover:text-red-600 cursor-pointer line-clamp-2 mb-1">
                {item.title}
              </h4>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Widget */}
      <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-4 lg:p-6 text-white">
        <h3 className="text-base lg:text-lg font-bold mb-3">🌤️ ଆଜିର ପାଗ</h3>
        <div className="text-center">
          <div className="text-2xl lg:text-3xl font-bold">28°C</div>
          <div className="text-sm opacity-90">ଭୁବନେଶ୍ୱର</div>
          <div className="text-xs lg:text-sm opacity-75">ଆଂଶିକ ମେଘାଛନ୍ନ</div>
        </div>
      </div>

      {/* YouTube Video Card */}
      <div className="hidden lg:block">
        <YouTubeVideoCard 
          videoId={featuredVideo.videoId}
          title={featuredVideo.title}
          views={featuredVideo.views}
          timeAgo={featuredVideo.timeAgo}
          showControls={true}
        />
      </div>
    </div>
  );
}