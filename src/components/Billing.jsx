import styles, { layout } from "../style";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="bill" className="w-[100%] h-[100%] relative z-[5]" />
      {/* 
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" /> */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quo
        expedita ducimus? Beatae nam suscipit voluptatibus voluptate atque.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple" className="w-[128px] h-[42px]" />
        <img src={google} alt="apple" className="w-[128px] h-[42px] mr-5" />
      </div>
    </div>
  </section>
);

export default Billing;
