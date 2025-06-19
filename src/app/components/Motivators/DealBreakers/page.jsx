'use client';

import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Motivators_Deal_Breakers from "./motivators_deal_breakers";

const MotionDiv = motion.div;

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { threshold: 0, once: true });

    return (
        <div className="min-h-screen bg-blue-500" ref={ref}>
            <div className="pt-10 pb-6 px-6">
                <h1 
                    className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 py-5 ml-6 text-5xl text-white font-bold"
                    id="Motivators_Deal_Breakers"
                >
                    Motivators & Dealbreakers
                </h1>
            </div>
            <AnimatePresence>
                {isInView && (
                    <MotionDiv
                        className="w-4/5 mx-auto my-6"
                        initial={{ opacity: 0 }}
                        animate={{
                            scale: [0, 0.25, 0.5, 0.75, 1],
                            opacity: [0, 0.25, 0.5, 0.75, 1],
                        }}
                        transition={{ 
                            duration: 2.0,
                            ease: "linear"
                        }}
                    >
                        <Motivators_Deal_Breakers />
                    </MotionDiv>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
