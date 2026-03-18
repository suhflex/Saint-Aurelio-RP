export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Bandeau image en haut ── */}
      <div className="relative w-full h-80 md:h-[500px] flex-shrink-0 bg-gradient-to-br from-black via-orange-950 to-orange-500 flex items-center justify-center pt-16">
        <img
          src="/banner.png"
          alt="Saint Aurelio RP"
          className="h-full w-auto object-contain rounded-full"
        />
        {/* Dégradé bas pour transition douce */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* Titre en haut à droite */}
        <div className="absolute top-20 left-6 text-left z-10 bg-black/60 backdrop-blur-sm px-4 py-3 rounded-xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            Saint <span className="text-amber-400">Aurelio</span> RP
          </h1>
        </div>
      </div>

      {/* ── Contenu sous le bandeau ── */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-b from-gray-950 to-gray-900 px-4 py-16">
        {/* Glow */}
        <div className="absolute w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl">
          <p className="text-gray-400 text-lg md:text-xl mb-10">
            Plonge dans l'univers d'un roleplay immersif sur Roblox. Construis ta vie, écris ton histoire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#stats"
              className="px-8 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold transition-colors"
            >
              Voir les stats
            </a>
            <a
              href="#socials"
              className="px-8 py-3 rounded-xl border border-gray-600 hover:border-amber-500 text-white hover:text-amber-400 font-semibold transition-colors"
            >
              Nous rejoindre
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
