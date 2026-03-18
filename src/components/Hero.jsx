export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Bandeau image en haut ── */}
      <div
        className="relative w-full h-80 md:h-[500px] flex-shrink-0 flex items-center justify-center pt-16"
        style={{
          background: 'linear-gradient(135deg, #FFB5C8 0%, #FFDDE1 20%, #E8D5F5 40%, #B5D8FF 60%, #FFDDE1 80%, #FFB5C8 100%)',
        }}
      >
        {/* Effet holographique animé */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.6) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'shimmer 3s infinite linear',
          }}
        />

        <img
          src="/banner.png"
          alt="Saint Aurelio RP"
          className="h-full w-auto object-contain rounded-full relative z-10"
        />

        {/* Dégradé bas */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-50 dark:to-gray-950" />

        {/* Titre en haut à gauche */}
        <div className="absolute top-20 left-6 text-left z-10 bg-white/30 backdrop-blur-sm px-4 py-3 rounded-xl border border-white/50">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-800">
            Saint <span className="text-pink-500">Aurelio</span> RP
          </h1>
        </div>
      </div>

      {/* ── Contenu sous le bandeau ── */}
      <div
        className="flex-1 flex items-center justify-center px-4 py-16"
        style={{ background: 'linear-gradient(180deg, #fff0f5 0%, #f9f0ff 100%)' }}
      >
        <div
          className="absolute inset-0 dark:block hidden"
          style={{ background: 'linear-gradient(180deg, #1a0a1a 0%, #0f0a1a 100%)' }}
        />

        <div className="relative z-10 text-center max-w-2xl">
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-10">
            Plonge dans l'univers d'un roleplay immersif sur Roblox. Construis ta vie, écris ton histoire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#stats"
              className="px-8 py-3 rounded-xl bg-pink-400 hover:bg-pink-300 text-white font-semibold transition-colors shadow-lg shadow-pink-200"
            >
              Voir les stats
            </a>
            <a
              href="#socials"
              className="px-8 py-3 rounded-xl border border-pink-300 hover:border-pink-400 text-pink-500 hover:text-pink-600 font-semibold transition-colors"
            >
              Nous rejoindre
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </section>
  )
}
