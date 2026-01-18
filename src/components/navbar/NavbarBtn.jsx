/* eslint-disable no-unused-vars */
import { motion } from "motion/react"

const NavbarBtn = ({ children }) => {
  return (
    <motion.button
      whileHover={{ letterSpacing: '1.5px' }}
      transition={{ duration: 0.5, ease: "anticipate" }}
      className="mt-1.5 text-white text-[1.4rem] font-normal cursor-pointer font-['Ranga'] leading-[1.4rem]"
    >
      {children}
    </motion.button>
  )
}

export default NavbarBtn