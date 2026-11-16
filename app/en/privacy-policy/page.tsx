import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { LanguageSwitch } from '@/components/language-switch'

export const metadata: Metadata = {
  title: 'Privacy policy — Skalean',
}

export default function PrivacyPolicy() {
  return (
    <main lang="en" style={{ background: 'var(--ivory)', minHeight: '100vh', color: 'var(--anthracite)', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <header style={{ height: 76, display: 'flex', alignItems: 'center', padding: '0 clamp(22px,7vw,110px)', borderBottom: '1px solid rgba(38,34,31,.1)', background: 'rgba(247,245,242,.86)', backdropFilter: 'blur(16px)', position: 'sticky', top: 0 }}>
        <Link href="/en" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, color: 'var(--graphite)', textDecoration: 'none' }}>
          <ArrowLeft size={16} />
          Back
        </Link>
        <LanguageSwitch href="/confidentialite" language="fr" />
        <span style={{ marginLeft: 'auto', fontSize: 20, fontWeight: 800, letterSpacing: '.19em' }}>SKALEAN</span>
      </header>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(52px,8vw,100px) clamp(22px,5vw,0px)' }}>
        <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.23em', color: 'var(--copper)', marginBottom: 20 }}>GDPR &amp; PERSONAL DATA</p>
        <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 400, letterSpacing: '-.05em', lineHeight: 1.02, marginBottom: 16 }}>Privacy policy</h1>
        <p style={{ color: 'var(--taupe)', fontSize: 14, marginBottom: 52 }}>Last updated: November 2026</p>

        <Section title="Data controller">
          <p>The controller responsible for processing personal data collected through this website is:</p>
          <Row label="Company" value="Skalean SAS" />
          <Row label="Address" value="4 avenue des Ternes, 75017 Paris" />
          <Row label="Contact" value="contact@skalean.fr" />
        </Section>

        <Section title="Data collected">
          <p>When you use the website and our contact forms, Skalean may collect the following information:</p>
          <ul>
            <li>First and last name</li>
            <li>Business email address</li>
            <li>Company name</li>
            <li>Browsing data (pages visited, session duration) through anonymised analytics tools</li>
          </ul>
          <p>No special categories of personal data within the meaning of Article 9 GDPR are collected.</p>
        </Section>

        <Section title="Purposes and legal bases">
          <p>Personal data is collected for the following purposes:</p>
          <ul>
            <li><strong>Responding to your enquiries</strong> — legal basis: taking steps at your request prior to entering into a contract (Article 6(1)(b) GDPR)</li>
            <li><strong>Improving our services and website</strong> — legal basis: legitimate interests (Article 6(1)(f) GDPR)</li>
            <li><strong>Sending marketing communications</strong> — legal basis: prior consent (Article 6(1)(a) GDPR)</li>
          </ul>
        </Section>

        <Section title="Data retention">
          <p>Data is retained only for as long as necessary for the purposes for which it was collected:</p>
          <ul>
            <li>Contact data: 3 years from the last contact</li>
            <li>Browsing data: no more than 13 months (in line with CNIL recommendations)</li>
          </ul>
        </Section>

        <Section title="Sharing data">
          <p>Skalean does not sell, rent or share your personal data with third parties for commercial purposes. Your data may be shared with technical service providers acting on Skalean’s behalf (hosting, audience measurement) in strict compliance with the GDPR and under data processing agreements.</p>
          <p>Messages sent through the contact form are delivered by the FormSubmit service (formsubmit.co), which forwards them to contact@skalean.fr.</p>
        </Section>

        <Section title="Transfers outside the EU">
          <p>Some of our technical service providers may process your data outside the European Union. In such cases, Skalean ensures that appropriate safeguards are in place (European Commission standard contractual clauses or an adequacy decision).</p>
        </Section>

        <Section title="Your rights">
          <p>Under the General Data Protection Regulation (GDPR) and the French Data Protection Act, you have the following rights:</p>
          <ul>
            <li><strong>Right of access</strong>: obtain a copy of your personal data</li>
            <li><strong>Right to rectification</strong>: correct inaccurate or incomplete data</li>
            <li><strong>Right to erasure</strong>: request deletion of your data</li>
            <li><strong>Right to restriction</strong>: temporarily restrict processing</li>
            <li><strong>Right to data portability</strong>: receive your data in a structured format</li>
            <li><strong>Right to object</strong>: object to processing based on legitimate interests</li>
            <li><strong>Right to withdraw consent</strong> at any time</li>
          </ul>
          <p>To exercise these rights, contact us at: <a href="mailto:contact@skalean.fr" style={{ color: 'var(--copper)' }}>contact@skalean.fr</a></p>
          <p>If your complaint remains unresolved, you may contact the <strong>CNIL</strong> (French Data Protection Authority): <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--copper)' }}>www.cnil.fr</a></p>
        </Section>

        <Section title="Cookies">
          <p>The website uses technical cookies required for its operation, as well as anonymised audience measurement tools. No advertising cookies are placed.</p>
          <p>You can configure your browser to refuse cookies at any time, without affecting your browsing experience.</p>
        </Section>

        <Section title="Changes to this policy">
          <p>Skalean reserves the right to amend this privacy policy at any time. The date of the latest update is shown at the beginning of this document. We encourage you to review it regularly.</p>
          <p>For any questions: <a href="mailto:contact@skalean.fr" style={{ color: 'var(--copper)' }}>contact@skalean.fr</a></p>
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
