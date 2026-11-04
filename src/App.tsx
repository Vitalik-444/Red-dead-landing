import { MotionConfig } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Story from './sections/Story'
import Characters from './sections/Characters'
import Frontier from './sections/Frontier'
import Gang from './sections/Gang'
import Journal from './sections/Journal'
import GallerySection from './sections/GallerySection'
import Closing from './sections/Closing'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <Story />
        <Characters />
        <Frontier />
        <Gang />
        <Journal />
        <GallerySection />
        <Closing />
      </main>
      <Footer />
    </MotionConfig>
  )
}
