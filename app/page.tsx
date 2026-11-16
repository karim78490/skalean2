import { SitePage } from '@/components/site-page'
import content from '@/content/site-content.json'

export default function HomePage() {
  return <SitePage content={content} locale="fr" />
}
