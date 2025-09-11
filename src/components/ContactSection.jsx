import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ContactSection = () => {
    const circleRef = useRef(null);
    const sectionRef = useRef(null);
    const initialTextRef = useRef(null);
    const finalTextRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Kill any previous trigger for safety
        const old = ScrollTrigger.getById("contact-pin");
        if (old) old.kill(true);

        // Initial states
        gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" });
        gsap.set(initialTextRef.current, { opacity: 1 });
        gsap.set(finalTextRef.current, { opacity: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                id: "contact-pin",
                trigger: sectionRef.current,
                start: "top top",
                // use a fixed, reachable distance so it ALWAYS unpins
                end: () => "+=" + Math.round(window.innerHeight * 1.2),
                pin: true,
                pinSpacing: true,
                scrub: 0.5,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                // helpful if anything resizes
                onRefresh: () => ScrollTrigger.update(),
            },
        });

        tl.to(circleRef.current, {
            scale: 5,
            backgroundColor: "#9333EA",
            ease: "power1.inOut",
            duration: 0.5,
        }, 0)
            .to(initialTextRef.current, {
                opacity: 0,
                ease: "power1.out",
                duration: 0.2,
            }, 0.1)
            .to(circleRef.current, {
                scale: 17, // keep your big zoom
                backgroundColor: "#E9D5FF",
                boxShadow: "0 0 50px 20px rgba(233,213,255,0.3)",
                ease: "power2.inOut",
                duration: 0.5,
            }, 0.5)
            .to(finalTextRef.current, {
                opacity: 1,
                ease: "power2.in",
                duration: 0.2,
            }, 0.7);

        return () => {
            const st = ScrollTrigger.getById("contact-pin");
            if (st) st.kill(true);
        };
    }, []);

    return (
        <section
        id="contact"
            ref={sectionRef}
            // real height + clip overflow so giant circle can't cover later sections
            className="relative flex items-center justify-center bg-black min-h-screen overflow-hidden"
            style={{ overscrollBehavior: "none" }}
        >
            <div
                ref={circleRef}
                className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full flex items-center justify-center relative transition-shadow duration-1000 shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
            >
                {/* Initial text stays centered inside the circle while zooming */}
                <p
                    ref={initialTextRef}
                    className="absolute inset-0 flex items-center justify-center text-center text-black font-bold text-base sm:text-lg md:text-xl"
                >
                    SCROLL DOWN
                </p>

                {/* Final text: NO absolute here → contributes to layout of the circle content */}
                <div
                    ref={finalTextRef}
                    className="flex flex-col items-center justify-center text-center opacity-0"
                >
                    <h1 className='text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.07] md:font-bold text-sm sm:text-base leading-none mb-5'>
                        Step Into the Future with Ahmad Shahid
                    </h1>
                    <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068] text-sm lg:text-xs">
                        Front-End Developer specialized in crafting modern, responsive web interfaces using React, Tailwind CSS and advanced UI animation techniques. Focused on clean code and pixel-perfect design that stands out.
                    </p>
                    <button className='px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap'
                    onClick={() => window.openContactForm()}>
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
