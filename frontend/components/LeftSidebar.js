export default function LeftSidebar() {
  return (
    <aside className="space-y-4 lg:space-y-6">
      {/* Advertisement Banner */}
      <div className="ad-card bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-3 lg:p-4 text-white text-center shadow-lg">
        <h3 className="font-bold text-sm lg:text-base mb-2">ବିଜ୍ଞାପନ</h3>
        <div className="bg-white/20 rounded p-2 lg:p-3 backdrop-blur-sm">
          <p className="text-xs lg:text-sm opacity-90">ଆପଣଙ୍କ ବିଜ୍ଞାପନ ଏଠାରେ</p>
          <p className="text-xs lg:text-sm font-semibold mt-1">300x250</p>
        </div>
      </div>

      {/* Sponsor Box */}
      <div className="bg-white rounded-lg shadow-md p-3 lg:p-4">
        <h3 className="font-bold text-sm lg:text-base text-gray-900 mb-3 border-b border-gray-200 pb-2">
          ପ୍ରାୟୋଜକ
        </h3>
        <div className="grid grid-cols-2 gap-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="ad-card bg-gray-100 rounded p-2 lg:p-3 text-center hover:bg-gray-50 transition-colors">
              <div className="w-full h-12 lg:h-16 bg-gradient-to-r from-red-400 to-red-600 rounded mb-2 flex items-center justify-center">
                <span className="text-white text-xs lg:text-sm font-bold">LOGO</span>
              </div>
              <p className="text-xs text-gray-600">ସ୍ପନ୍ସର {item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white rounded-lg shadow-md p-3 lg:p-4">
        <h3 className="font-bold text-sm lg:text-base text-gray-900 mb-3 border-b border-gray-200 pb-2">
          ତ୍ୱରିତ ଲିଙ୍କ
        </h3>
        <div className="space-y-2">
          {[
            "ସରକାରୀ ଚାକିରି",
            "ଶିକ୍ଷା ନୀତି", 
            "ଖେଳ ଖବର",
            "ବ୍ୟବସାୟିକ ସମାଚାର",
            "ଟେକ୍ନୋଲଜି"
          ].map((link, index) => (
            <button
              key={index}
              className="w-full text-left p-2 text-xs lg:text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded"
            >
              → {link}
            </button>
          ))}
        </div>
      </div>

      {/* Social Media Feed */}
      <div className="bg-white rounded-lg shadow-md p-3 lg:p-4">
        <h3 className="font-bold text-sm lg:text-base text-gray-900 mb-3 border-b border-gray-200 pb-2">
          ସୋସିଆଲ ଫିଡ୍
        </h3>
        <div className="space-y-3">
          {[
            { platform: "Facebook", content: "ଆଜିର ମୁଖ୍ୟ ଘଟଣା...", time: "୨ ଘଣ୍ଟା ଆଗେ" },
            { platform: "Twitter", content: "ସମ୍ବାଦ ଅପଡେଟ୍...", time: "୩ ଘଣ୍ଟା ଆଗେ" }
          ].map((post, index) => (
            <div key={index} className="border-b border-gray-100 pb-2 last:border-b-0">
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
                  {post.platform === 'Facebook' ? '��' : '🐦'}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs lg:text-sm text-gray-800 line-clamp-2">{post.content}</p>
                  <span className="text-xs text-gray-500">{post.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Advertisement */}
      <div className="ad-card bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-3 lg:p-4 text-white text-center shadow-lg">
        <h4 className="font-bold text-sm lg:text-base mb-2">ସ୍ପେସିଆଲ ଅଫର</h4>
        <div className="bg-white/20 rounded p-2 lg:p-3 backdrop-blur-sm">
          <p className="text-xs lg:text-sm">ସୀମିତ ସମୟ ପାଇଁ</p>
          <p className="text-xs lg:text-sm font-bold">50% ଛାଡ</p>
        </div>
      </div>
    </aside>
  );
}
