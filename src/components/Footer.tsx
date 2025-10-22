import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icon name="Compass" className="text-primary" size={32} />
              <span className="text-2xl font-bold">TravelWay</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Создаём незабываемые путешествия с 2010 года. Ваша мечта — наша работа.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="rounded-full bg-background/10 border-background/20 hover:bg-background/20">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-background/10 border-background/20 hover:bg-background/20">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-background/10 border-background/20 hover:bg-background/20">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full bg-background/10 border-background/20 hover:bg-background/20">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Направления</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">Пляжный отдых</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Горные туры</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Культурные экскурсии</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Экзотические страны</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Семейный отдых</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition-colors">О нас</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Наша команда</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Лицензии</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Партнёры</a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition-colors">Вакансии</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={18} className="mt-0.5 flex-shrink-0" />
                <span>ул. Тверская, 15<br />Москва, Россия</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={18} className="flex-shrink-0" />
                <a href="tel:+74951234567" className="hover:text-background transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={18} className="flex-shrink-0" />
                <a href="mailto:info@travelway.ru" className="hover:text-background transition-colors">
                  info@travelway.ru
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="flex-shrink-0" />
                <span>Пн-Пт: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} TravelWay. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-background transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-background transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
