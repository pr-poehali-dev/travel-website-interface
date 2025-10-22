import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

const tours = [
  { id: '1', name: 'Тропический Рай', price: 85000 },
  { id: '2', name: 'Горные Вершины', price: 65000 },
  { id: '3', name: 'Европейские Столицы', price: 95000 },
];

const availableDates = [
  new Date(2024, 11, 15),
  new Date(2024, 11, 20),
  new Date(2025, 0, 10),
  new Date(2025, 0, 25),
  new Date(2025, 1, 5),
  new Date(2025, 1, 14),
];

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTour, setSelectedTour] = useState('');
  const [participants, setParticipants] = useState('1');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedTour || !date || !name || !email || !phone) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setSelectedTour('');
    setDate(undefined);
    setParticipants('1');
    setName('');
    setEmail('');
    setPhone('');
  };

  const isDateAvailable = (day: Date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getDate() === day.getDate() &&
        availableDate.getMonth() === day.getMonth() &&
        availableDate.getFullYear() === day.getFullYear()
    );
  };

  const selectedTourData = tours.find((t) => t.id === selectedTour);
  const totalPrice = selectedTourData ? selectedTourData.price * parseInt(participants) : 0;

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Бронирование тура</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите дату, тур и количество участников
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Форма бронирования</CardTitle>
              <CardDescription>Заполните данные для бронирования путешествия</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tour">Выберите тур</Label>
                    <Select value={selectedTour} onValueChange={setSelectedTour}>
                      <SelectTrigger id="tour">
                        <SelectValue placeholder="Выберите направление" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id}>
                            {tour.name} - {tour.price.toLocaleString()} ₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Дата начала тура</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(day) => !isDateAvailable(day)}
                          locale={ru}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="participants">Количество участников</Label>
                    <Select value={participants} onValueChange={setParticipants}>
                      <SelectTrigger id="participants">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'человек' : 'человека'}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@mail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                {selectedTourData && (
                  <div className="bg-muted p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg">Тур:</span>
                      <span className="font-semibold">{selectedTourData.name}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg">Участников:</span>
                      <span className="font-semibold">{participants}</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <span className="text-xl font-bold">Итого:</span>
                      <span className="text-3xl font-bold text-primary">
                        {totalPrice.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                )}

                <Button type="submit" size="lg" className="w-full">
                  <Icon name="CheckCircle" className="mr-2" size={20} />
                  Забронировать
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Booking;
