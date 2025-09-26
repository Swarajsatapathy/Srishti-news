import Header from '../components/Header';
import BreakingNews from '../components/BreakingNews';
import MainContent from '../components/MainContentFixed';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <BreakingNews />
      <MainContent />
      <Footer />
    </div>
  );
}
