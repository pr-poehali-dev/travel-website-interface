import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const guides = [
  {
    id: 1,
    name: 'Александр Петров',
    avatar: 'АП',
    experience: '12 лет',
    languages: ['Русский', 'Английский', 'Испанский'],
    specialization: 'Европа, Южная Америка',
    tours: 450,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Мария Иванова',
    avatar: 'МИ',
    experience: '8 лет',
    languages: ['Русский', 'Английский', 'Французский'],
    specialization: 'Франция, Швейцария',
    tours: 320,
    rating: 5.0,
  },
  {
    id: 3,
    name: 'Дмитрий Соколов',
    avatar: 'ДС',
    experience: '15 лет',
    languages: ['Русский', 'Английский', 'Немецкий', 'Итальянский'],
    specialization: 'Альпы, горные туры',
    tours: 580,
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Елена Морозова',
    avatar: 'ЕМ',
    experience: '10 лет',
    languages: ['Русский', 'Английский', 'Тайский'],
    specialization: 'Азия, Океания',
    tours: 410,
    rating: 5.0,
  },
  {
    id: 5,
    name: 'Сергей Волков',
    avatar: 'СВ',
    experience: '7 лет',
    languages: ['Русский', 'Английский', 'Арабский'],
    specialization: 'Ближний Восток, Африка',
    tours: 280,
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Ольга Новикова',
    avatar: 'ОН',
    experience: '9 лет',
    languages: ['Русский', 'Английский', 'Китайский'],
    specialization: 'Китай, Япония, Корея',
    tours: 350,
    rating: 4.9,
  },
];

const Guides = () => {
  return (
    <section id="guides" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Наши гиды</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональные проводники с многолетним опытом и глубокими знаниями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => (
            <Card key={guide.id} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {guide.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{guide.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Star" className="text-accent fill-accent" size={16} />
                      <span className="text-sm font-semibold">{guide.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({guide.tours} туров)
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={20} />
                  <span className="text-sm">Опыт: {guide.experience}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="Languages" className="text-primary" size={20} />
                    <span className="text-sm font-medium">Языки:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((lang, index) => (
                      <Badge key={index} variant="secondary">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <span className="text-sm font-medium">Специализация:</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{guide.specialization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 text-center">
          <Icon name="Users" className="text-primary mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-3">Все наши гиды сертифицированы</h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Каждый гид проходит строгий отбор и регулярное обучение. Мы гарантируем высокий
            уровень профессионализма, знание местной культуры и языков, а также заботу о
            безопасности наших клиентов.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guides;
