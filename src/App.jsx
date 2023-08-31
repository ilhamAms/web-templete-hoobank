import styles from "./style"
import {Navbar, Hero, Stats, Business, Billing, CardDeal, Clients,Footer, Tesmonials, CTA } from './components/index'
import './index.css'
import './App.css'
function App() {
 return (
  <>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} page`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Tesmonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
       </div>
    </div>
  </>
  )
}

export default App
