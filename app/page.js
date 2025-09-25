import Image from "next/image";

export default function Home() {
  const featuredNews = [
    {
      id: 1,
      title: "ଆଧାର ଲେଖିତ ବେଳେ କଣ କଣ ସାବଧାନତା ଅବଲମ୍ବନ କରିବେ",
      excerpt: "ଆଧାର କାର୍ଡ ନିର୍ମାଣ ବେଳେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସୂଚନା ଓ ନିୟମାବଳୀ",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#dc2626"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="white">Aadhaar News</text></svg>'
        ),
      category: "Technology",
      date: "2 ଘଣ୍ଟା ପୂର୍ବେ",
    },
    {
      id: 2,
      title: "ମହିଳା ଅଧିକାର ଓ ସୁରକ୍ଷା ନିୟମ",
      excerpt: "ମହିଳାମାନଙ୍କ ପାଇଁ ନୂତନ ନିୟମ ଓ ସୁବିଧା ବିଷୟରେ ଜାଣନ୍ତୁ",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#059669"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="white">Women Rights</text></svg>'
        ),
      category: "Social",
      date: "4 ଘଣ୍ଟା ପୂର୍ବେ",
    },
    {
      id: 3,
      title: "ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ନୂତନ ସଂସ୍କାର",
      excerpt: "ଓଡ଼ିଶାରେ ଶିକ୍ଷା ବ୍ୟବସ୍ଥାରେ ଆସିବାକୁ ଯାଉଥିବା ପରିବର୍ତ୍ତନ",
      image:
        "data:image/svg+xml;base64," +
        btoa(
          '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#7c3aed"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="14" fill="white">Education</text></svg>'
        ),
      category: "Education",
      date: "6 ଘଣ୍ଟା ପୂର୍ବେ",
    },
  ];

  const sideNews = [
    { title: "ବର୍ଷା ପାଇଁ ପ୍ରସ୍ତୁତି ନିଅନ୍ତୁ", time: "1 ଘଣ୍ଟା ପୂର୍ବେ" },
    { title: "କୃଷକଙ୍କ ପାଇଁ ନୂତନ ଯୋଜନା", time: "2 ଘଣ୍ଟା ପୂର୍ବେ" },
    { title: "ସ୍ୱାସ୍ଥ୍ୟ ସେବାରେ ଉନ୍ନତି", time: "3 ଘଣ୍ଟା ପୂର୍ବେ" },
    { title: "ଯୋଗାଯୋଗ ବ୍ୟବସ୍ଥାର ଉନ୍ନତି", time: "4 ଘଣ୍ଟା ପୂର୍ବେ" },
  ];

  const heroImage =
    "data:image/svg+xml;base64," +
    btoa(
      '<svg width="800" height="400" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#1e40af"/><text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="Arial" font-size="24" fill="white">Breaking News</text></svg>'
    );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-red-600 text-white">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex space-x-4">
              <span>📱 Mobile App</span>
              <span>📧 Newsletter</span>
            </div>
            <div className="flex space-x-4">
              <span>📍 Bhubaneswar</span>
              <span>🌤️ 28°C</span>
            </div>
          </div>

          {/* Main header */}
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-xl">
                ଶ୍ରୀଷ୍ଟି
              </div>
              <h1 className="text-3xl font-bold">SRISHTI NEWS</h1>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="search"
                placeholder="Search news..."
                className="px-4 py-2 rounded-full text-black"
              />
              <button className="bg-white text-red-600 px-4 py-2 rounded-full hover:bg-gray-100">
                🔍
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="pb-4">
            <ul className="flex space-x-8 text-lg">
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ମୁଖ୍ୟ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ରାଜନୀତି
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  କ୍ରୀଡ଼ା
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ମନୋରଞ୍ଜନ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ବ୍ୟବସାୟ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ଶିକ୍ଷା
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ପ୍ରଯୁକ୍ତି
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-200 transition-colors">
                  ଆଉ ଅଧିକ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Featured News Section */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 text-red-600">
              ମୁଖ୍ୟ ସମାଚାର
            </h2>

            {/* Hero Article */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative h-96">
                <Image
                  src={heroImage}
                  alt="Featured news"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
                    ଟ୍ରେଣ୍ଡିଂ
                  </span>
                  <h2 className="text-3xl font-bold mt-2 mb-2">
                    ଓଡ଼ିଶାରେ ନୂତନ ବିକାଶ ପ୍ରକଳ୍ପର ଶୁଭାରମ୍ଭ
                  </h2>
                  <p className="text-gray-300">
                    ରାଜ୍ୟ ସରକାରଙ୍କ ନୂତନ ପଦକ୍ଷେପ ସହିତ ବିକାଶ କାର୍ଯ୍ୟକ୍ରମ ଆରମ୍ଭ
                    ହେବାକୁ ଯାଉଛି...
                  </p>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredNews.map((news) => (
                <article
                  key={news.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="relative h-48">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
                      {news.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {news.excerpt}
                    </p>
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{news.date}</span>
                      <button className="text-red-600 hover:text-red-800">
                        ପଢ଼ନ୍ତୁ →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Breaking News */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-red-600">
                🔥 ଜରୁରୀ ଖବର
              </h3>
              <div className="space-y-3">
                {sideNews.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
                  >
                    <h4 className="font-medium text-sm hover:text-red-600 cursor-pointer">
                      {item.title}
                    </h4>
                    <span className="text-xs text-gray-500">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Weather Widget */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 mb-6 text-white">
              <h3 className="text-lg font-bold mb-3">🌤️ ଆଜିର ପାଗ</h3>
              <div className="text-center">
                <div className="text-3xl font-bold">28°C</div>
                <div className="text-sm opacity-90">ଭୁବନେଶ୍ୱର</div>
                <div className="text-sm opacity-75">ଆଂଶିକ ମେଘାଛନ୍ନ</div>
              </div>
            </div>

            {/* Advertisement Placeholder */}
            <div className="bg-gray-200 rounded-lg p-6 text-center">
              <div className="text-gray-500">ବିଜ୍ଞାପନ</div>
              <div className="mt-4 bg-gray-300 h-32 rounded flex items-center justify-center">
                <span className="text-gray-600">Ad Space</span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Updates Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-red-600">
            ସର୍ବଶେଷ ଅପଡେଟ
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "କୃଷି କ୍ଷେତ୍ରରେ ନୂତନ ପ୍ରଯୁକ୍ତି", color: "#10b981" },
                { title: "ସ୍ମାର୍ଟ ସିଟି ପ୍ରକଳ୍ପ ଅଗ୍ରଗତି", color: "#3b82f6" },
                { title: "ଶିକ୍ଷା ବ୍ୟବସ୍ଥାରେ ଡିଜିଟାଲ ବିପ୍ଳବ", color: "#8b5cf6" },
                { title: "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ଉନ୍ନତିକରଣ", color: "#ef4444" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="border-r border-gray-200 last:border-r-0 pr-4 last:pr-0"
                >
                  <div className="relative h-24 mb-3 rounded overflow-hidden">
                    <div
                      className="w-full h-full flex items-center justify-center text-white font-medium text-xs"
                      style={{ backgroundColor: item.color }}
                    >
                      Update {i + 1}
                    </div>
                  </div>
                  <h4 className="font-medium text-sm mb-1 hover:text-red-600 cursor-pointer transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-xs text-gray-500">୫ ମିନିଟ ପୂର୍ବେ</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">SRISHTI NEWS</h3>
              <p className="text-gray-400">
                ଓଡ଼ିଶାର ବିଶ୍ୱସ୍ତ ସମାଚାର ମାଧ୍ୟମ। ସତ୍ୟ ଓ ନିର୍ଭରଯୋଗ୍ୟ ସମାଚାର।
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-3">ବିଭାଗ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    ରାଜନୀତି
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    କ୍ରୀଡ଼ା
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ମନୋରଞ୍ଜନ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ବ୍ୟବସାୟ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">ଯୋଗାଯୋଗ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📞 +91 XXXXX XXXXX</li>
                <li>📧 contact@srishtinews.com</li>
                <li>📍 ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶା</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">ଫଲୋ କରନ୍ତୁ</h4>
              <div className="flex space-x-4">
                <button className="bg-blue-600 p-2 rounded hover:bg-blue-700">
                  📘
                </button>
                <button className="bg-blue-400 p-2 rounded hover:bg-blue-500">
                  🐦
                </button>
                <button className="bg-red-600 p-2 rounded hover:bg-red-700">
                  📺
                </button>
                <button className="bg-pink-600 p-2 rounded hover:bg-pink-700">
                  📷
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
            <p>&copy; 2024 Srishti News. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
