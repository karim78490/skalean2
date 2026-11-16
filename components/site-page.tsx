'use client'

import contentFr from '@/content/site-content.json'
import { ArrowDownRight, ArrowRight, BarChart3, Menu, Search, Star, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { ContactForm } from './contact-form'
import { LanguageSwitch } from './language-switch'

const productMarkSrcs = ['/logo-chablayer-mark.png', '/logo-powercockpit-mark.png']

type SiteContent = typeof contentFr

export function SitePage({
  content,
  locale,
}: {
  content: SiteContent
  locale: 'fr' | 'en'
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(0)
  const activeMarkSrc = productMarkSrcs[activeProduct]

  return (
    <main className="site-shell" lang={locale}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label={locale === 'fr' ? 'Skalean, accueil' : 'Skalean, home'}>
          <img src="/logo-skalean-mark.png" alt="" aria-hidden="true" className="brand-img" />
          <span>SKALEAN</span>
        </a>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label={content.navigation.label}>
          <a href="#skalean" onClick={() => setMenuOpen(false)}>{content.navigation.company}</a>
          <a href="#product" onClick={() => setMenuOpen(false)}>{content.navigation.solutions}</a>
          <a className="mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>{content.navigation.cta}<ArrowRight aria-hidden="true" /></a>
        </nav>
        <div className="header-actions">
          <LanguageSwitch href={locale === 'fr' ? '/en' : '/'} language={locale === 'fr' ? 'en' : 'fr'} />
          <a className="button button-copper button-small" href="#contact">{content.navigation.cta}<ArrowRight aria-hidden="true" /></a>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? content.navigation.closeMenu : content.navigation.openMenu} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-orb orb-one" /><div className="hero-orb orb-two" />
        <div className="hero-inner">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          <h1>{content.hero.title}</h1>
          <p className="hero-copy">{content.hero.description}</p>
          <div className="hero-actions"><a className="button button-copper" href="#product">{content.hero.secondaryCta}<ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="proof-row">{content.hero.proof.map((item) => <span key={item}><span className="proof-dot" />{item}</span>)}</div>
      </section>

      <section className="intro section-pad" id="skalean"><div className="section-label"><span>{content.intro.eyebrow}</span><ArrowDownRight aria-hidden="true" /></div><div className="intro-grid"><h2>{content.intro.title}</h2><p>{content.intro.description}</p></div></section>

      <section className="products section-pad" id="product">
        <div className="section-heading"><div><p className="eyebrow">{content.products.eyebrow}</p><h2>{content.products.title}</h2></div><p>{content.products.description}</p></div>
        <div className="product-tabs" role="tablist" aria-label={content.products.label}>
          {content.products.items.map((item, i) => (
            <button key={item.name} className={activeProduct === i ? 'product-tab active' : 'product-tab'} onClick={() => setActiveProduct(i)} role="tab" aria-selected={activeProduct === i}>
              <img src={productMarkSrcs[i]} className="product-tab-logo" alt="" aria-hidden="true" />
              {item.name}
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>
        <div className="product-showcase">
          <div className="product-visual">
            <span className="visual-kicker">SKALEAN / 0{activeProduct + 1}</span>
            {activeProduct === 0 ? <ChabLayerVisual v={content.products.visuals.chablayer} /> : <PowerCockpitVisual v={content.products.visuals.powercockpit} />}
          </div>
          <div className="product-copy">
            <div className="product-copy-logo"><img src={activeMarkSrc} className="product-copy-logo-img" alt="" aria-hidden="true" /></div>
            <p className="eyebrow">{content.products.items[activeProduct].tag}</p>
            <h3>{content.products.items[activeProduct].name}</h3>
            <p>{content.products.items[activeProduct].description}</p>
            <strong>{content.products.items[activeProduct].detail}</strong>
            <a className="text-link" href="#contact">{content.products.discoverCta}<ArrowRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="how section-pad" id="solutions"><div className="section-heading"><div><p className="eyebrow">{content.howItWorks.eyebrow}</p><h2>{content.howItWorks.title}</h2></div><p>{content.howItWorks.description}</p></div><div className="steps">{content.howItWorks.steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p><ArrowDownRight aria-hidden="true" /></article>)}</div></section>

      <section className="manifesto section-pad" id="resources"><div className="manifesto-card"><div><p className="eyebrow">{content.manifesto.eyebrow}</p><h2>{content.manifesto.title}</h2></div><div><p>{content.manifesto.description}</p><a className="text-link" href="#contact">{content.manifesto.link}<ArrowRight aria-hidden="true" /></a></div></div></section>

      <section className="contact section-pad" id="contact"><p className="eyebrow">{content.contact.eyebrow}</p><h2>{content.contact.title}</h2><ContactForm content={content.contact} /><p className="contact-email">{content.contact.email}</p></section>

      <footer className="footer">
        <a className="brand" href="#top"><img src="/logo-skalean-mark.png" alt="" aria-hidden="true" className="brand-img brand-img-footer" /><span>SKALEAN</span></a>
        <p>{content.footer.description}</p>
        <div className="footer-links">
          <Link href={locale === 'fr' ? '/mentions-legales' : '/en/legal-notice'}>{content.footer.legalNotice}</Link>
          <Link href={locale === 'fr' ? '/confidentialite' : '/en/privacy-policy'}>{content.footer.privacyPolicy}</Link>
        </div>
        <small>{content.footer.copyright}</small>
      </footer>
    </main>
  )
}

type Visuals = SiteContent['products']['visuals']

function ChabLayerVisual({ v }: { v: Visuals['chablayer'] }) {
  return (
    <div className="visual-body" aria-hidden="true">
      <div className="visual-card">
        <span className="visual-label">{v.inputLabel}</span>
        <p>{v.inputBefore}<mark className="visual-sensitive">{v.name}</mark>{v.inputMiddle}<mark className="visual-sensitive">{v.iban}</mark></p>
      </div>
      <div className="visual-filter">
        <span className="visual-filter-line" />
        <span className="visual-filter-badge"><img src={productMarkSrcs[0]} alt="" />{v.filterLabel}</span>
        <span className="visual-filter-line" />
      </div>
      <div className="visual-card visual-card-safe">
        <span className="visual-label">{v.outputLabel}</span>
        <p>{v.inputBefore}<span className="visual-token">{v.nameToken}</span>{v.inputMiddle}<span className="visual-token">{v.ibanToken}</span></p>
      </div>
      <span className="visual-stat"><span className="proof-dot" />{v.stat}</span>
    </div>
  )
}

function PowerCockpitVisual({ v }: { v: Visuals['powercockpit'] }) {
  return (
    <div className="visual-body" aria-hidden="true">
      <div className="visual-search">
        <Search />
        <span className="visual-search-query">{v.query}</span>
        <span className="visual-search-caret" />
        <kbd className="visual-search-hint">{v.shortcut}</kbd>
      </div>
      <div className="visual-chips">
        {v.categories.map((cat, i) => <span key={cat} className={i === v.activeCategory ? 'visual-chip active' : 'visual-chip'}>{cat}</span>)}
      </div>
      <div className="visual-card visual-reports">
        {v.reports.map((r) => (
          <div className="visual-report" key={r.name}>
            <span className="visual-report-icon"><BarChart3 /></span>
            <span className="visual-report-text"><strong>{r.name}</strong><small>{r.meta}</small></span>
            <Star className={r.favorite ? 'visual-star active' : 'visual-star'} />
          </div>
        ))}
      </div>
      <span className="visual-stat"><span className="proof-dot" />{v.stat}</span>
    </div>
  )
}
