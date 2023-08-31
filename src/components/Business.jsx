import styles, { layout } from "../style"
import { features } from "../constant"
import Buttons from './Buttons'

import FeatureCard from "./FeatureCard"

const Business = () => {
  return (
      <section id="features" className={layout.section}  >
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the business, <br className="hidden sm:block" /> We'll handle the money.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-justify `}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt suscipit exercitationem qui incidunt, modi consequatur voluptatem deleniti recusandae expedita excepturi.
          </p>

          <Buttons />
        </div>

          <div className={`${layout.sectionImg} flex-col`}>
            {
              features.map((feature, index) => {
                return( 
                    <FeatureCard key={feature.id} {...feature} index={index} />
                )
              })
            }
          </div>
      </section>
  )
}

export default Business