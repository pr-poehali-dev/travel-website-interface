import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Services = () => {
  const tours = [
    {
      id: 1,
      title: 'Тропический Рай',
      description: 'Незабываемый отдых на белоснежных пляжах с кристально чистой водой',
      price: '85 000 ₽',
      duration: '7 дней',
      image: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/5f1ef8b5-9bb4-472a-a362-043c0defbb4d.jpg',
      category: 'Пляжный отдых',
      includes: ['Перелет', 'Отель 5*', 'Питание']
    },
    {
      id: 2,
      title: 'Горные Вершины',
      description: 'Активный туризм, восхождения и захватывающие панорамы',
      price: '65 000 ₽',
      duration: '5 дней',
      image: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/6dce0464-f897-410b-9a58-691f9299daed.jpg',
      category: 'Активный отдых',
      includes: ['Гид', 'Снаряжение', 'Проживание']
    },
    {
      id: 3,
      title: 'Европейские Столицы',
      description: 'Культурный тур по историческим городам и достопримечательностям',
      price: '95 000 ₽',
      duration: '10 дней',
      image: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/0ccc3afb-db85-4e98-8505-c04737eef12d.jpg',
      category: 'Экскурсии',
      includes: ['Экскурсии', 'Отели 4*', 'Трансферы']
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Icon name="Map" className="mr-2" size={14} />
            Наши услуги
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Туры и цены</h2>
          <p className="text-lg text-muted-foreground">
            Подберём идеальное путешествие под ваш бюджет и интересы
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                  {tour.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{tour.title}</CardTitle>
                <CardDescription className="text-base">{tour.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Calendar" size={18} />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">{tour.price}</div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tour.includes.map((item, idx) => (
                    <Badge key={idx} variant="outline" className="bg-background">
                      <Icon name="Check" size={14} className="mr-1" />
                      {item}
                    </Badge>
                  ))}
                </div>

                <Button className="w-full" size="lg">
                  <Icon name="ShoppingCart" className="mr-2" size={18} />
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