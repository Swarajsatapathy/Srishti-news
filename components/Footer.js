export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">SRISHTI NEWS</h3>
            <p className="text-gray-300 text-sm lg:text-base mb-4">
              ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ ସମାଚାର ସାଥୀ କହିବେ ଆପଣଙ୍କ କଥା। ଓଡ଼ିଶାର ନମ୍ବର ୧ ଖବର ୱେବସାଇଟ।
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-full transition-colors">
                📘
              </button>
              <button className="bg-blue-400 hover:bg-blue-500 p-2 rounded-full transition-colors">
                🐦
              </button>
              <button className="bg-red-600 hover:bg-red-700 p-2 rounded-full transition-colors">
                📺
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ତ୍ୱରିତ ଲିଙ୍କ</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ମୁଖ୍ୟ ପୃଷ୍ଠା</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ରାଜ୍ୟ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ଦେଶ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">କ୍ରୀଡ଼ା</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ମନୋରଞ୍ଜନ</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ବିଭାଗ</h4>
            <ul className="space-y-2 text-sm lg:text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ରାଜନୀତି</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ବ୍ୟବସାୟ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ପ୍ରଯୁକ୍ତି</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ଶିକ୍ଷା</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">ସ୍ୱାସ୍ଥ୍ୟ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ଯୋଗାଯୋଗ</h4>
            <div className="space-y-2 text-sm lg:text-base text-gray-300">
              <p>📧 contact@srishtinews.com</p>
              <p>📞 +91-674-xxx-xxxx</p>
              <p>📍 ଭୁବନେଶ୍ୱର, ଓଡ଼ିଶା</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm lg:text-base text-gray-400">
            <p>&copy; ୨୦୨୫ SRISHTI NEWS। ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">ଗୋପନୀୟତା ନୀତି</a>
              <a href="#" className="hover:text-white transition-colors">ସର୍ତ୍ତାବଳୀ</a>
              <a href="#" className="hover:text-white transition-colors">ଯୋଗାଯୋଗ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
