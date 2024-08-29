import React from "react";
import Benefits from "@/components/LandingPage/Sections/Benefits/Benefits";
import Header from "@/components/LandingPage/Sections/Header/Header";
import Testimonials from "@/components/LandingPage/Sections/Testimonials/Testimonials";
import Projects from "@/components/LandingPage/Sections/Projects/Projects";
import Solution from "@/components/LandingPage/Sections/Solution/Solution";
import HowItWorks from "@/components/LandingPage/Sections/HowItWorks/HowItWorks";
import Footer from "@/components/LandingPage/Footer/Footer";
import Script from "next/script";

const index = () => {
  return (
    <main>
      <Header />
      <Script
        src="https://app.10xlaunch.ai/widget"
        data-app-id="519bf231-fe1b-46db-9a63-3d99639d6ed0"
        async
        defer
      />
      {/* <Benefits /> */}
      {/* <Testimonials />
			<Projects />
			<Solution />
			<HowItWorks />
			<Footer /> */}
    </main>
  );
};

export default index;

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function CardScrollEffect() {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

//   useEffect(() => {
//     if (containerRef.current) {
//       ScrollTrigger.create({
//         trigger: containerRef.current,
//         start: "top top", // Start when the container hits the top of the viewport
//         end: "+=200vh", // End after scrolling through 200vh
//         scrub: true,
//         onUpdate: (self) => {
//           const scrollPosition = self.progress * 100; // Get scroll progress as a percentage of the total scroll area (200vh)

//           cardRefs.current.forEach((card, index) => {
//             if (card) {
//               const cardStart = index * 33.33; // Each card changes color in its respective third of the scroll
//               const cardEnd = cardStart + 33.33;

//               if (scrollPosition >= cardStart && scrollPosition < cardEnd) {
//                 card.style.backgroundColor = "red";
//               } else {
//                 card.style.backgroundColor = "blue";
//               }
//             }
//           });
//         },
//       });
//     }

//     // Cleanup on unmount
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTrigger instances on unmount
//     };
//   }, []);

//   return (
//     <div>
//       <div style={{ height: "50vh", backgroundColor: "lightgray" }}>
//         {/* Content above the main container */}
//       </div>

//       <div
//         ref={containerRef}
//         className="container"
//         style={{ height: "200vh", position: "relative" }}
//       >
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "space-around",
//             position: "sticky",
//             top: 0,
//             height: "100vh",
//           }}
//         >
//           {[1, 2, 3].map((_, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardRefs.current[index] = el)}
//               className="card"
//               style={{
//                 width: "30%",
//                 height: "100%",
//                 backgroundColor: index === 0 ? "red" : "blue",
//               }}
//             >
//               Card {index + 1}
//             </div>
//           ))}
//         </div>
//       </div>

//       <div style={{ height: "50vh", backgroundColor: "lightgray" }}>
//         {/* Content below the main container */}
//       </div>
//     </div>
//   );
// }
