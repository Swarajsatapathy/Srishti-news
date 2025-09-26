export default function LatestUpdates() {
  const updates = [
    { title: "କୃଷି କ୍ଷେତ୍ରରେ ନୂତନ ପ୍ରଯୁକ୍ତି", color: "#10b981" },
    { title: "ସ୍ମାର୍ଟ ସିଟି ପ୍ରକଳ୍ପ ଅଗ୍ରଗତି", color: "#3b82f6" },
    { title: "ଶିକ୍ଷା ବ୍ୟବସ୍ଥାରେ ଡିଜିଟାଲ ବିପ୍ଳବ", color: "#8b5cf6" },
    { title: "ସ୍ୱାସ୍ଥ୍ୟ ସେବା ଉନ୍ନତିକରଣ", color: "#ef4444" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-red-600">
        ସର୍ବଶେଷ ଅପଡେଟ
      </h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {updates.map((item, i) => (
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
  );
}