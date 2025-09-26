import Image from "next/image";

export default function MainContent() {
  const mainStories = [
    {
      id: 1,
      title: "ହାଇଦ୍ରାବାଦରେ ଲାଇନରେ ସୁସ୍ତ ଏକ ରତନବନ୍ଧ ।",
      excerpt: "ରାଜ୍ୟ ସରକାରଙ୍କ ନୂତନ ପଦକ୍ଷେପ ସହିତ ବିକାଶ କାର୍ଯ୍ୟକ୍ରମ ଆରମ୍ଭ ହେବାକୁ ଯାଉଛି...",
      image: "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=News+Image",
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
      image: "https://via.placeholder.com/300x200/e5e7eb/6b7280?text=News+Image",
      category: "ରାଜନୀତି",
      date: "March 8, 2024",
      views: "256 views",
      author: "Apriya Satya"
    },
    {
      id: 3,
      title: "ଶ୍ରୀମନ୍ତ ମତ ହୋ ଖୋଲିଲା ସୟାକୁ ବୁହାରା ବର୍ମାରା ହ କ ରୁ",
      excerpt: "ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ନୂତନ ସଂସ୍କାର ଆଣିବା ପାଇଁ ସରକାରଙ୍କ ନିଷ୍ପତି...",
      image: "https://via.placeholder.com/300x200/e5e7eb/6b7280?text=News+Image",
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
      category: "ସମ୍ପାদକ",
      image: "/api/placeholder/300/200",
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    },
    {
      id: 2,
      title: "ସାଭାର ଆସିମ ନିର୍ବାଚନ ରହ, ଦେହ ମିଥ ପ୍ରତିଶନ ବର୍ତ୍ତ",
      category: "ସମ୍ପାଦକ", 
      image: "/api/placeholder/300/200",
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
      image: "/api/placeholder/300/200",
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    },
    {
      id: 2,
      title: "ସାଭାର ଆସିମ ନିର୍ବାଚନ ରହ, ଦେହ ମିଥ ପ୍ରତିଶନ ବର୍ତ୍ତ",
      category: "ଟ୍ରେଣ୍ଡିଂ",
      image: "/api/placeholder/300/200", 
      date: "March 8, 2024",
      views: "282 views",
      author: "Apriya Satya"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar - Social Media */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h3 className="font-bold text-gray-800 mb-4 border-b pb-2">Follow Us</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                  <span className="text-sm font-medium">Twitter</span>
                </a>
                <a href="#" className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                  <svg className="w-5 h-5 text-red-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-sm font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 order-1 lg:order-2">
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
                        <Image
                          src={story.image}
                          alt={story.title}
                          width={index === 0 ? 600 : 300}
                          height={index === 0 ? 400 : 200}
                          className="w-full h-48 sm:h-64 object-cover"
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
          <div className="lg:col-span-1 order-3">
            {/* Editor's Pick */}
            <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 border-l-4 border-red-600 pl-3">
                Editor's Pick
              </h3>
              <div className="space-y-4">
                {editorsPick.map((story) => (
                  <div key={story.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="relative mb-3">
                      <Image
                        src={story.image}
                        alt={story.title}
                        width={300}
                        height={180}
                        className="w-full h-32 object-cover rounded"
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
                      <Image
                        src={story.image}
                        alt={story.title}
                        width={300}
                        height={180}
                        className="w-full h-32 object-cover rounded"
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