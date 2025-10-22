import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tour, setTour] = useState('');
  const [guests, setGuests] = useState('');
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const tours = [
    'Тропический Рай',
    'Горные Вершины',
    'Европейские Столицы',
    'Экзотическая Азия',
    'Исландские фьорды',
    'Сафари в Африке'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !tour || !date) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setName('');
    setEmail('');
    setPhone('');
    setTour('');
    setGuests('');
    setMessage('');
    setDate(new Date());
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-accent/10 text-accent-foreground hover:bg-accent/20">
            <Icon name="Calendar" className="mr-2" size={14} />
            Бронирование
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Забронировать тур</h2>
          <p className="text-lg text-muted-foreground">
            Заполните форму, и мы подберём для вас идеальное путешествие
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="lg:sticky lg:top-24 h-fit">
              <CardHeader>
                <CardTitle>Выберите дату</CardTitle>
                <CardDescription>Доступные даты выделены в календаре</CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  disabled={(date) => date < new Date()}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Форма бронирования</CardTitle>
                <CardDescription>Заполните информацию о вашей поездке</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="ivan@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tour">Выберите тур *</Label>
                    <Select value={tour} onValueChange={setTour}>
                      <SelectTrigger id="tour">
                        <SelectValue placeholder="Выберите тур из списка" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tourName) => (
                          <SelectItem key={tourName} value={tourName}>
                            {tourName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество человек</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="20"
                      placeholder="2"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительная информация</Label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите о ваших пожеланиях..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                    />
                  </div>

                  {date && (
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Icon name="Calendar" size={16} />
                        <span>Выбранная дата:</span>
                      </div>
                      <div className="font-semibold">
                        {date.toLocaleDateString('ru-RU', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  )}

                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={18} />
                    Отправить заявку
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Обязательные поля для заполнения
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
