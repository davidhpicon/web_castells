import Hero from '../components/Hero/Hero'
import CTACards from '../components/CTACards/CTACards'
import LazySection from '../components/LazySection'
import NewsSection from '../components/NewsSection/NewsSection'
import JoinSection from '../components/JoinSection/JoinSection'

export default function Home() {
  return (
    <>
      <Hero />
      <CTACards />
      <LazySection minHeight={480}>
        <NewsSection limit={3} />
      </LazySection>
      <LazySection minHeight={420}>
        <JoinSection />
      </LazySection>
    </>
  )
}
