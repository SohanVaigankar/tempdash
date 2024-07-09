// constants, utils & helper functions
import { NOTIFICATION_TYPES } from "../../../utils/constants";
// icons
import {
  PiBroadcastDuotone,
  PiBugBeetle,
  PiStarFourLight,
  PiUser,
} from "react-icons/pi";
import { relativeDateFormat } from "../../../utils/helperFunctions";

type NotificationCardProps = {
  id: number | string;
  message: string;
  timeStamp: any;
  type: string;
};
const NotificationCard = (props: NotificationCardProps) => {
  const { type, message, timeStamp } = props;

  let icon;
  switch (type) {
    case NOTIFICATION_TYPES.ISSUE:
      icon = <PiBugBeetle fontSize={"1rem"} className="" />;
      break;
    case NOTIFICATION_TYPES.NEW_FEATURE:
      icon = <PiStarFourLight fontSize={"1rem"} className="" />;
      break;
    case NOTIFICATION_TYPES.NEW_MEMBER:
      icon = <PiUser fontSize={"1rem"} className="" />;
      break;
    case NOTIFICATION_TYPES.NEW_SUBSCRIBER:
      icon = <PiBroadcastDuotone fontSize={"1rem"} className="" />;
      break;

    default:
      icon = <PiStarFourLight fontSize={"1rem"} className="" />;
      break;
  }

  return (
    <div className="flex gap-2 items-start hover:cursor-pointer hover:bg-neutral-400/10 hover:rounded-md py-1 px-2">
      <div className="rounded-lg bg-blue-200 min-w-6 h-6 flex items-center justify-center text-gray-800 mt-[0.15rem]">
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="text-left line-clamp-1">{message}</p>
        <span className="text-sm text-left text-gray-400">
          {relativeDateFormat(timeStamp)}
        </span>
      </div>
    </div>
  );
};

export default NotificationCard;
