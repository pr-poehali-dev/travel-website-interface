import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const tours = [
  { id: 'beach', name: 'Пляжный отдых', price: 45000 },
  { id: 'excursion', name: 'Экскурсионные туры', price: 55000 },
  { id: 'mountain', name: 'Горные походы', price: 35000 },
  { id: 'cruise', name: 'Круизы', price: 85000 },
  { id: 'exotic', name: 'Экзотические туры', price: 95000 },
  { id: 'family', name: 'Семейный отдых', price: 40000 },
];

const availableDates = [
  { date: '2024-11-15', available: true },
  { date: '2024-11-20', available: true },
  { date: '2024-11-25', available: false },
  { date: '2024-12-01', available: true },
  { date: '2024-12-10', available: true },
  { date: '2024-12-15', available: true },
  { date: '2024-12-20', available: false },
  { date: '2024-12-25', available: true },
];

const BookingCalendar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    people: '2',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения бронирования.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      tour: '',
      date: '',
      people: '2',
    });
  };

  const selectedTour = tours.find((t) => t.id === formData.tour);
  const totalPrice = selectedTour ? selectedTour.price * parseInt(formData.people || '1') : 0;

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Забронировать тур</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите тур и дату, заполните форму — мы свяжемся с вами для подтверждения
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Форма бронирования</CardTitle>
                <CardDescription>Заполните все поля для оформления заявки</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ivan@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tour">Выберите тур *</Label>
                    <Select value={formData.tour} onValueChange={(value) => setFormData({ ...formData, tour: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тип тура" />
                      </SelectTrigger>
                      <SelectContent>
                        {tours.map((tour) => (
                          <SelectItem key={tour.id} value={tour.id}>
                            {tour.name} - от {tour.price.toLocaleString()} ₽
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Дата начала *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="people">Количество человек *</Label>
                      <Select value={formData.people} onValueChange={(value) => setFormData({ ...formData, people: value })}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? 'человек' : 'человека'}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Доступные даты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {availableDates.map((item) => (
                  <div
                    key={item.date}
                    className={`flex items-center justify-between p-3 rounded-lg border ${
                      item.available
                        ? 'border-green-200 bg-green-50'
                        : 'border-red-200 bg-red-50'
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {new Date(item.date).toLocaleDateString('ru-RU', {
                        day: 'numeric',
                        month: 'long',
                      })}
                    </span>
                    {item.available ? (
                      <Icon name="Check" className="text-green-600" size={20} />
                    ) : (
                      <Icon name="X" className="text-red-600" size={20} />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {totalPrice > 0 && (
              <Card className="border-primary">
                <CardHeader>
                  <CardTitle>Итого</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Тур:</span>
                      <span>{selectedTour?.name}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Человек:</span>
                      <span>{formData.people}</span>
                    </div>
                    <div className="h-px bg-border my-3" />
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Стоимость:</span>
                      <span className="text-2xl font-bold text-primary">
                        {totalPrice.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;
