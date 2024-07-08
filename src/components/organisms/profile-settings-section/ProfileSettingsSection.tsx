import { useNavigate } from "react-router-dom";
// components
import { ProfileForm } from "../../molecules/forms/profile-form";

const ProfileSettingsSection = () => {
  const navigate = useNavigate();
  return (
    <div className="p-5 flex flex-col items-center">
      <h2 className="text-center text-2xl md:text-4xl mb-10">Profile</h2>
      <ProfileForm />
      <button
        type="button"
        className=" mt-10 border-2  rounded-md p-3 hover:font-semibold"
        onClick={() => navigate("/")}
      >
        {` Go Back to Overview`}
      </button>
    </div>
  );
};

export default ProfileSettingsSection;
