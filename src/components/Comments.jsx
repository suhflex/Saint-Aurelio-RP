import { useEffect, useRef } from 'react'

export default function Comments({ dark }) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    ref.current.innerHTML = ''

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'suhflex/Saint-Aurelio-RP')
    script.setAttribute('data-repo-id', 'R_kgDORqjFjQ')
    script.setAttribute('data-category', 'Ideas')
    script.setAttribute('data-category-id', 'DIC_kwDORqjFjc4C4tpn')
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'bottom')
    script.setAttribute('data-theme', dark ? 'dark' : 'light')
    script.setAttribute('data-lang', 'fr')
    script.setAttribute('crossorigin', 'anonymous')
    script.async = true

    ref.current.appendChild(script)
  }, [dark])

  return (
    <section id="comments" className="py-24 px-4 bg-pink-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Laisse un <span className="text-pink-500">commentaire</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">Partage ton avis sur Saint Aurelio RP</p>
        </div>
        <div ref={ref} />
      </div>
    </section>
  )
}
