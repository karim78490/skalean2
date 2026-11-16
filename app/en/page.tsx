import { SitePage } from '@/components/site-page'
import content from '@/content/site-content.en.json'

export const metadata = {
  title: 'Skalean — Data sovereignty, AI performance',
  description: 'Skalean turns AI complexity into reliable, governed and actionable decisions.',
}

export default function EnglishHomePage() {
  return <SitePage content={content} locale="en" />
}
