import Icon from '@/components/ui/icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Plane" className="text-primary" size={32} />
              <span className="text-2xl font-bold">TravelWorld</span>
            </div>
            <p className="text-background/80 text-sm">
              Откройте мир незабываемых путешествий вместе с нами. Профессионально организуем туры с 2009 года.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#services" className="hover:text-primary transition">Пляжный отдых</a></li>
              <li><a href="#services" className="hover:text-primary transition">Горные туры</a></li>
              <li><a href="#services" className="hover:text-primary transition">Экскурсии</a></li>
              <li><a href="#services" className="hover:text-primary transition">Круизы</a></li>
              <li><a href="#services" className="hover:text-primary transition">Приключения</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Информация</h3>
            <ul className="space-y-2 text-sm text-background/80">
              <li><a href="#reviews" className="hover:text-primary transition">Отзывы</a></li>
              <li><a href="#guides" className="hover:text-primary transition">Наши гиды</a></li>
              <li><a href="#location" className="hover:text-primary transition">География туров</a></li>
              <li><a href="#booking" className="hover:text-primary transition">Бронирование</a></li>
              <li><a href="#" className="hover:text-primary transition">О компании</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <a href="tel:+74951234567" className="hover:text-primary transition">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@travelworld.ru" className="hover:text-primary transition">info@travelworld.ru</a>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-primary transition">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/70">
          <p>© {currentYear} TravelWorld. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
