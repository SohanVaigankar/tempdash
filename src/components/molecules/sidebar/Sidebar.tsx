// icons
import {
  PiCaretDownBold,
  PiCaretRightBold,
  PiDotOutlineFill,
  PiFileDoc,
  PiHeadset,
  PiLink,
} from "react-icons/pi";
// assets
import user6 from "../../../assets/images/user6.png";
import Logo from "../../../assets/svgs/logo.svg";

const Sidebar = () => {
  return (
    <nav>
      {/* profile */}
      <div className="flex justify-start items-center">
        <img src={user6} alt="profile" />
        <span>Superstars AI</span>
      </div>
      {/* favourites & recent */}
      <div>
        <div>
          <h3>Favourites</h3> <h3>Recent</h3>
        </div>
        <div>
          <ul>
            <li>
              <PiDotOutlineFill />
              <span>Get Started</span>
            </li>
            <li>
              <PiDotOutlineFill />
              <span>Transactions</span>
            </li>
          </ul>
        </div>
      </div>
      {/* pages */}
      <div></div>
      {/* docs & support */}
      <div>
        <h3>Pages</h3>
        <PiCaretDownBold />
        <PiCaretRightBold />
        <ul>
          <li>
            <PiLink />
            <PiFileDoc />
            <span>Documentation</span>
          </li>
          <li>
            <PiLink />
            <PiHeadset />
            <span>Help Center</span>
          </li>
        </ul>
      </div>
      {/* logo */}
      <div>
        <img src={Logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Sidebar;
