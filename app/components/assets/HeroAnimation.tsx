import SetPreferencesMockup from "~/components/assets/mockups/SetPreferencesMockup";
import ViewRoundsMockup from "~/components/assets/mockups/ViewRoundsMockup";
import RoundDetailsMockup from "~/components/assets/mockups/RoundDetailsMockup";

const HeroAnimation = () => {

  return (
    <div className="rounded-2xl overflow-hidden relative flex">
      <div className="flex flex-row justify-between items-center w-full absolute top-1/2 translate-y-[-50%] left-0 ">
        <SetPreferencesMockup className="opacity-50"/>
        <ViewRoundsMockup className="opacity-50"/>
        <RoundDetailsMockup className="opacity-50"/>
      </div>
      <img src="/images/hero.jpg" alt="Hero" className="w-full h-auto" />
    </div>
  );
};

export default HeroAnimation;
