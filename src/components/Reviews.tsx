import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const reviews = [
  {
    id: 1,
    name: 'Анна Петрова',
    date: '15 октября 2024',
    rating: 5,
    text: 'Незабываемое путешествие на Мальдивы! Организация на высшем уровне, гид был очень внимательным и профессиональным. Обязательно вернемся снова!',
    avatar: 'АП',
  },
  {
    id: 2,
    name: 'Михаил Соколов',
    date: '8 октября 2024',
    rating: 5,
    text: 'Экскурсионный тур по Европе превзошел все ожидания. Интересные маршруты, комфортные отели, отличная команда. Спасибо за профессионализм!',
    avatar: 'МС',
  },
  {
    id: 3,
    name: 'Елена Морозова',
    date: '1 октября 2024',
    rating: 5,
    text: 'Горный поход в Альпы был потрясающим! Инструкторы опытные, маршрут продуман до мелочей. Рекомендую всем любителям активного отдыха.',
    avatar: 'ЕМ',
  },
  {
    id: 4,
    name: 'Дмитрий Волков',
    date: '25 сентября 2024',
    rating: 5,
    text: 'Круиз по Средиземному морю - это что-то невероятное! Посетили 5 стран за 2 недели. Все было организовано идеально.',
    avatar: 'ДВ',
  },
  {
    id: 5,
    name: 'Ольга Иванова',
    date: '18 сентября 2024',
    rating: 5,
    text: 'Семейная поездка на Бали удалась на славу! Дети были в восторге от детского клуба, а мы с мужем смогли отдохнуть и насладиться природой.',
    avatar: 'ОИ',
  },
  {
    id: 6,
    name: 'Сергей Новиков',
    date: '10 сентября 2024',
    rating: 5,
    text: 'Экзотический тур в Азию превзошел все мои ожидания. Гид был настоящим профессионалом, рассказал много интересного о культуре и традициях.',
    avatar: 'СН',
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Более 5000 довольных путешественников уже выбрали нас
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {review.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Icon key={i} name="Star" className="text-accent fill-accent" size={18} />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">{review.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 bg-muted rounded-2xl px-12 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
            <div className="h-16 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
              <div className="text-sm text-muted-foreground">Средний рейтинг</div>
            </div>
            <div className="h-16 w-px bg-border" />
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Направлений</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
