// Ajoute tes images dans le dossier public/gallery/
// et liste leurs noms ici
const images = [
  // Exemples :
  // { src: '/gallery/screenshot1.png', alt: 'Vue de la ville' },
  // { src: '/gallery/screenshot2.png', alt: 'Un soir à Aurelio' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="text-amber-500">Galerie</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Aperçu du jeu</p>
        </div>

        {images.length === 0 ? (
          <div className="text-center py-20 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800">
            <p className="text-gray-400 text-lg">📸 Les screenshots arrivent bientôt...</p>
            <p className="text-gray-400 text-sm mt-2">
              Ajoute tes images dans <code className="bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded">public/gallery/</code>
            </p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-xl overflow-hidden group cursor-pointer">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
