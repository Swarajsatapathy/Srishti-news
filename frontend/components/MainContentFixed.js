import Image from "next/image";
import ImagePlaceholder from "./ImagePlaceholder";
import FixedSocialSidebar from "./FixedSocialSidebar";

export default function MainContent() {
  const mainStories = [
    {
      id: 1,
      title: "ହାଇଦ୍ରାବାଦରେ ଲାଇନରେ ସୁସ୍ତ ଏକ ରତନବନ୍ଧ ।",
      excerpt: "ରାଜ୍ୟ ସରକାରଙ୍କ ନୂତନ ପଦକ୍ଷେପ ସହିତ ବିକାଶ କାର୍ଯ୍ୟକ୍ରମ ଆରମ୍ଭ ହେବାକୁ ଯାଉଛି...",
      category: "ରାଜ୍ୟ",
      isMain: true,
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    },
    {
      id: 2,
      title: "ସାଭାର ଆସିମ ନିର୍ବାଚନ ରହ, ଦେହ ମିଥ ପ୍ରତିଶନ ବର୍ତ୍ତ",
      excerpt: "ନିର୍ବାଚନ କମିଶନଙ୍କ ନୂତନ ଘୋଷଣା ଅନୁଯାୟୀ...",
      category: "ରାଜନୀତି",
      date: "March 8, 2024",
      views: "256 views",
      author: "Apriya Satya"
    },
    {
      id: 3,
      title: "ଶ୍ରୀମନ୍ତ ମତ ହୋ ଖୋଲିଲା ସୟାକୁ ବୁହାରା ବର୍ମାରା ହ କ ରୁ",
      excerpt: "ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ନୂତନ ସଂସ୍କାର ଆଣିବା ପାଇଁ ସରକାରଙ୍କ ନିଷ୍ପତି...",
      category: "ଶିକ୍ଷା",
      date: "March 8, 2024",
      views: "198 views",
      author: "Apriya Satya"
    }
  ];

  const editorsPick = [
    {
      id: 1,
      title: "ହାଇଦ୍ରାବାଦରେ ଲାଇନରେ ସୁସ୍ତ ଏକ ରତନବନ୍ଧ ।",
      category: "ସମ୍ପାଦକ",
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    },
    {
      id: 2,
      title: "ସାଭାର ଆସିମ ନିର୍ବାଚନ ରହ, ଦେହ ମିଥ ପ୍ରତିଶନ ବର୍ତ୍ତ",
      category: "ସମ୍ପାଦକ", 
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    }
  ];

  const trendingStories = [
    {
      id: 1,
      title: "ହାଇଦ୍ରାବାଦରେ ଲାଇନରେ ସୁସ୍ତ ଏକ ରତନବନ୍ଧ ।",
      category: "ଟ୍ରେଣ୍ଡିଂ",
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    },
    {
      id: 2,
      title: "ସାଭାର ଆସିମ ନିର୍ବାଚନ ରହ, ଦେହ ମିଥ ପ୍ରତିଶନ ବର୍ତ୍ତ",
      category: "ଟ୍ରେଣ୍ଡିଂ", 
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Fixed Social Media Sidebar */}
      <FixedSocialSidebar />
      
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Main Content Area */}
          <div className="lg:col-span-2 order-1">
            {/* Main Stories Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-red-600 pl-3">
                  Main Stories
                </h2>
                <div className="flex space-x-2">
                  <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="grid gap-6">
                {mainStories.map((story, index) => (
                  <div key={story.id} className={`bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow ${
                    index === 0 ? 'lg:flex' : 'grid grid-cols-1 sm:grid-cols-3 gap-4'
                  }`}>
                    <div className={index === 0 ? 'lg:w-2/3' : 'sm:col-span-1'}>
                      <div className="relative">
                        <ImagePlaceholder
                          width={index === 0 ? 600 : 300}
                          height={index === 0 ? 400 : 200}
                          text={`News ${index + 1}`}
                          className="w-full h-48 sm:h-64"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                            {story.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`p-4 ${index === 0 ? 'lg:w-1/3' : 'sm:col-span-2'}`}>
                      <h3 className={`font-bold text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer ${
                        index === 0 ? 'text-xl' : 'text-lg'
                      }`}>
                        {story.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                        {story.excerpt}
                      </p>
                      <div className="flex items-center text-xs text-gray-500 space-x-2">
                        <span>{story.views}</span>
                        <span>•</span>
                        <span>{story.date}</span>
                        <span>•</span>
                        <span>{story.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 order-2">
            {/* Editor's Pick */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-red-600 pl-3">
                Editor's Pick
              </h3>
              <div className="space-y-4">
                {editorsPick.map((story) => (
                  <div key={story.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="relative mb-3">
                      <ImagePlaceholder
                        width={300}
                        height={180}
                        text="Editor Pick"
                        className="w-full h-32 rounded"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {story.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-sm text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
                      {story.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <span>{story.views}</span>
                      <span>•</span>
                      <span>{story.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Stories */}
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-red-600 pl-3">
                Trending Stories
              </h3>
              <div className="space-y-4">
                {trendingStories.map((story) => (
                  <div key={story.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="relative mb-3">
                      <ImagePlaceholder
                        width={300}
                        height={180}
                        text="Trending"
                        className="w-full h-32 rounded"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {story.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="font-bold text-sm text-gray-800 mb-2 line-clamp-2 hover:text-red-600 transition-colors cursor-pointer">
                      {story.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <span>{story.views}</span>
                      <span>•</span>
                      <span>{story.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}