import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Анна Петрова',
    avatar: 'AP',
    location: 'Москва',
    tour: 'Пляжный отдых на Мальдивах',
    rating: 5,
    text: 'Потрясающий отдых! Всё было организовано на высшем уровне. Гид постоянно на связи, отель превзошёл все ожидания. Спасибо команде за незабываемый отпуск!',
    date: 'Октябрь 2024',
  },
  {
    name: 'Дмитрий Соколов',
    avatar: 'ДС',
    location: 'Санкт-Петербург',
    tour: 'Горный треккинг в Швейцарии',
    rating: 5,
    text: 'Невероятные эмоции! Маршрут был идеально подобран под наш уровень подготовки. Профессиональный гид, комфортное размещение. Однозначно буду обращаться снова!',
    date: 'Сентябрь 2024',
  },
  {
    name: 'Елена Васильева',
    avatar: 'ЕВ',
    location: 'Екатеринбург',
    tour: 'Экскурсионный тур по Италии',
    rating: 5,
    text: 'Прекрасное путешествие! Увидели всё, что планировали и даже больше. Гид был очень внимательным и знающим. Организация поездки на отлично!',
    date: 'Август 2024',
  },
  {
    name: 'Михаил Кузнецов',
    avatar: 'МК',
    location: 'Новосибирск',
    tour: 'Сафари в Танзании',
    rating: 5,
    text: 'Это было приключение мечты! Всё продумано до мелочей. Видели всю большую пятёрку. Профессиональная команда и отличный сервис на протяжении всего тура.',
    date: 'Июль 2024',
  },
  {
    name: 'Ольга Морозова',
    avatar: 'ОМ',
    location: 'Казань',
    tour: 'Круиз по Средиземному морю',
    rating: 5,
    text: 'Романтическое путешествие получилось идеальным! Посетили 6 стран за 10 дней. Комфорт, красота и прекрасная организация. Рекомендую всем!',
    date: 'Июнь 2024',
  },
  {
    name: 'Сергей Иванов',
    avatar: 'СИ',
    location: 'Краснодар',
    tour: 'Пляжный отдых в Таиланде',
    rating: 5,
    text: 'Отличный семейный отдых! Дети в восторге, жена довольна, я расслабился. Всё было организовано так, что не пришлось ни о чём переживать. Спасибо!',
    date: 'Май 2024',
  },
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Отзывы наших клиентов
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Более 10 000 довольных туристов поделились своими впечатлениями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="MapPin" size={12} />
                      {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground mb-3 italic">
                  {review.tour}
                </p>

                <p className="text-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>

                <p className="text-xs text-muted-foreground">
                  {review.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 p-6 bg-background rounded-2xl shadow-sm">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">4.9</div>
              <div className="flex gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Средняя оценка</p>
            </div>
            <div className="h-16 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-1">10K+</div>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="h-16 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-1">98%</div>
              <p className="text-sm text-muted-foreground">Рекомендуют нас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
