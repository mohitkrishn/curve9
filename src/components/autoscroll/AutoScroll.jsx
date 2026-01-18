/* eslint-disable no-unused-vars */
import { motion, useAnimationFrame, useMotionValue } from "motion/react"
import { useRef } from "react";

let SPEED = 80; // pixels per second

const AutoScroll = ({ items }) => {
    const x = useMotionValue(0);
    const contRef = useRef(null);

    useAnimationFrame((t, delta) => {
        const moveBy = (SPEED * delta) / 1000;
        x.set(x.get() - moveBy);

        const containerWidth = contRef.current.scrollWidth / 2;

        if (Math.abs(x.get()) >= containerWidth) {
            x.set(0);
        }
    });

    return (
        <div className="w-full px-6 py-4 bg-zinc-900 overflow-hidden">
            <motion.div
                ref={contRef}
                style={{ x }}
                className="flex gap-6 w-max"
                drag="x"
                dragConstraints={contRef}
                dragElastic={0.0001}
            >

                {[...items, ...items].map((item, i) => (
                    <div
                        key={i}
                        className="min-w-50 text-[clamp(1.5rem,3vw,2rem)] text-white flex items-center justify-center"
                        style={{
                            fontFamily: "Fugaz One",
                        }}
                    >
                        |&nbsp;{item}&nbsp;|
                    </div>
                ))}

            </motion.div>
        </div>
    )
}

export default AutoScroll