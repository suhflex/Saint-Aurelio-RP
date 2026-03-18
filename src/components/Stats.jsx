import { useEffect, useState } from 'react'

const DISCORD_GUILD_ID = '1447558199594188983'
const ROBLOX_UNIVERSE_ID = null // à remplir plus tard

function StatCard({ icon, label, value, sub, error }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-amber-500/50 transition-colors">
      <div className="text-3xl">{icon}</div>
      <div className={`text-3xl font-bold ${error ? 'text-gray-400 text-lg' : 'text-amber-500'}`}>{value}</div>
      <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 text-center">{label}</div>
      {sub && <div className="text-xs text-gray-400 text-center">{sub}</div>}
    </div>
  )
}

export default function Stats() {
  const [discordOnline, setDiscordOnline] = useState(null)
  const [discordTotal, setDiscordTotal] = useState(null)
  const [discordError, setDiscordError] = useState(false)
  const [robloxPlaying, setRobloxPlaying] = useState(null)
  const [robloxVisits, setRobloxVisits] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetches = []

    // Discord widget — nécessite que le Widget soit activé :
    // Paramètres du serveur → Widget → Activer le widget
    fetches.push(
      fetch(`https://discord.com/api/guilds/${DISCORD_GUILD_ID}/widget.json`)
        .then(r => {
          if (!r.ok) throw new Error('widget disabled')
          return r.json()
        })
        .then(async data => {
          setDiscordOnline(data.presence_count ?? 0)

          // Récupère le total via l'invite
          if (data.instant_invite) {
            const code = data.instant_invite.split('/').pop()
            const invite = await fetch(`https://discord.com/api/invites/${code}?with_counts=true`).then(r => r.json())
            if (invite.approximate_member_count) {
              setDiscordTotal(invite.approximate_member_count)
            }
          }
        })
        .catch(() => setDiscordError(true))
    )

    if (ROBLOX_UNIVERSE_ID) {
      fetches.push(
        fetch(`https://games.roblox.com/v1/games?universeIds=${ROBLOX_UNIVERSE_ID}`)
          .then(r => r.json())
          .then(data => {
            const game = data.data?.[0]
            if (game) {
              setRobloxPlaying(game.playing)
              setRobloxVisits(game.visits)
            }
          })
          .catch(() => {})
      )
    }

    Promise.allSettled(fetches).then(() => setLoading(false))
  }, [])

  function fmt(n) {
    if (n === null || n === undefined) return '—'
    if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
    if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
    return n.toLocaleString('fr-FR')
  }

  const discordValue = loading
    ? '...'
    : discordError
      ? 'Widget désactivé'
      : fmt(discordOnline)

  return (
    <section id="stats" className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Nos <span className="text-amber-500">Stats</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Chiffres mis à jour en temps réel</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon="🟢"
            label="Membres en ligne"
            value={discordValue}
            sub={discordError ? 'Active le Widget dans les paramètres du serveur Discord' : 'sur Discord en ce moment'}
            error={discordError}
          />
          <StatCard
            icon="💬"
            label="Membres Discord"
            value={loading ? '...' : fmt(discordTotal)}
            sub="total du serveur"
          />
          <StatCard
            icon="🎮"
            label="Joueurs en jeu"
            value={ROBLOX_UNIVERSE_ID ? fmt(robloxPlaying) : 'Bientôt'}
            sub="sur Roblox en ce moment"
          />
          <StatCard
            icon="👥"
            label="Visites totales"
            value={ROBLOX_UNIVERSE_ID ? fmt(robloxVisits) : 'Bientôt'}
            sub="joueurs ayant rejoint"
          />
        </div>
      </div>
    </section>
  )
}
