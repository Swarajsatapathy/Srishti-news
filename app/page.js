import Header from '../components/Header';
import HeroArticle from '../components/HeroArticle';
import NewsGrid from '../components/NewsGrid';
import Sidebar from '../components/Sidebar';
import LeftSidebar from '../components/LeftSidebar';
import LatestUpdates from '../components/LatestUpdates';
import Footer from '../components/Footer';
import { featuredNews, sideNews, heroImage } from '../constants/data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* Latest Updates Section - Mobile Only */}
      <div className="xl:hidden px-4 mb-6">
        <LatestUpdates />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 lg:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-4 gap-4 lg:gap-6 xl:gap-8">
          {/* Left Sidebar - Hidden on mobile, shown on large screens */}
          <div className="hidden xl:block xl:col-span-1 order-1">
            <div className="sticky-sidebar">
              <LeftSidebar />
            </div>
          </div>

          {/* Featured News Section */}
          <div className="xl:col-span-4 lg:col-span-3 col-span-1 order-2 xl:order-2 lg:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-blue-800">
              ମୁଖ୍ୟ ସମାଚାର
            </h2>

            <HeroArticle heroImage={heroImage} />
            <NewsGrid featuredNews={featuredNews} />
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-1 lg:col-span-1 col-span-1 order-1 lg:order-3 xl:order-3">
            <div className="sticky-sidebar">
              <Sidebar sideNews={sideNews} />
            </div>
          </div>
        </div>

        {/* Hidden Latest Updates for desktop */}
        <div className="hidden xl:block mt-8">
          <LatestUpdates />
        </div>
      </main>

      <Footer />
    </div>
  );
}
