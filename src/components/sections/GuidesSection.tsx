import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const guides = [
  {
    name: 'Александр Волков',
    avatar: 'АВ',
    specialty: 'Горные экспедиции',
    experience: '12 лет опыта',
    languages: ['Русский', 'Английский', 'Немецкий'],
    rating: 4.9,
    tours: 156,
    description: 'Профессиональный альпинист и горный гид. Специализируется на треккинге в Альпах и Гималаях.',
  },
  {
    name: 'Екатерина Морозова',
    avatar: 'ЕМ',
    specialty: 'Экскурсионные туры',
    experience: '8 лет опыта',
    languages: ['Русский', 'Английский', 'Итальянский', 'Французский'],
    rating: 5.0,
    tours: 203,
    description: 'Искусствовед и историк. Проводит авторские экскурсии по городам Европы с акцентом на архитектуру и культуру.',
  },
  {
    name: 'Дмитрий Соловьёв',
    avatar: 'ДС',
    specialty: 'Пляжный отдых',
    experience: '10 лет опыта',
    languages: ['Русский', 'Английский', 'Испанский'],
    rating: 4.8,
    tours: 187,
    description: 'Эксперт по тропическим направлениям. Знает все лучшие пляжи Азии и Карибов.',
  },
  {
    name: 'Мария Петрова',
    avatar: 'МП',
    specialty: 'Приключенческие туры',
    experience: '7 лет опыта',
    languages: ['Русский', 'Английский', 'Португальский'],
    rating: 4.9,
    tours: 142,
    description: 'Специалист по сафари и экстремальному туризму. Работала в заповедниках Африки и Южной Америки.',
  },
  {
    name: 'Игорь Кузнецов',
    avatar: 'ИК',
    specialty: 'Круизы',
    experience: '15 лет опыта',
    languages: ['Русский', 'Английский', 'Греческий'],
    rating: 5.0,
    tours: 221,
    description: 'Капитан дальнего плавания. Организует и сопровождает морские круизы по всему миру.',
  },
  {
    name: 'Анна Белова',
    avatar: 'АБ',
    specialty: 'Эксклюзивные туры',
    experience: '11 лет опыта',
    languages: ['Русский', 'Английский', 'Японский', 'Китайский'],
    rating: 5.0,
    tours: 98,
    description: 'Организатор VIP-путешествий. Создаёт уникальные маршруты для требовательных клиентов.',
  },
];

export default function GuidesSection() {
  return (
    <section id="guides" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Наши профессиональные гиды
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Опытные специалисты с глубокими знаниями и любовью к своему делу
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="h-16 w-16 border-2 border-primary">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl font-bold">
                      {guide.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1">{guide.name}</h3>
                    <Badge variant="secondary" className="mb-2">
                      {guide.specialty}
                    </Badge>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Briefcase" size={14} />
                      {guide.experience}
                    </p>
                  </div>
                </div>

                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  {guide.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{guide.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Icon name="Users" size={16} />
                      <span>{guide.tours} туров</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      <Icon name="Languages" size={14} />
                      Языки:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {guide.languages.map((lang, langIndex) => (
                        <Badge key={langIndex} variant="outline" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl text-center">
          <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
          <h3 className="text-2xl font-bold mb-3">Сертифицированные специалисты</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Все наши гиды имеют международные сертификаты, регулярно проходят обучение и обладают многолетним опытом работы в туристической индустрии. Ваша безопасность и комфорт — наш приоритет.
          </p>
        </div>
      </div>
    </section>
  );
}
