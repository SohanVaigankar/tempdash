// components
import { Notifications } from "../../molecules/notifications";
import { Activities } from "../../molecules/activities";

const AlertsSection = () => {
  return (
    <section className="flex h-full flex-col gap-10 border-l border-gray-200 dark:border-gray-500/40 p-6 lg:max-w-[20vw] min-w-[250px] overflow-y-auto transition-all duration-1000 ease-in-out">
      <Notifications />
      <Activities />
    </section>
  );
};

export default AlertsSection;
