import MainContent from "./components/MainContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-[1440px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <MainContent />
      </div>
    </div>
  );
}
