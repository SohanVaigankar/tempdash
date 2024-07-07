// components
import NotificationCard from "../../atoms/notification-card/NotificationCard";
// utils, constants & helper fns
import { MOCK_NOTIFICATIONS } from "../../../utils/constants";

const Notifications = () => {
  return (
    <div className="flex flex-col gap-4  items-start">
      <h4 className="font-semibold">Notifications</h4>
      <div className="flex flex-col gap-3">
        {MOCK_NOTIFICATIONS?.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
