/* eslint-disable no-unused-vars */
import { Menu, X } from "lucide-react"
import brandlogo from "../../assets/curve9logo.png"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import NavbarBtn from "./NavbarBtn"

// MenuBtn Component for menu reference
const MenuBtn = ({ children, delay, ...props }) => {
    return <motion.div
        className={props.className}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: delay, duration: 0.3 }}
    >
        {children}
    </motion.div>
}

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleMobileMenu = () => {
        setIsOpen(!isOpen);
    }

    const navVariants = {
        open: {
            width: '300px',
            height: 'auto',
            borderRadius: '25px',
            backgroundColor: 'rgb(24 24 27)',

            transition: {
                duration: 0.8,
                ease: 'easeInOut',
            }
        },

        closed: {
            height: '45px',
            width: '235px',
            borderRadius: '50px',

            transition: {
                duration: 0.6,
                ease: 'easeInOut',
            }
        }
    }

    // close the menu on outside click

    const menuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside, true);
        }
        else {
            document.removeEventListener('click', handleClickOutside, true);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };

    }, [isOpen])

    return (
        <nav
            className="w-full fixed top-0 left-0 z-40 flex items-center justify-center py-6 px-8"
        >
            {/* animated navbar for smaller screens */}
            <motion.div
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                variants={navVariants}
                style={{ willChange: "transform, width, height, border-radius, background-color" }}
                className="w-full px-4 bg-zinc-900/50 backdrop-blur-md rounded-full flex flex-col items-center justify-between md:hidden"
            >
                <div
                    className="logo-icon w-full flex items-center-safe justify-between"
                >
                    {/* brand logo */}
                    <div
                        className="max-w-1/2 h-full p-1 flex items-center justify-center"
                    >
                        <img
                            src={brandlogo}
                            alt="logo"
                            className="w-full h-full object-cover object-center invert"
                        />
                    </div>

                    {/* mobile menu icon */}
                    <div
                        ref={menuRef}
                        onClick={handleMobileMenu}
                    >
                        {
                            !isOpen ? (
                                <Menu
                                    size={22}
                                    color="white"
                                />
                            ) : (
                                <X
                                    size={25}
                                    color="white"
                                />
                            )
                        }
                    </div>
                </div>

                {/* mobile menu references (only open when menu is open) */}
                <AnimatePresence>
                    {
                        isOpen && <motion.div
                            className='w-full pt-4 pb-2 flex flex-col gap-2.5 items-center justify-center'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ xHeight: 0, opacity: 0 }}
                            transition={{ delay: 0.1, duration: 0.2 }}
                        >
                            <MenuBtn
                                delay={0.35}
                                className={`py-1`}
                            >
                                <button className="text-[1.65rem] text-white font-semibold font-['Ranga']">Home</button>

                            </MenuBtn>
                            <MenuBtn
                                delay={0.40}
                                className={`py-1`}
                            >
                                <button className="text-[1.65rem] text-white font-semibold font-['Ranga']">Home</button>

                            </MenuBtn>
                            <MenuBtn
                                delay={0.45}
                                className={`py-1`}
                            >
                                <button className="text-[1.65rem] text-white font-semibold font-['Ranga']">Home</button>

                            </MenuBtn>
                            <MenuBtn
                                delay={0.60}
                                className={`w-full py-1`}
                            >
                                <button className="w-full py-2 text-[1.65rem] leading-[1.65rem] text-zinc-900 font-semibold font-['Ranga'] bg-white rounded-full">Join the arena</button>

                            </MenuBtn>

                        </motion.div>
                    }
                </AnimatePresence>

            </motion.div>

            {/* animated navbar for larger screens min. 768px */}
            <motion.div
                className="hidden min-w-lg h-13 px-4 bg-zinc-600/20 border border-zinc-600/10 backdrop-blur-md rounded-full md:flex items-center-safe gap-10"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
                <div
                    className="logo max-w-1/2 h-full p-1 flex items-center justify-center"
                >
                    <img
                        src={brandlogo}
                        alt="logo"
                        className="w-full h-full object-cover object-center invert"
                    />
                </div>

                {/* sections reference */}
                <div
                    className="flex items-center gap-12"
                >
                    <NavbarBtn>
                        Home
                    </NavbarBtn>
                    <NavbarBtn>
                        Home
                    </NavbarBtn>
                    <NavbarBtn>
                        Home
                    </NavbarBtn>

                    <button
                        className="px-6 py-2 bg-white text-black text-[1.25rem] leading-5 rounded-full font-['Ranga'] cursor-pointer"
                    >
                        Join the arena
                    </button>
                </div>

            </motion.div>
        </nav>
    )
}

export default Navbar