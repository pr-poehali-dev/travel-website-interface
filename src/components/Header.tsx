import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <Icon name="Compass" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">TravelExplore</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('guides')} className="text-foreground hover:text-primary transition-colors">
              Гиды
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('location')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </nav>

          <Button onClick={() => scrollToSection('booking')} className="hidden md:flex">
            Забронировать тур
          </Button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-left text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-left text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('guides')} className="text-left text-foreground hover:text-primary transition-colors">
              Гиды
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-left text-foreground hover:text-primary transition-colors">
              Галерея
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left text-foreground hover:text-primary transition-colors">
              Отзывы
            </button>
            <button onClick={() => scrollToSection('location')} className="text-left text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
            <Button onClick={() => scrollToSection('booking')} className="w-full">
              Забронировать тур
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
