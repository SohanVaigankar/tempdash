// context
import { useUserContext } from "../../../../context";
import { USER_CONTEXT_ACTIONS } from "../../../../context/user-context/action.types";

type FormDataType = {
  business_name: string;
  name: string;
  email: string;
  phone: string;
};

const ProfileForm = () => {
  const { businessName, name, email, phone, dispatch } = useUserContext();

  const updateUserData = (formPayload: FormDataType) => {
    dispatch({
      type: USER_CONTEXT_ACTIONS.UPDATE_USER_DATA,
      payload: formPayload,
    });
  };

  const handleSubmit = (e: HTMLFormElement) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formEntries = Object.fromEntries(formData.entries());
    updateUserData(formEntries);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 lg:grid-cols-2 gap-5 border border-gray-500/40 rounded-md p-10 "
    >
      <div className="">
        <label htmlFor="business_name" className="text-sm font-semibold pl-2">
          Business Name
        </label>
        <input
          type="text"
          name="business_name"
          defaultValue={businessName}
          placeholder="enter the name of your company"
          className="w-full p-2   bg-transparent border-b dark:border-b-neutral-600 focus:outline-none focus:border-b-black dark:focus:border-b-neutral-300"
          minLength={2}
          maxLength={24}
          required
        />
      </div>

      <div className="">
        <label htmlFor="name" className="text-sm font-semibold pl-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          minLength={2}
          maxLength={256}
          defaultValue={name}
          placeholder="enter your name"
          className="w-full p-2   bg-transparent border-b focus:outline-none dark:border-b-neutral-600  focus:border-b-black dark:focus:border-b-neutral-300"
        />
      </div>
      <div className="">
        <label htmlFor="email" className="text-sm font-semibold pl-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          required
          placeholder="your email"
          className="w-full p-2   bg-transparent border-b focus:outline-none dark:border-b-neutral-600  focus:border-b-black dark:focus:border-b-neutral-300"
        />
      </div>
      <div className="">
        <label htmlFor="phone" className="text-sm font-semibold pl-2">
          Phone
        </label>
        <input
          type="text"
          inputMode="numeric"
          name="phone"
          defaultValue={phone}
          placeholder="your phone number"
          minLength={10}
          maxLength={10}
          pattern="^[6-9][0-9]{9}$"
          required
          className="w-full p-2   bg-transparent border-b focus:outline-none dark:border-b-neutral-600  focus:border-b-black dark:focus:border-b-neutral-300"
        />
      </div>
      <div className="flex items-center justify-center gap-10">
        <button
          className="rounded-md w-full mt-5 border bg-indigo-400 font-semibold border-none  p-2 text-white"
          type="submit"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default ProfileForm;
