import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const services = [
  {
    id: 1,
    title: 'Пляжный отдых',
    description: 'Райские острова и лучшие пляжи мира для идеального релакса',
    price: 'от 45 000 ₽',
    duration: '7-14 дней',
    icon: 'Palmtree',
    features: ['Трансфер', 'Отель 4-5*', 'Экскурсии', 'Страховка'],
  },
  {
    id: 2,
    title: 'Экскурсионные туры',
    description: 'Знакомство с историей и культурой великих городов',
    price: 'от 55 000 ₽',
    duration: '5-10 дней',
    icon: 'Building2',
    features: ['Гид-экскурсовод', 'Музеи', 'Отель 3-4*', 'Питание'],
  },
  {
    id: 3,
    title: 'Горные походы',
    description: 'Приключения в горах для активных путешественников',
    price: 'от 35 000 ₽',
    duration: '5-12 дней',
    icon: 'Mountain',
    features: ['Снаряжение', 'Инструктор', 'Питание', 'Маршрут'],
  },
  {
    id: 4,
    title: 'Круизы',
    description: 'Морские путешествия с посещением нескольких стран',
    price: 'от 85 000 ₽',
    duration: '7-21 день',
    icon: 'Ship',
    features: ['Каюта', 'Питание', 'Развлечения', 'Экскурсии'],
  },
  {
    id: 5,
    title: 'Экзотические туры',
    description: 'Уникальные маршруты в самые удивительные уголки планеты',
    price: 'от 95 000 ₽',
    duration: '10-21 день',
    icon: 'Flame',
    features: ['VIP-сервис', 'Гид', 'Премиум отель', 'Трансферы'],
  },
  {
    id: 6,
    title: 'Семейный отдых',
    description: 'Отдых для всей семьи с детской анимацией и активностями',
    price: 'от 40 000 ₽',
    duration: '7-14 дней',
    icon: 'Heart',
    features: ['Детский клуб', 'Аниматоры', 'Питание', 'Развлечения'],
  },
];

const Services = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши услуги и цены</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор туров на любой вкус и бюджет
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={48} />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary mb-1">{service.price}</div>
                  <div className="text-sm text-muted-foreground">{service.duration}</div>
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Icon name="Check" className="text-green-600" size={16} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button onClick={scrollToBooking} className="w-full">
                  Забронировать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
