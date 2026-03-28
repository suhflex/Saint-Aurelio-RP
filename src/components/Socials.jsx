const DISCORD_INVITE = 'https://discord.gg/9vZcnC4Nu'
const DISBOARD_URL = 'https://disboard.org/fr/server/1447558199594188983'

const socials = [
  {
    name: 'Discord',
    description: 'Rejoins notre communauté',
    url: DISCORD_INVITE,
    color: 'from-indigo-500 to-indigo-700',
    hoverBorder: 'hover:border-indigo-500/50',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    name: 'Disboard',
    description: 'Notre page Disboard',
    url: DISBOARD_URL,
    color: 'from-blue-500 to-blue-700',
    hoverBorder: 'hover:border-blue-500/50',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 3h18v18H3V3zm2 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
      </svg>
    ),
  },
]

export default function Socials() {
  return (
    <section id="socials" className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nos <span className="text-pink-500">Réseaux</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Rejoins la communauté Aurora RP</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map(s => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-4 p-8 w-64 rounded-2xl bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 ${s.hoverBorder} transition-all hover:shadow-xl hover:-translate-y-1`}
            >
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${s.color} text-white`}>
                {s.icon}
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">{s.name}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{s.description}</div>
              </div>
              <span className="text-xs font-medium text-pink-500 group-hover:underline">
                Rejoindre →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
