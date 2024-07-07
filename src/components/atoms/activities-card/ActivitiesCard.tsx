type ActivitiesCardProps = {
  id: number | string;
  picture: string;
  message: string;
  timeStamp: React.ReactNode;
};

const ActivitiesCard = (props: ActivitiesCardProps) => {
  const { picture, message, timeStamp } = props;
  return (
    <div className="flex gap-2 items-start">
      <img
        src={picture}
        alt={"profile img"}
        className="bg-blue-200 w-6 h-6 rounded-full mt-[0.15rem]"
      />
      <div className="flex flex-col">
        <p className="text-left">{message}</p>
        <span className="text-sm text-left text-gray-400">{timeStamp}</span>
      </div>
    </div>
  );
};

export default ActivitiesCard;
