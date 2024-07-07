// components
import { Notifications } from "../../molecules/notifications";
import { Activities } from "../../molecules/activities";

const AlertsSection = () => {
  return (
    <section className="flex flex-col gap-10 border-l border-gray-800 p-6">
      <Notifications />
      <Activities />
    </section>
  );
};

export default AlertsSection;
