import {useRef , useEffect} from 'react'
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const AboutSection = () => {
    const sectionRef = useRef(null)
    const titleRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        //title animation

        gsap.fromTo(
            titleRef.current,
            {y:100, opacity:0},
            {y:-300,
             opacity:1,
             duration:0.8,
             scrollTrigger:{
                trigger: sectionRef.current,
                start: "top 40%",
                toggleActions: "play none none reverse",
             }   
            }
        )
    })
  return (
    <section ref={sectionRef} className='h-screen relative overflow-auto bg-gradient-to-b from-black to-[#9a74cf50]'>
        <div className='container mx-auto px-4 h-full flex flex-col items-center justify-center'>
            <h1 ref={titleRef} className='text-4xl md:text-6xl font-bold sm:mb-16 text-center text-white opacity-0'>
                About Me
            </h1>
        </div>
        <div>
            <h3 className='text-sm md:text-2xl font-bold text-purple-200 z-50  lg:max-w-[45rem] max-w-[27rem] tracking-wider md:mt-20 sm:mt-[-40rem] mt-[-32rem]'>
                Hi, I'm Ahmad Shahid, a Frontend Developr focused on speed, polish, and performance. I craft responsive, user-friendly web interfaces using modern tools like React, Tailwind CSS and JavaScript. Whether it's a landing page, a full-scale web app, or something in between. I'm all about clean code, fast delivery and seamless user experiences.
            </h3>
            <img className='lg:h-[40rem] md:h-[25rem] h-[20rem] mix-blend-lighten ' src="images/person.png" alt="Profile-img" />
        </div>
    </section>
  )
}

export default AboutSection;
