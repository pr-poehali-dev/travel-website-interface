import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function HeroSection() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/7e1cf99d-1fa1-4ecd-bbb3-be7c93452805.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Откройте мир вместе с нами
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
          Незабываемые путешествия, индивидуальные маршруты и профессиональное сопровождение
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
            onClick={scrollToBooking}
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Забронировать тур
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 text-lg px-8 py-6"
            onClick={() => {
              const element = document.getElementById('services');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Icon name="Compass" className="mr-2" size={20} />
            Наши услуги
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
              <Icon name="MapPin" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-1">50+ направлений</h3>
            <p className="text-sm opacity-90">По всему миру</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
              <Icon name="Users" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-1">10 000+ туристов</h3>
            <p className="text-sm opacity-90">Довольных клиентов</p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-3">
              <Icon name="Award" size={32} />
            </div>
            <h3 className="font-semibold text-lg mb-1">15 лет опыта</h3>
            <p className="text-sm opacity-90">На рынке туризма</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-white" />
      </div>
    </section>
  );
}
