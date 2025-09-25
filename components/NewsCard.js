import Image from "next/image";

export default function NewsCard({ title, excerpt, image, category, timestamp }) {
  return (
    <div className="news-card bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 sm:h-36 lg:h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
          {category}
        </span>
        <h3 className="font-bold text-gray-900 mt-2 mb-2 text-sm lg:text-base line-clamp-2 leading-tight">
          {title}
        </h3>
        <p className="text-gray-600 text-xs lg:text-sm mb-3 line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{timestamp}</span>
          <button className="text-red-600 hover:text-red-800 transition-colors font-medium">
            ଅଧିକ ପଢ଼ନ୍ତୁ
          </button>
        </div>
      </div>
    </div>
  );
}