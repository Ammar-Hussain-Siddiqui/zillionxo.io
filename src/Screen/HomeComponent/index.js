import WeZax from "../WeZax";
import ZaxPrice from "../ZaxPrice";
import ZaxTokenomic from "../Home/ZaxTokenomic";
import WatchOur from "../Home/WatchOur";
import BenefitsZillion from "../Home/BenefitsZellion";
import RoadMap from "../Home/RoadMap";
import TeamMember from "../../Screen/Home/TeamMember";
import Avialable from "../Home/Available";
const HomeComponent = () => {
  return (
    <div>
      <WeZax />
      <ZaxPrice />
      <ZaxTokenomic />
      <WatchOur />
      <BenefitsZillion />
      <RoadMap />
      <TeamMember />
      <Avialable />
    </div>
  );
};

export default HomeComponent;
