import Header from '@/components/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import Guides from '@/components/sections/Guides';
import Location from '@/components/sections/Location';
import Booking from '@/components/sections/Booking';
import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Reviews />
      <Guides />
      <Location />
      <Booking />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
