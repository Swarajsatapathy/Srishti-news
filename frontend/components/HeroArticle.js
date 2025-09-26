import Image from "next/image";

export default function HeroArticle({ heroImage }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="relative h-64 sm:h-80 lg:h-96">
        <Image
          src={heroImage}
          alt="Featured news"
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
          <span className="bg-red-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
            ଟ୍ରେଣ୍ଡିଂ
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-2 mb-2 leading-tight">
            ଓଡ଼ିଶାରେ ନୂତନ ବିକାଶ ପ୍ରକଳ୍ପର ଶୁଭାରମ୍ଭ
          </h2>
          <p className="text-gray-300 text-sm sm:text-base line-clamp-2">
            ରାଜ୍ୟ ସରକାରଙ୍କ ନୂତନ ପଦକ୍ଷେପ ସହିତ ବିକାଶ କାର୍ଯ୍ୟକ୍ରମ ଆରମ୍ଭ
            ହେବାକୁ ଯାଉଛି...
          </p>
        </div>
      </div>
    </div>
  );
}