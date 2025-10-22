import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import Guides from '@/components/sections/Guides';
import Location from '@/components/sections/Location';
import ChatWidget from '@/components/ChatWidget';

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <Gallery />
        <Reviews />
        <Guides />
        <Location />
      </main>
      <ChatWidget />
    </div>
  );
}