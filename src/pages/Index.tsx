import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Guides from '@/components/Guides';
import LocationMap from '@/components/LocationMap';
import BookingCalendar from '@/components/BookingCalendar';
import ContactForm from '@/components/ContactForm';
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
      <BookingCalendar />
      <LocationMap />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;