import { relativeDateFormat } from "../../../utils/helperFunctions";

type ActivitiesCardProps = {
  id: number | string;
  picture: string;
  message: string;
  timeStamp: any;
};

const ActivitiesCard = (props: ActivitiesCardProps) => {
  const { picture, message, timeStamp } = props;
  return (
    <div className="flex gap-2 items-start hover:cursor-pointer hover:bg-neutral-400/10 hover:rounded-md py-1 px-2">
      <img
        src={picture}
        alt={"profile img"}
        className="bg-blue-200 w-6 h-6 rounded-full mt-[0.15rem]"
      />
      <div className="flex flex-col">
        <p className="text-left line-clamp-1">{message}</p>
        <span className="text-sm text-left text-gray-400">
          {relativeDateFormat(timeStamp)}
        </span>
      </div>
    </div>
  );
};

export default ActivitiesCard;
