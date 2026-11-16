import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { LanguageSwitch } from '@/components/language-switch'

export const metadata: Metadata = {
  title: 'Legal notice — Skalean',
}

export default function LegalNotice() {
  return (
    <main lang="en" style={{ background: 'var(--ivory)', minHeight: '100vh', color: 'var(--anthracite)', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <header style={{ height: 76, display: 'flex', alignItems: 'center', padding: '0 clamp(22px,7vw,110px)', borderBottom: '1px solid rgba(38,34,31,.1)', background: 'rgba(247,245,242,.86)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0 }}>
        <Link href="/en" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--graphite)', textDecoration: 'none' }}>
          <ArrowLeft size={16} />
          Back
        </Link>
        <LanguageSwitch href="/mentions-legales" language="fr" />
        <span style={{ marginLeft: 'auto', fontSize: 20, fontWeight: 800, letterSpacing: '.19em' }}>SKALEAN</span>
      </header>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(52px,8vw,100px) clamp(22px,5vw,0px)' }}>
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.23em', color: 'var(--copper)', marginBottom: 20 }}>LEGAL INFORMATION</p>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 400, letterSpacing: '-.05em', lineHeight: 1.02, marginBottom: 52 }}>Legal notice</h1>

        <Section title="Website publisher">
          <p>This website is published by <strong>Skalean</strong>, a French simplified joint-stock company (SAS) with share capital of 100 euros.</p>
          <Row label="Registered office" value="4 avenue des Ternes, 75017 Paris" />
          <Row label="SIRET" value="999 243 520 00015" />
          <Row label="Trade and Companies Register" value="Paris 999 243 520" />
          <Row label="Publication director" value="Karim Chaabouni" />
          <Row label="Contact" value="contact@skalean.fr" />
        </Section>

        <Section title="Hosting">
          <p>The website is hosted by:</p>
          <Row label="Hosting provider" value="Ionos" />
          <Row label="Address" value="7 Place de la Gare, 57200 Sarreguemines, France" />
          <Row label="Website" value="ionos.com" />
        </Section>

        <Section title="Intellectual property">
          <p>All content on this website (texts, images, graphics, logo, icons, sounds, software, etc.) is the exclusive property of Skalean or its partners. Any reproduction, distribution, modification, adaptation, retransmission or publication of these items is strictly prohibited without Skalean’s express written consent.</p>
        </Section>

        <Section title="Liability">
          <p>Skalean endeavours to ensure that the information published on this website is accurate and up to date. However, Skalean cannot guarantee that the information is exhaustive or accurate and accepts no liability for damage resulting from fraudulent intrusion by a third party that leads to changes to the information made available on the website.</p>
        </Section>

        <Section title="Hyperlinks">
          <p>Skalean cannot be held liable for hyperlinks on this website that direct users to other resources available on the internet.</p>
        </Section>

        <Section title="Applicable law">
          <p>This legal notice is governed by French law. In the event of a dispute, the French courts shall have exclusive jurisdiction.</p>
          <p>For any questions, contact us at: <a href="mailto:contact@skalean.fr" style={{ color: 'var(--copper)' }}>contact@skalean.fr</a></p>
        </Section>
      </div>

      <footer style={{ background: 'var(--anthracite)', color: 'var(--greige)', padding: '28px clamp(22px,7vw,110px)', fontSize: 12, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <span>© 2026 Skalean. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 22 }}>
          <Link href="/en/legal-notice" style={{ color: 'var(--greige)', textDecoration: 'none' }}>Legal notice</Link>
          <Link href="/en/privacy-policy" style={{ color: 'var(--greige)', textDecoration: 'none' }}>Privacy policy</Link>
          <Link href="/en" style={{ color: 'var(--greige)', textDecoration: 'none' }}>Home</Link>
        </div>
      </footer>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ borderTop: '1px solid var(--line)', paddingTop: 32, marginBottom: 40 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-.02em', marginBottom: 18 }}>{title}</h2>
      <div style={{ color: 'var(--taupe)', fontSize: 16, lineHeight: 1.7 }}>{children}</div>
    </section>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <p style={{ margin: '6px 0' }}>
      <strong style={{ color: 'var(--anthracite)', fontWeight: 600 }}>{label}:</strong> {value}
    </p>
  )
}
