import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Ticker from "~/components/Ticker";
import HeroAnimation from "~/components/assets/HeroAnimation";
import GolfIllustration from "~/components/assets/GolfIllustration";
import DownloadButtons from "~/components/DownloadButtons";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import Icon from "~/components/assets/Icon";
import IconHeadSpin from "~/components/assets/animations/IconHeadSpin";
import RoundsScreen from "~/components/assets/screens/RoundsScreen";
import CreateRoundScreen from "~/components/assets/screens/CreateRoundScreen";
import SetPreferencesScreen from "~/components/assets/screens/SetPreferencesScreen";

export const meta: MetaFunction = () => {
  return [
    { title: "Swingers | Golf Matchmaking Platform" },
    { name: "description", content: "Welcome to Swingers!" },
  ];
};

const GroupSizeAnimation = () => {
  const groupSizes = ["two", "three", "four"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % groupSizes.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [groupSizes.length]);

  return (
    <div className="flex items-center justify-center mt-8">
      <h1 className="title">
        The golf matchmaking platform to fill your{" "}
        <AnimatePresence mode="wait">
          <motion.span
            key={groupSizes[currentIndex]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {groupSizes[currentIndex]}
          </motion.span>
        </AnimatePresence>
        some
      </h1>
    </div>
  );
};

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center text-center md:px-40 gap-y-4 pt-16">
        <GroupSizeAnimation />
        <h2 className="subtitle">Unparalleled enjoyment on the outings that matter most</h2>
      </div>
      <DownloadButtons className="flex flex-row items-center justify-center gap-x-4 py-12" />
      <HeroAnimation />
    </section>
  );
};


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
    <section className="py-0">
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
  const KeyFeatures = useMemo(() => [
    {
      title: "Set your preferences",
      description:
        "Personalize your golfing experience by setting your preferences for things like skill level, availability, and course types. The app matches you with like-minded players based on your preferences. This helps ensure you always find the best partners to enjoy a round with, tailored to your style.",
      mockup: <SetPreferencesScreen className="max-h-full max-w-full" />
    },
    {
      title: "Create perfect rounds",
      description:
        "Easily create and schedule rounds with your preferred partners and courses. The app helps you coordinate and plan your golfing outings, so you can focus on enjoying the game. You can create rounds for any occasion, whether it’s a casual game with friends or a competitive tournament.",
      mockup: <CreateRoundScreen className="max-h-full max-w-full" />
    },
    {
      title: "Find preferred rounds",
      description:
        "Discover golfing rounds that match your skill level and preferred time slots. You can filter and browse through available tee times, ensuring a seamless and convenient experience. Whether you’re looking for a quick round or a more competitive game, you’ll always find something that suits you.",
      mockup: <RoundsScreen className="max-h-full max-w-full" />
    },
    {
      title: "Enjoy more golf",
      description:
        "Keep track of your scores and performance over time to measure your progress and challenge yourself. The app offers tools to help you record and review your rounds, so you can focus on improving. This feature encourages a deeper connection with the sport, ensuring you enjoy more golf and reach new milestones.",
      mockup: <IconHeadSpin className="max-h-full max-w-full" />
    },
  ], []);
  
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    const observers: IntersectionObserver[] = [];

    KeyFeatures.forEach((_, index) => {
      const element = document.getElementById(`key-feature-${index}`);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveFeature(index);
            }
          },
          observerOptions
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [KeyFeatures]);
  
  return (
    <section className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        {/* Left: Key Features */}
        <div className="flex flex-col gap-y-16">
          {KeyFeatures.map((feature, index) => (
            <div
              key={index}
              id={`key-feature-${index}`}
              className="flex flex-col justify-center gap-y-8 md:gap-y-4"
            >
              {/* Mobile: Mockups */}
              <div
                id="key-feature-image"
                className="flex md:hidden w-full h-fit items-center justify-center rounded-2xl bg-background-secondary p-8"
              >
                {feature.mockup}
              </div>
              {/* Text */}
              <div
                id="key-feature-text"
                className="flex flex-col justify-center gap-y-2 md:h-screen"
              >
                <div className="flex flex-row items-center gap-x-2">
                  <Icon className="h-7 md:h-10 w-auto" />
                  <h3 className="text-2xl md:text-4xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-base md:text-lg">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Mockups */}
        <div className="hidden sticky top-0 h-screen md:flex items-center justify-center w-full bg-background-secondary rounded-2xl overflow-hidden">
          {KeyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: activeFeature === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              exit={{ 
                opacity: 0.5,
                transition: { duration: 1 }
              }}
              className={`absolute w-full h-full flex items-center justify-center p-16 ${
                activeFeature === index ? "block" : "hidden"
              }`}
            >
              {feature.mockup}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CallToAction = () => {
  return (
    <section>
      <div className="rounded-2xl w-full flex flex-col md:flex-row items-center justify-center cta-gradient-background p-8 md:p-16">
        <div>
          <h3 className="text-xl md:text-3xl font-accent font-bold">Join others having more enjoyable rounds</h3>
          <DownloadButtons className="flex flex-row gap-x-4 py-8 md:py-12"/>
        </div>
        <div className="flex-grow flex justify-center h-52 w-52">
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
    <main>
      <Hero />
      <Sponsor />
      <KeyFeatures />
      <CallToAction />
    </main>
    <Footer/>
    </>
  );
}
