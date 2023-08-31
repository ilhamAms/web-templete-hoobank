import { feedback } from "../constant"
import styles from "../style"
import FeedbackCard from "./FeedbackCard"

const Tesmonials = () => (
  <section id="client" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      {/* TODO */}
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient" />

      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'> 
        <h1 className={styles.heading2}>What people are <br className="sm:block hidden" /> saying about us</h1>
        <div className="w-full mt-6 md:m-0">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti non aliquid esse sit eveniet enim, fugit temporibus id?
          </p>
        </div>
      </div>  

      <div className="flex flex-wrap  justify-center w-full feedback-container relative z-[1]">
        {
          feedback.map((card) => {
            return (
              <FeedbackCard key={card.id} {...card} />
            )
          })
        }
      </div>  

      
  </section>
)
export default Tesmonials