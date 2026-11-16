import Link from 'next/link'

export function LanguageSwitch({
  href,
  language,
}: {
  href: string
  language: 'en' | 'fr'
}) {
  const languageName = language === 'en' ? 'English' : 'Français'

  return (
    <Link className="language-toggle" href={href} hrefLang={language} lang={language} aria-label={`Switch language to ${languageName}`}>
      {language.toUpperCase()}
    </Link>
  )
}
