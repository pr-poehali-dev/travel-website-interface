import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/sections/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Guides from '@/components/Guides';
import LocationMap from '@/components/LocationMap';
import Booking from '@/components/Booking';
import ChatWidget from '@/components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Booking />
      <Guides />
      <Gallery />
      <Reviews />
      <LocationMap />
      <ChatWidget />
    </div>
  );
};

export default Index;