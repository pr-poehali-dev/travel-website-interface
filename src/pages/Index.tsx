import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');

  const tours = [
    {
      id: 1,
      title: 'Тропический Рай',
      description: 'Незабываемый отдых на белоснежных пляжах',
      price: '85 000 ₽',
      duration: '7 дней',
      image: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/8cbba1c8-c7c1-4314-bcb2-9ad485013c1b.jpg',
      category: 'Пляжный отдых'
    },
    {
      id: 2,
      title: 'Горные Вершины',
      description: 'Активный туризм и восхождения',
      price: '65 000 ₽',
      duration: '5 дней',
      image: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/6e67a0ae-079b-4251-8eb3-6c58daf2a28b.jpg',
      category: 'Активный отдых'
    },
    {
      id: 3,
      title: 'Европейские Столицы',
      description: 'Культурный тур по историческим городам',
      price: '95 000 ₽',
      duration: '10 дней',
      image: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/22d08c2b-68b1-4650-aef8-3a203794485c.jpg',
      category: 'Экскурсии'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Анна Петрова',
      text: 'Незабываемое путешествие! Организация на высшем уровне, все прошло идеально.',
      rating: 5,
      tour: 'Тропический Рай'
    },
    {
      id: 2,
      name: 'Михаил Сидоров',
      text: 'Потрясающие виды и отличный гид. Рекомендую всем любителям активного отдыха!',
      rating: 5,
      tour: 'Горные Вершины'
    },
    {
      id: 3,
      name: 'Елена Иванова',
      text: 'Культурная программа превзошла все ожидания. Спасибо за организацию!',
      rating: 5,
      tour: 'Европейские Столицы'
    }
  ];

  const destinations = [
    { name: 'Бали', icon: 'Palmtree', count: '12 туров' },
    { name: 'Альпы', icon: 'Mountain', count: '8 туров' },
    { name: 'Париж', icon: 'Landmark', count: '15 туров' },
    { name: 'Мальдивы', icon: 'Waves', count: '6 туров' },
    { name: 'Исландия', icon: 'Snowflake', count: '5 туров' },
    { name: 'Япония', icon: 'Globe', count: '10 туров' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Plane" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">TravelPro</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#hero" className="text-sm font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#tours" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button size="sm">
            <Icon name="Phone" className="h-4 w-4 mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Sparkles" className="h-3 w-3 mr-1" />
              Путешествия вашей мечты
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Откройте мир с нами
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Создаем незабываемые путешествия с 2010 года. Более 5000 довольных клиентов доверили нам свой отпуск.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Compass" className="h-5 w-5 mr-2" />
                Выбрать тур
              </Button>
              <Button size="lg" variant="outline" onClick={() => setChatOpen(true)}>
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Задать вопрос
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {destinations.map((dest, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6 text-center space-y-2">
                  <Icon name={dest.icon as any} className="h-8 w-8 mx-auto text-primary" />
                  <h3 className="font-semibold">{dest.name}</h3>
                  <p className="text-xs text-muted-foreground">{dest.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши туры и цены</h2>
            <p className="text-muted-foreground">
              Подберем идеальное путешествие под ваш бюджет и интересы
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="beach">Пляж</TabsTrigger>
              <TabsTrigger value="active">Активные</TabsTrigger>
              <TabsTrigger value="culture">Культура</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
                  <Card key={tour.id} className="overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={tour.image} 
                        alt={tour.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <Badge className="absolute top-4 right-4 bg-accent">{tour.category}</Badge>
                    </div>
                    <CardHeader>
                      <CardTitle>{tour.title}</CardTitle>
                      <CardDescription>{tour.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Icon name="Calendar" className="h-4 w-4" />
                          {tour.duration}
                        </div>
                        <div className="text-2xl font-bold text-primary">{tour.price}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
                        Забронировать
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">
              Истории путешественников, которые доверились нам
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{review.text}</p>
                  <Badge variant="outline" className="text-xs">{review.tour}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Фотографии путешествий</h2>
            <p className="text-muted-foreground">
              Взгляните на места, которые ждут вас
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tours.map((tour, idx) => (
              <div 
                key={idx} 
                className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer"
              >
                <img 
                  src={tour.image} 
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold text-lg">{tour.title}</h3>
                    <p className="text-sm">{tour.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше местоположение</h2>
              <p className="text-muted-foreground">
                Приходите к нам в офис или свяжитесь удобным способом
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-sm text-muted-foreground">г. Москва, ул. Тверская, д. 10</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">info@travelpro.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Время работы</p>
                      <p className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 20:00<br/>Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle>Карта</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Map" className="h-16 w-16 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 md:w-96 z-50 animate-scale-in">
          <Card className="shadow-2xl">
            <CardHeader className="bg-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Онлайн-консультант</CardTitle>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="h-8 w-8 text-primary-foreground hover:bg-primary-foreground/20"
                  onClick={() => setChatOpen(false)}
                >
                  <Icon name="X" className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription className="text-primary-foreground/80">
                Обычно отвечаем в течение 5 минут
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 space-y-4 max-h-96 overflow-y-auto">
              <div className="flex gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Bot" className="h-4 w-4 text-primary" />
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm">Здравствуйте! Чем могу помочь?</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 border-t">
              <div className="flex gap-2 w-full">
                <Input 
                  placeholder="Ваш вопрос..." 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button size="icon">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}

      <button
        onClick={() => setChatOpen(!chatOpen)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-transform z-40 flex items-center justify-center"
      >
        <Icon name={chatOpen ? "X" : "MessageCircle"} className="h-6 w-6" />
      </button>

      <footer className="border-t bg-secondary text-secondary-foreground py-8">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Plane" className="h-5 w-5" />
                <span className="font-bold">TravelPro</span>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Создаем незабываемые путешествия с 2010 года
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li><a href="#hero" className="hover:text-secondary-foreground">Главная</a></li>
                <li><a href="#tours" className="hover:text-secondary-foreground">Туры</a></li>
                <li><a href="#reviews" className="hover:text-secondary-foreground">Отзывы</a></li>
                <li><a href="#contact" className="hover:text-secondary-foreground">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>Пляжный отдых</li>
                <li>Активный туризм</li>
                <li>Экскурсионные туры</li>
                <li>Индивидуальные маршруты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Социальные сети</h3>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Icon name="Instagram" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Icon name="Facebook" className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" className="h-8 w-8">
                  <Icon name="Twitter" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm text-secondary-foreground/60">
            © 2024 TravelPro. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
