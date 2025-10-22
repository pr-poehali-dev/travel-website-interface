import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      text: 'Незабываемое путешествие! Организация на высшем уровне, все прошло идеально. Гид был очень внимательным и знающим. Обязательно вернемся снова!',
      rating: 5,
      tour: 'Тропический Рай',
      date: 'Октябрь 2023',
      avatar: 'АП'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      text: 'Потрясающие виды и отличный гид. Рекомендую всем любителям активного отдыха! Восхождение было сложным, но невероятно красивым.',
      rating: 5,
      tour: 'Горные Вершины',
      date: 'Сентябрь 2023',
      avatar: 'МС'
    },
    {
      id: 3,
      name: 'Елена Иванова',
      text: 'Культурная программа превзошла все ожидания. Спасибо за организацию! Побывали в самых интересных местах, узнали много нового.',
      rating: 5,
      tour: 'Европейские Столицы',
      date: 'Август 2023',
      avatar: 'ЕИ'
    },
    {
      id: 4,
      name: 'Дмитрий Волков',
      text: 'Профессиональный подход на всех этапах. Отель был отличный, экскурсии интересные, никаких проблем не возникло. Спасибо команде!',
      rating: 5,
      tour: 'Тропический Рай',
      date: 'Июль 2023',
      avatar: 'ДВ'
    },
    {
      id: 5,
      name: 'Ольга Смирнова',
      text: 'Лучшее путешествие в моей жизни! Все было продумано до мелочей. Особенно понравился индивидуальный подход к каждому туристу.',
      rating: 5,
      tour: 'Европейские Столицы',
      date: 'Июнь 2023',
      avatar: 'ОС'
    },
    {
      id: 6,
      name: 'Александр Козлов',
      text: 'Отличная организация тура, внимательные гиды, комфортабельные отели. Всё на высшем уровне. Рекомендую всем своим друзьям!',
      rating: 5,
      tour: 'Горные Вершины',
      date: 'Май 2023',
      avatar: 'АК'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
            <Icon name="Star" className="mr-2" size={14} />
            Отзывы
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-lg text-muted-foreground">
            Более 5000 довольных туристов уже выбрали нас для своих путешествий
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12 bg-gradient-to-br from-primary to-secondary">
                      <AvatarFallback className="text-white font-semibold">
                        {review.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <p className="text-xs text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {review.text}
                </p>

                <div className="pt-2">
                  <Badge variant="outline" className="bg-muted/50">
                    <Icon name="MapPin" size={12} className="mr-1" />
                    {review.tour}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row gap-8 items-center justify-center bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">4.9</div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Средняя оценка</p>
            </div>
            <div className="h-16 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-2">5000+</div>
              <p className="text-sm text-muted-foreground">Довольных клиентов</p>
            </div>
            <div className="h-16 w-px bg-border hidden md:block" />
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-sm text-muted-foreground">Рекомендуют нас</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
