import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: 'url(https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/03090d7d-52d7-4260-b8d3-195e644de38d.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Путешествия вашей мечты
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto drop-shadow-md">
          Откройте новые горизонты вместе с нами. Незабываемые приключения, профессиональные гиды и персональный подход к каждому клиенту.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg px-8 py-6"
            onClick={() => scrollToSection('booking')}
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Забронировать тур
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white/90 hover:bg-white text-foreground border-white"
            onClick={() => scrollToSection('contact')}
          >
            <Icon name="MessageCircle" className="mr-2" size={20} />
            Задать вопрос
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <Icon name="MapPin" className="text-primary mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">50+ направлений</h3>
            <p className="text-muted-foreground">Экзотические маршруты по всему миру</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <Icon name="Users" className="text-secondary mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">Опытные гиды</h3>
            <p className="text-muted-foreground">Профессионалы с 10+ летним стажем</p>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <Icon name="Star" className="text-accent mx-auto mb-3" size={40} />
            <h3 className="text-xl font-semibold mb-2">5000+ туристов</h3>
            <p className="text-muted-foreground">Довольных клиентов за 5 лет работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
