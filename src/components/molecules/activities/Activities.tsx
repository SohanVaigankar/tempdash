// components
import ActivitiesCard from "../../atoms/activities-card/ActivitiesCard";
// constants, utils & helper fns
import { MOCK_ACTIVITIES } from "../../../utils/constants";

const Activities = () => {
  return (
    <div className="flex flex-col gap-4  items-start">
      <h4 className="font-semibold">Activities</h4>
      <div className="flex flex-col gap-1">
        {MOCK_ACTIVITIES?.map((activity) => (
          <ActivitiesCard key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
