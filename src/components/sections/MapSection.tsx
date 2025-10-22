import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const destinations = [
  { id: 1, name: 'Мальдивы', tours: 12, top: '35%', left: '55%', type: 'beach' },
  { id: 2, name: 'Швейцария', tours: 8, top: '25%', left: '30%', type: 'mountain' },
  { id: 3, name: 'Италия', tours: 15, top: '28%', left: '32%', type: 'city' },
  { id: 4, name: 'Таиланд', tours: 18, top: '40%', left: '58%', type: 'beach' },
  { id: 5, name: 'Япония', tours: 10, top: '32%', left: '68%', type: 'city' },
  { id: 6, name: 'Норвегия', tours: 6, top: '15%', left: '32%', type: 'mountain' },
  { id: 7, name: 'ОАЭ', tours: 14, top: '38%', left: '48%', type: 'city' },
  { id: 8, name: 'Танзания', tours: 7, top: '48%', left: '38%', type: 'adventure' },
];

export default function MapSection() {
  const [activeDestination, setActiveDestination] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const getDestinationIcon = (type: string) => {
    switch (type) {
      case 'beach': return 'Palmtree';
      case 'mountain': return 'Mountain';
      case 'city': return 'Building2';
      case 'adventure': return 'Tent';
      default: return 'MapPin';
    }
  };

  const filteredDestinations = filter === 'all' 
    ? destinations 
    : destinations.filter(d => d.type === filter);

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            География наших туров
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Исследуйте мир с нами — более 50 направлений на всех континентах
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge 
            variant={filter === 'all' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setFilter('all')}
          >
            Все направления
          </Badge>
          <Badge 
            variant={filter === 'beach' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setFilter('beach')}
          >
            <Icon name="Palmtree" size={14} className="mr-1" />
            Пляжные
          </Badge>
          <Badge 
            variant={filter === 'mountain' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setFilter('mountain')}
          >
            <Icon name="Mountain" size={14} className="mr-1" />
            Горные
          </Badge>
          <Badge 
            variant={filter === 'city' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setFilter('city')}
          >
            <Icon name="Building2" size={14} className="mr-1" />
            Городские
          </Badge>
          <Badge 
            variant={filter === 'adventure' ? 'default' : 'outline'}
            className="cursor-pointer px-4 py-2"
            onClick={() => setFilter('adventure')}
          >
            <Icon name="Tent" size={14} className="mr-1" />
            Приключения
          </Badge>
        </div>

        <div className="relative bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10 rounded-2xl p-8 mb-8">
          <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <svg viewBox="0 0 1000 600" className="w-full h-full">
                <path d="M 100,200 Q 200,150 300,180 T 500,200 T 700,180 T 900,200" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
                <path d="M 50,300 Q 200,250 350,280 T 650,300 T 950,280" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.3"/>
                <circle cx="200" cy="150" r="80" fill="#10b981" opacity="0.2"/>
                <circle cx="600" cy="250" r="100" fill="#f59e0b" opacity="0.2"/>
                <circle cx="800" cy="150" r="60" fill="#ef4444" opacity="0.2"/>
              </svg>
            </div>

            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: dest.top, left: dest.left }}
                onMouseEnter={() => setActiveDestination(dest.id)}
                onMouseLeave={() => setActiveDestination(null)}
              >
                <div className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${activeDestination === dest.id 
                    ? 'bg-primary scale-125 shadow-xl' 
                    : 'bg-white/90 hover:bg-primary/90'
                  }
                  transition-all duration-300 border-2 border-primary
                `}>
                  <Icon 
                    name={getDestinationIcon(dest.type) as any}
                    size={20}
                    className={activeDestination === dest.id ? 'text-white' : 'text-primary'}
                  />
                </div>

                {activeDestination === dest.id && (
                  <Card className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-48 z-10 shadow-xl animate-in fade-in slide-in-from-top-2">
                    <CardContent className="p-3">
                      <h3 className="font-bold text-lg mb-1">{dest.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {dest.tours} активных туров
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Icon name="Globe" className="mx-auto mb-3 text-primary" size={40} />
            <div className="text-3xl font-bold text-foreground mb-1">50+</div>
            <p className="text-sm text-muted-foreground">Стран</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Icon name="MapPin" className="mx-auto mb-3 text-secondary" size={40} />
            <div className="text-3xl font-bold text-foreground mb-1">200+</div>
            <p className="text-sm text-muted-foreground">Городов</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Icon name="Route" className="mx-auto mb-3 text-accent" size={40} />
            <div className="text-3xl font-bold text-foreground mb-1">300+</div>
            <p className="text-sm text-muted-foreground">Маршрутов</p>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <Icon name="Plane" className="mx-auto mb-3 text-primary" size={40} />
            <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
            <p className="text-sm text-muted-foreground">Поддержка</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
