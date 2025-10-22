import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const locations = [
  {
    id: 1,
    city: 'Москва',
    address: 'ул. Тверская, 12',
    phone: '+7 (495) 123-45-67',
    hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
  },
  {
    id: 2,
    city: 'Санкт-Петербург',
    address: 'Невский проспект, 45',
    phone: '+7 (812) 987-65-43',
    hours: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00',
  },
  {
    id: 3,
    city: 'Казань',
    address: 'ул. Баумана, 23',
    phone: '+7 (843) 555-22-33',
    hours: 'Пн-Пт: 9:00-20:00, Сб: 10:00-18:00',
  },
];

const LocationMap = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши офисы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Посетите нас в одном из наших офисов для личной консультации
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {locations.map((location) => (
              <Card key={location.id}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" size={24} />
                    {location.city}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="Home" className="text-muted-foreground mt-1" size={18} />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-muted-foreground" size={18} />
                    <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-muted-foreground mt-1" size={18} />
                    <span className="text-sm text-muted-foreground">{location.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted rounded-2xl overflow-hidden h-[500px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <Icon name="Map" className="text-primary mx-auto mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-2">Интерактивная карта</h3>
                <p className="text-muted-foreground">
                  Здесь будет отображаться интерактивная карта с нашими офисами
                </p>
              </div>
            </div>
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A0&amp;source=constructor"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Карта офисов"
              className="opacity-30"
            />
          </div>
        </div>

        <div className="bg-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Запланируйте визит</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Приходите к нам в офис для личной консультации. Наши специалисты помогут подобрать
            идеальный тур с учетом всех ваших пожеланий.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:+74951234567"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Icon name="Phone" size={20} />
              Позвонить
            </a>
            <a
              href="mailto:info@travelway.ru"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
            >
              <Icon name="Mail" size={20} />
              Написать email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
