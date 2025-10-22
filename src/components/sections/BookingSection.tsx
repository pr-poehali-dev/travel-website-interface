import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export default function BookingSection() {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tourType: '',
    guests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.tourType || !date) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все обязательные поля',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      tourType: '',
      guests: '',
      message: '',
    });
    setDate(undefined);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Забронировать тур
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Заполните форму, и наш менеджер свяжется с вами для подбора идеального тура
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Форма бронирования</CardTitle>
              <CardDescription>Оставьте заявку и получите персональное предложение</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя *</Label>
                  <Input
                    id="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input
                    id="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tourType">Тип тура *</Label>
                  <Select value={formData.tourType} onValueChange={(value) => setFormData({ ...formData, tourType: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип тура" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beach">Пляжный отдых</SelectItem>
                      <SelectItem value="mountain">Горные туры</SelectItem>
                      <SelectItem value="excursion">Экскурсионные туры</SelectItem>
                      <SelectItem value="cruise">Круизы</SelectItem>
                      <SelectItem value="adventure">Приключенческие туры</SelectItem>
                      <SelectItem value="exclusive">Эксклюзивные туры</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Дата начала *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <Icon name="Calendar" className="mr-2" size={16} />
                          {date ? format(date, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Количество гостей</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      placeholder="2"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Дополнительная информация</Label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о ваших пожеланиях..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Icon name="Send" className="mr-2" size={18} />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardContent className="pt-6">
                <Icon name="Clock" size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Быстрая обработка</h3>
                <p className="text-white/90">
                  Обрабатываем заявки в течение 30 минут. Наши менеджеры свяжутся с вами для уточнения деталей и подберут лучшие варианты.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary to-secondary/80 text-white">
              <CardContent className="pt-6">
                <Icon name="Shield" size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Гарантия безопасности</h3>
                <p className="text-white/90">
                  Все туры застрахованы. Полная поддержка на протяжении всего путешествия. Работаем только с проверенными партнёрами.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent to-accent/80 text-white">
              <CardContent className="pt-6">
                <Icon name="Percent" size={48} className="mb-4" />
                <h3 className="text-2xl font-bold mb-3">Специальные предложения</h3>
                <p className="text-white/90">
                  Раннее бронирование — скидка до 20%. Групповые туры — специальные цены. Программа лояльности для постоянных клиентов.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
