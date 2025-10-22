import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const galleryImages = [
  {
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/7e1cf99d-1fa1-4ecd-bbb3-be7c93452805.jpg',
    title: 'Райские пляжи Мальдив',
    location: 'Мальдивы',
  },
  {
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/624e9439-eb06-428f-bdb8-8ac6db5e4b11.jpg',
    title: 'Горные вершины Альп',
    location: 'Швейцария',
  },
  {
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/e4781c03-3763-4ae1-a067-d32067de781a.jpg',
    title: 'Старый город',
    location: 'Италия',
  },
  {
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/7e1cf99d-1fa1-4ecd-bbb3-be7c93452805.jpg',
    title: 'Тропический рай',
    location: 'Таиланд',
  },
  {
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/624e9439-eb06-428f-bdb8-8ac6db5e4b11.jpg',
    title: 'Путешествие в горы',
    location: 'Норвегия',
  },
  {
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/e4781c03-3763-4ae1-a067-d32067de781a.jpg',
    title: 'Европейские улочки',
    location: 'Франция',
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Галерея путешествий
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Фотографии наших клиентов из незабываемых поездок
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="MapPin" size={14} />
                    <span>{image.location}</span>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="Maximize2" size={20} className="text-foreground" />
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage !== null && (
              <div className="relative">
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-bold mb-2">{galleryImages[selectedImage].title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="MapPin" size={18} />
                    <span>{galleryImages[selectedImage].location}</span>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
