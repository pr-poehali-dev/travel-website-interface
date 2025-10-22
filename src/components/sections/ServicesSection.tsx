import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Palmtree',
    title: 'Пляжный отдых',
    description: 'Райские пляжи и роскошные курорты на берегу океана',
    price: 'от 45 000 ₽',
    duration: '7-14 дней',
    popular: true,
  },
  {
    icon: 'Mountain',
    title: 'Горные туры',
    description: 'Треккинг, альпинизм и экскурсии в горных регионах',
    price: 'от 55 000 ₽',
    duration: '5-10 дней',
    popular: false,
  },
  {
    icon: 'Building2',
    title: 'Экскурсионные туры',
    description: 'Познавательные путешествия по историческим городам',
    price: 'от 40 000 ₽',
    duration: '5-7 дней',
    popular: true,
  },
  {
    icon: 'Waves',
    title: 'Круизы',
    description: 'Морские круизы по самым живописным маршрутам',
    price: 'от 80 000 ₽',
    duration: '7-14 дней',
    popular: false,
  },
  {
    icon: 'Tent',
    title: 'Приключенческие туры',
    description: 'Сафари, джип-туры и экстремальные приключения',
    price: 'от 65 000 ₽',
    duration: '7-12 дней',
    popular: false,
  },
  {
    icon: 'Sparkles',
    title: 'Эксклюзивные туры',
    description: 'Индивидуальные маршруты с VIP-сопровождением',
    price: 'от 150 000 ₽',
    duration: 'под заказ',
    popular: true,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши услуги и цены
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор туристических направлений для любого бюджета и предпочтений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
            >
              {service.popular && (
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  Популярно
                </Badge>
              )}
              
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon name={service.icon as any} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Цена:</span>
                    <span className="font-semibold text-primary text-lg">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Длительность:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Icon name="Percent" className="mx-auto mb-2 text-primary" size={32} />
              <h3 className="font-semibold text-lg mb-1">Скидки до 20%</h3>
              <p className="text-sm text-muted-foreground">При раннем бронировании</p>
            </div>
            <div>
              <Icon name="Shield" className="mx-auto mb-2 text-secondary" size={32} />
              <h3 className="font-semibold text-lg mb-1">Полная страховка</h3>
              <p className="text-sm text-muted-foreground">Включена в стоимость</p>
            </div>
            <div>
              <Icon name="Headphones" className="mx-auto mb-2 text-accent" size={32} />
              <h3 className="font-semibold text-lg mb-1">Поддержка 24/7</h3>
              <p className="text-sm text-muted-foreground">На всём протяжении тура</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
