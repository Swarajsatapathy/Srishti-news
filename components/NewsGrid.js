import NewsCard from './NewsCard';

export default function NewsGrid({ featuredNews }) {
  return (
    <section className="mt-8 mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        {featuredNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </section>
  );
}
