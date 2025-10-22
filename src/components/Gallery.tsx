import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const photos = [
  {
    id: 1,
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/03090d7d-52d7-4260-b8d3-195e644de38d.jpg',
    title: 'Тропический рай',
    location: 'Мальдивы',
  },
  {
    id: 2,
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/d00a6ce9-ad91-4bf5-8c85-7e1de7dd4a67.jpg',
    title: 'Старый город',
    location: 'Прага, Чехия',
  },
  {
    id: 3,
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/50762468-5151-4833-bdba-a1078e83f720.jpg',
    title: 'Горные вершины',
    location: 'Швейцарские Альпы',
  },
  {
    id: 4,
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/03090d7d-52d7-4260-b8d3-195e644de38d.jpg',
    title: 'Закат на пляже',
    location: 'Бали, Индонезия',
  },
  {
    id: 5,
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/d00a6ce9-ad91-4bf5-8c85-7e1de7dd4a67.jpg',
    title: 'Архитектура',
    location: 'Барселона, Испания',
  },
  {
    id: 6,
    url: 'https://cdn.poehali.dev/projects/e2429a40-9f0f-4487-8d40-200b739ef9c8/files/50762468-5151-4833-bdba-a1078e83f720.jpg',
    title: 'Походы',
    location: 'Норвегия',
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Фотографии путешествий</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Вдохновляйтесь путешествиями наших клиентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{photo.title}</h3>
                  <p className="text-sm text-white/90">{photo.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedPhoto && (
              <div>
                <img
                  src={selectedPhoto.url}
                  alt={selectedPhoto.title}
                  className="w-full h-auto rounded-lg"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{selectedPhoto.title}</h3>
                  <p className="text-muted-foreground">{selectedPhoto.location}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
