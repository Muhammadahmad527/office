import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const HeroSection = () => {
    return (
        <section id='home' className='h-screen bg-gradient-to-b from-purple-950 to-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative overflow-hidden'>
            {/* left section */}
            <div className='z-40 xl:mb-0 mb-[20%]'>
                <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.3,
                        duration: 1.5,
                    }}
                    className='text-3xl md:text-4xl lg:text-5xl font-bold z-10 mb-6'>
                    Building Fast <br /> Reliable Results
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 40,
                        damping: 25,
                        delay: 1.8,
                        duration: 1.5,
                    }}
                    className='text-base md:text-lg lg:text-xl text-purple-200 max-w-2xl'>
                    I deliver robust, Production-ready websites with speed and precision. Every project is backed by clean code, clear communication, and a commitment to getting it done, on time, everytime.
                </motion.p>
            </div>

            {/* right section */}
            <Spline className='absolute xl:right-[-24%] right-8 top-[-10%] lg:top-0' scene="https://prod.spline.design/WDabHRzWN8O1gY3A/scene.splinecode" />

        </section>
    )
}

export default HeroSection