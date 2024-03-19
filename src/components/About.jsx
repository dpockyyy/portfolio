import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { services } from "../constants"

const ServiceCard = ({ index, title, icon }) => {
    return (
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
          <div
            option={{
                max: 45,
                scale: 1,
                speed: 450,
            }}
            className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
            <h3 className="text-taupe text-[18px] font-bold text-center">
              {title}
            </h3>

          </div>

        </motion.div>
    )
}

const About = () => {
    return (
        <div className="-mt-[4rem]">
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Introduction</p>
              <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
              variants={fadeIn('', '', 0.1, 1)}
              className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
              Sydney based software developer who is eager to leverage my skills and passion for programming to explore how technology can be used to benefit society. 
              My experiences as a professional poker player have helped me to develop a deeply analytical mindset, strong work ethic and emotional resilience. I’m a highly motivated individual with a willingness to continuously learn new skills and am actively looking for any opportunities that will enable me to expand on my skill set. 
            </motion.p>

            <div className="mt-20 flex flex-row gap-10 justify-evenly">
                {services.map((service, index) => (
                  <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </div>
    )
}

export default SectionWrapper(About, 'about')