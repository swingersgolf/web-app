import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Ticker from "~/components/Ticker";
import HeroAnimation from "~/components/assets/HeroAnimation";
import GolfIllustration from "~/components/assets/GolfIllustration";
import DownloadButtons from "~/components/DownloadButtons";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Swingers | Golf Matching Platform" },
    { name: "description", content: "Welcome to Swingers!" },
  ];
};

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center px-4 md:px-40 gap-y-4 pt-16"> 
        <h1 className="title">The golf matchmaking platform to fill your foursome</h1>
        <h2 className="subtitle">Unparalled enjoyment on the outings that matter most</h2>
      </div>
      <DownloadButtons className="flex flex-row items-center justify-center gap-x-4 py-12"/>
      <HeroAnimation />
    </section>
  )
}

const Sponsor = () => {
  const Sponsors = [
    {
      name: "Titleist",
      logo: "/images/sponsors/titleist.png",
      url: "https://www.titleist.com/"
    },
    {
      name: "Callaway",
      logo: "/images/sponsors/callaway.png",
      url: "https://www.callawaygolf.com/"
    },
    {
      name: "TaylorMade",
      logo: "/images/sponsors/taylormade.png",
      url: "https://www.taylormadegolf.com/"
    },
    {
      name: "Ping",
      logo: "/images/sponsors/ping.png",
      url: "https://ping.com/"
    },
    {
      name: "Cobra",
      logo: "/images/sponsors/cobra.webp",
      url: "https://www.cobragolf.com/"
    },
    {
      name: "Mizuno",
      logo: "/images/sponsors/mizuno.png",
      url: "https://us.mizuno.com/"
    },
    {
      name: "Srixon",
      logo: "/images/sponsors/srixon.jpg",
      url: "https://www.srixon.com/"
    },
    {
      name: "Bridgestone",
      logo: "/images/sponsors/bridgestone.png",
      url: "https://www.bridgestonegolf.com/"
    }
  ];  
  
  return (
    <section>
      <Ticker>
        {Sponsors.map((sponsor) => (
          <li key={sponsor.name}>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex items-center justify-center">
                <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                />
            </div>
          </li>
        ))}
      </Ticker>
    </section>
  )
}

const KeyFeatures = () => {
  const KeyFeatures = [
    {
      title: "Set your preferences",
      description:
        "Personalize your golfing experience by setting your preferences for things like skill level, availability, and course types. The app matches you with like-minded players based on your preferences. This helps ensure you always find the best partners to enjoy a round with, tailored to your style.",
      mockup: "/images/mockups/set-preferences.png",
    },
    {
      title: "Find preferred rounds",
      description:
        "Discover golfing rounds that match your skill level and preferred time slots. You can filter and browse through available tee times, ensuring a seamless and convenient experience. Whether you’re looking for a quick round or a more competitive game, you’ll always find something that suits you.",
      mockup: "/images/mockups/view-rounds.png",
    },
    {
      title: "Enjoy more golf",
      description:
        "Keep track of your scores and performance over time to measure your progress and challenge yourself. The app offers tools to help you record and review your rounds, so you can focus on improving. This feature encourages a deeper connection with the sport, ensuring you enjoy more golf and reach new milestones.",
      mockup: "/images/mockups/enjoy-golf.png",
    },
  ];

  // Track which feature is currently in view
  const [visibleIndex, setVisibleIndex] = useState<number>(-1);

  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Left: Key Features Content */}
        <div>
          {KeyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              id={`key-feature-${index}`}
              className="min-h-screen flex flex-col justify-center gap-y-4"
              viewport={{
                once: false,
                amount: 0.6,
              }}
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5 },
              }}
              onViewportEnter={() => setVisibleIndex(index)}
              onViewportLeave={() => setVisibleIndex(-1)}
            >
              <h3 className="text-4xl font-semibold">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Right: Mockups */}
        <div className="sticky top-0 h-screen flex items-center justify-center w-full bg-background-secondary rounded-2xl overflow-hidden">
          {KeyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`absolute w-full h-full flex items-center justify-center ${
                visibleIndex === index ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: visibleIndex === index ? 1 : 0,
                scale: visibleIndex === index ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={feature.mockup}
                alt={feature.title}
                className="max-w-full max-h-full rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CallToAction = () => {
  return (
    <section>
      <div className="rounded-2xl w-full flex flex-row items-center cta-gradient-background p-16">
        <div>
          <h3 className="text-3xl font-accent font-semibold">Join other golfers who are having more enjoyable golfing experiences</h3>
          <DownloadButtons className="flex flex-row gap-x-4 py-12"/>
        </div>
        <div className="flex-grow flex justify-center">
          <GolfIllustration />
        </div>
      </div>
    </section>
  )
}

export default function Index() {
  return (
    <>
    <Header/>
    <main className="min-h-screen">
      <Hero />
      <Sponsor />
      <KeyFeatures />
      <CallToAction />
    </main>
    <Footer/>
    </>
  );
}
