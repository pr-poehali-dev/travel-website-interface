import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Здравствуйте! Я онлайн-консультант TravelWay. Чем могу помочь?',
      sender: 'bot',
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    'Подобрать тур',
    'Узнать цены',
    'Связаться с менеджером',
    'Условия бронирования',
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user' as const,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Спасибо за ваш вопрос! Наш менеджер свяжется с вами в ближайшее время. Вы также можете позвонить нам: +7 (495) 123-45-67',
        sender: 'bot' as const,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    const newMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user' as const,
      time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);

    setTimeout(() => {
      let responseText = '';
      switch (reply) {
        case 'Подобрать тур':
          responseText = 'Отлично! Расскажите, какой отдых вас интересует? Пляжный, экскурсионный или активный?';
          break;
        case 'Узнать цены':
          responseText = 'Цены на туры начинаются от 35 000 ₽. Для точного расчета, пожалуйста, укажите желаемое направление и количество человек.';
          break;
        case 'Связаться с менеджером':
          responseText = 'Менеджер свяжется с вами в течение 15 минут. Оставьте ваш номер телефона в форме связи или позвоните: +7 (495) 123-45-67';
          break;
        case 'Условия бронирования':
          responseText = 'Бронирование требует предоплату 30%. Полная оплата за 14 дней до вылета. Бесплатная отмена за 30+ дней.';
          break;
        default:
          responseText = 'Спасибо за вопрос! Наш менеджер поможет вам.';
      }

      const botResponse = {
        id: messages.length + 2,
        text: responseText,
        sender: 'bot' as const,
        time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  return (
    <>
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 shadow-2xl z-50 max-h-[600px] flex flex-col">
          <CardHeader className="border-b bg-primary text-primary-foreground">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg flex items-center gap-2">
                <Icon name="MessageCircle" size={20} />
                Онлайн-консультант
              </CardTitle>
              <button
                onClick={() => setIsOpen(false)}
                className="text-primary-foreground hover:opacity-80"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            <p className="text-sm text-primary-foreground/90 mt-1">
              Обычно отвечаем за 2 минуты
            </p>
          </CardHeader>
          
          <CardContent className="flex-1 p-4 overflow-y-auto space-y-4 max-h-96">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">{message.time}</span>
                </div>
              </div>
            ))}

            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            )}
          </CardContent>

          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Напишите сообщение..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Icon name="Send" size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-2xl z-50"
      >
        <Icon name={isOpen ? 'X' : 'MessageCircle'} size={24} />
      </Button>
    </>
  );
};

export default ChatWidget;
