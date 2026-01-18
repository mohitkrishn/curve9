/* eslint-disable no-unused-vars */
import background from "../assets/smudge-run-2.PNG"
import { motion } from "motion/react"

const Home = () => {

    //spread button shadow effect using framer variants
    const buttonVariants = {
        initial: {
            boxShadow: '0px 6px 12px #fff',
        },
        hover: {
            boxShadow: '0px 10px 205px #f6f6f6',
        },
        tap: {
            boxShadow: '0px 10px 205px #f6f6f6',
        }
    };

    return (
        <section
            className="w-full h-screen bg-cover bg-center z-30 flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div
                className="heading w-full h-max px-4 flex items-center justify-center"
            >
                <h1
                    className="text-[clamp(2.85rem,10vw,7.5rem)] leading-[clamp(2.75rem,10vw,7rem)] text-white font-bold text-center tracking-wide text-shadow-xs text-shadow-zinc-900"
                    style={{ fontFamily: 'BBH Bogle' }}
                >
                    REDEFINE YOUR EFFECIENCY,
                    <br />
                    SHAPE YOUR BODY
                </h1>
            </div>

            <div
                className="w-full px-4 flex items-center-safe justify-center-safe"
            >
                <p
                    className="max-w-137.5 text-[clamp(1.25rem,3.5vw,1.65rem)] leading-[clamp(1.25rem,3.5vw,1.65rem)] text-white text-center mt-6 font-['Ranga']"
                >
                    Your body is most precious thing you have, keep it healthy and fit with the best and most effective guidance from our expert trainers in the entire town. Do join us and start your fitness journey today.
                </p>
            </div>

            <div
                className="w-full pt-15 flex items-center-safe justify-center-safe"
            >
                <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ type: "linear", stiffness: 300 }}
                    className="px-12 py-1 bg-white text-zinc-900 rounded-full font-['Ranga'] text-[clamp(1.45rem,5vw,1.7rem)] cursor-pointer"
                >
                    Join the arena
                </motion.button>
            </div>

        </section>
    )
}

export default Home