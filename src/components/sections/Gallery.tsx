import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    {
      id: 1,
      url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/269fe944-a418-4f65-b1d0-45196203c683.jpg',
      location: 'Мальдивы',
      category: 'Пляжный отдых'
    },
    {
      id: 2,
      url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/0d6d9743-b658-4d85-a556-b778248f94ef.jpg',
      location: 'Альпы',
      category: 'Горы'
    },
    {
      id: 3,
      url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/60adeb7f-6da9-40ad-b8b5-f39741cc688b.jpg',
      location: 'Европа',
      category: 'Культура'
    },
    {
      id: 4,
      url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/269fe944-a418-4f65-b1d0-45196203c683.jpg',
      location: 'Бали',
      category: 'Экзотика'
    },
    {
      id: 5,
      url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/0d6d9743-b658-4d85-a556-b778248f94ef.jpg',
      location: 'Патагония',
      category: 'Приключения'
    },
    {
      id: 6,
      url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/60adeb7f-6da9-40ad-b8b5-f39741cc688b.jpg',
      location: 'Париж',
      category: 'Романтика'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">
            <Icon name="Camera" className="mr-2" size={14} />
            Галерея
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Фотографии путешествий</h2>
          <p className="text-lg text-muted-foreground">
            Взгляните на впечатляющие места, которые мы посетили вместе с нашими клиентами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3]"
              onClick={() => setSelectedImage(photo.url)}
            >
              <img 
                src={photo.url}
                alt={photo.location}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon name="MapPin" size={16} />
                    <span className="font-semibold">{photo.location}</span>
                  </div>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {photo.category}
                  </Badge>
                </div>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/90 rounded-full p-2">
                  <Icon name="Maximize2" size={20} className="text-foreground" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          {selectedImage && (
            <img 
              src={selectedImage}
              alt="Полноразмерное изображение"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
