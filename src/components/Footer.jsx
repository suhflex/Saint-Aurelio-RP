export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span className="font-semibold text-pink-500">Saint Aurelio RP</span>
        <span>© {new Date().getFullYear()} Saint Aurelio RP — Tous droits réservés</span>
        <span>Jeu non officiel sur Roblox</span>
      </div>
    </footer>
  )
}
