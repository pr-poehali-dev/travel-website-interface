import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Guides = () => {
  const guides = [
    {
      id: 1,
      name: 'Александр Морозов',
      specialization: 'Горные экспедиции',
      experience: '12 лет',
      languages: ['Русский', 'Английский', 'Немецкий'],
      tours: 156,
      rating: 4.9,
      avatar: 'АМ',
      description: 'Профессиональный альпинист с международными сертификатами',
      badges: ['Альпинизм', 'Безопасность', 'Первая помощь']
    },
    {
      id: 2,
      name: 'Мария Соколова',
      specialization: 'Культурные туры',
      experience: '8 лет',
      languages: ['Русский', 'Английский', 'Французский', 'Итальянский'],
      tours: 203,
      rating: 5.0,
      avatar: 'МС',
      description: 'Историк искусства, специалист по европейской культуре',
      badges: ['История', 'Искусство', 'Архитектура']
    },
    {
      id: 3,
      name: 'Дмитрий Волков',
      specialization: 'Пляжный отдых',
      experience: '10 лет',
      languages: ['Русский', 'Английский', 'Испанский'],
      tours: 187,
      rating: 4.8,
      avatar: 'ДВ',
      description: 'Эксперт по тропическим направлениям и водным видам спорта',
      badges: ['Дайвинг', 'Серфинг', 'Экология']
    },
    {
      id: 4,
      name: 'Елена Белова',
      specialization: 'Экзотические направления',
      experience: '15 лет',
      languages: ['Русский', 'Английский', 'Японский', 'Китайский'],
      tours: 224,
      rating: 5.0,
      avatar: 'ЕБ',
      description: 'Специалист по Азии, знаток восточных культур и традиций',
      badges: ['Азия', 'Культура', 'Фотография']
    },
    {
      id: 5,
      name: 'Игорь Петров',
      specialization: 'Активный туризм',
      experience: '9 лет',
      languages: ['Русский', 'Английский'],
      tours: 142,
      rating: 4.9,
      avatar: 'ИП',
      description: 'Инструктор по треккингу и экстремальным видам спорта',
      badges: ['Треккинг', 'Рафтинг', 'Скалолазание']
    },
    {
      id: 6,
      name: 'Анна Лебедева',
      specialization: 'Семейные туры',
      experience: '7 лет',
      languages: ['Русский', 'Английский', 'Испанский'],
      tours: 118,
      rating: 5.0,
      avatar: 'АЛ',
      description: 'Специалист по организации семейного отдыха с детьми',
      badges: ['Дети', 'Анимация', 'Безопасность']
    }
  ];

  return (
    <section id="guides" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            <Icon name="Users" className="mr-2" size={14} />
            Команда
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши гиды</h2>
          <p className="text-lg text-muted-foreground">
            Опытные профессионалы, которые сделают ваше путешествие незабываемым
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Card key={guide.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-20 w-20 bg-gradient-to-br from-primary to-secondary border-4 border-white shadow-lg">
                    <AvatarFallback className="text-white text-2xl font-bold">
                      {guide.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1">{guide.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{guide.specialization}</p>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-accent fill-accent" />
                      <span className="font-semibold">{guide.rating}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardDescription>{guide.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {guide.badges.map((badge, idx) => (
                    <Badge key={idx} variant="outline" className="bg-background">
                      {badge}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Award" size={16} className="text-primary" />
                    <span>Опыт: {guide.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={16} className="text-secondary" />
                    <span>Туров проведено: {guide.tours}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Icon name="Languages" size={16} className="text-accent mt-0.5" />
                    <span>{guide.languages.join(', ')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Все наши гиды сертифицированы</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Регулярно проходят обучение и имеют актуальные лицензии для работы в туристической индустрии
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-primary/20 text-primary px-4 py-2">
              <Icon name="Shield" className="mr-2" size={16} />
              Лицензированы
            </Badge>
            <Badge className="bg-secondary/20 text-secondary px-4 py-2">
              <Icon name="Heart" className="mr-2" size={16} />
              Первая помощь
            </Badge>
            <Badge className="bg-accent/20 text-accent-foreground px-4 py-2">
              <Icon name="GraduationCap" className="mr-2" size={16} />
              Сертифицированы
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guides;
