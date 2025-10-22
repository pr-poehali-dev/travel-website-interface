import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Location = () => {
  const routes = [
    {
      id: 1,
      name: 'Тропические острова',
      destinations: ['Мальдивы', 'Бали', 'Сейшелы', 'Маврикий'],
      icon: 'Palmtree',
      color: 'text-primary'
    },
    {
      id: 2,
      name: 'Горные маршруты',
      destinations: ['Альпы', 'Гималаи', 'Анды', 'Кавказ'],
      icon: 'Mountain',
      color: 'text-secondary'
    },
    {
      id: 3,
      name: 'Культурные центры',
      destinations: ['Париж', 'Рим', 'Прага', 'Вена'],
      icon: 'Landmark',
      color: 'text-accent'
    },
    {
      id: 4,
      name: 'Экзотические направления',
      destinations: ['Япония', 'Исландия', 'Норвегия', 'Новая Зеландия'],
      icon: 'Globe',
      color: 'text-primary'
    }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Тверская, 15',
      phone: '+7 (495) 123-45-67',
      coords: '55.7558° N, 37.6173° E'
    },
    {
      city: 'Санкт-Петербург',
      address: 'Невский проспект, 28',
      phone: '+7 (812) 987-65-43',
      coords: '59.9343° N, 30.3351° E'
    }
  ];

  return (
    <section id="location" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent-foreground hover:bg-accent/20">
            <Icon name="Map" className="mr-2" size={14} />
            География
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Карта маршрутов</h2>
          <p className="text-lg text-muted-foreground">
            Мы организуем туры по всему миру. Выберите направление и отправляйтесь в путешествие мечты
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {routes.map((route) => (
            <Card key={route.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <Icon name={route.icon as any} size={32} className={route.color} />
                  <Badge variant="outline">{route.destinations.length}</Badge>
                </div>
                <h3 className="font-bold text-xl">{route.name}</h3>
                <div className="space-y-2">
                  {route.destinations.map((dest, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="MapPin" size={14} />
                      <span>{dest}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Наши офисы</h3>
            <p className="text-muted-foreground">Посетите нас для личной консультации</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {offices.map((office, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Icon name="Building2" size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-3">{office.city}</h4>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-start gap-2">
                          <Icon name="MapPin" size={16} className="mt-1" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Phone" size={16} />
                          <a href={`tel:${office.phone}`} className="hover:text-primary transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Navigation" size={16} />
                          <span className="text-sm">{office.coords}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 aspect-video bg-muted rounded-xl overflow-hidden shadow-lg">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
              <div className="text-center space-y-4">
                <Icon name="Map" size={64} className="mx-auto text-primary/40" />
                <p className="text-muted-foreground">Интерактивная карта маршрутов</p>
                <p className="text-sm text-muted-foreground/60">Здесь можно подключить Google Maps или Яндекс.Карты</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
