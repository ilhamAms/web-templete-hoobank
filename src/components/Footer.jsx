import styles from "../style"
import { logo } from "../assets"
import Navbar from "./Navbar"
import { footerLinks, socialMedia } from "../constant"

const Footer = () =>(
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-1 flex flex-col justify-start mr-q0">
      <img src={logo} alt="logo" className="w-[266px] object-contain"/>
      <p className={`${styles.paragraph} max-w-[310px] mt-4`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, unde.</p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt0 mt-10">
        {
          footerLinks.map((footerLink)=>{
            return (
              <div key={footerLink.links} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                  <h4 className='font-medium text-[18px] leading-[27px] text-white'>{footerLink.title}</h4>
                  <ul className="mt-4"> 
                    {
                      footerLink.links.map((link, i) => {
                        return (
                          <li key={link.name}  className={`font-normal text-dimwhite text-[16px] laeading-[26px] hover:text-secondary cursor-pointer
                          ${i !== footerLink.links.length - 1 ?'mb-4' : 'mb-0'}
                          
                          `}>
                            {link.name}                          </li>
                        )
                      })
                    }
                  </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  </section>

)

export default Footer