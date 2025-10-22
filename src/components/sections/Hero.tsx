import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToChat = () => {
    const chatWidget = document.getElementById('chat-widget');
    if (chatWidget) {
      chatWidget.click();
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-accent/20 text-accent-foreground hover:bg-accent/30 border-accent/30">
            <Icon name="Sparkles" className="mr-2" size={16} />
            Путешествия вашей мечты
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Откройте мир с TravelWay
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Создаём незабываемые путешествия с 2010 года. Более 5000 довольных клиентов доверили нам свой отпуск.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" onClick={scrollToBooking} className="text-lg px-8 py-6">
              <Icon name="Compass" className="mr-2" size={20} />
              Выбрать тур
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToChat} className="text-lg px-8 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>

          <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">5000+</div>
              <div className="text-sm text-muted-foreground">Счастливых туристов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">150+</div>
              <div className="text-sm text-muted-foreground">Направлений</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">13</div>
              <div className="text-sm text-muted-foreground">Лет опыта</div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <img 
            src="https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/269fe944-a418-4f65-b1d0-45196203c683.jpg"
            alt="Тропический пляж"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
