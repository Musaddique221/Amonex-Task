import {
  FaArrowLeft,
  FaCog,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import InfoCard from "../components/InfoCard";
import Footer from "../components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#121221] text-white">
      <div className="flex justify-between items-center p-4">
        <button>
          <a href="/">
            <FaArrowLeft size={20} />
          </a>
        </button>
        <h2 className="font-semibold">Profile</h2>
        <button>
          <FaCog size={20} />
        </button>
      </div>

      <div className="px-4 mt-2">
        <div className="bg-[#24294d] h-2 rounded-full">
          <div className="bg-[#9999ff] h-2 rounded-full w-[90%]"></div>
        </div>
        <p className="text-xs mt-1 text-gray-400">9/10</p>
      </div>
      {/* Contact Info */}
      <div className="px-4 mt-4">
        <InfoCard title="Contact Info" editable>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt size={14} /> New York, United States
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhoneAlt size={14} /> (208) 555-0112
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaEnvelope size={14} /> example@mail.com
          </p>
        </InfoCard>

        {/* About Me */}
        <InfoCard title="About Me" editable>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis.
          </p>
        </InfoCard>

        {/* Experience */}
        <InfoCard title="Experience">
          <div className="flex items-center gap-3">
            <FaBriefcase size={20} className="text-indigo-400" />
            <div>
              <p className="font-semibold text-sm">Frontend Designer</p>
              <p className="text-xs text-gray-400">Info Corp / New York</p>
              <p className="text-xs text-gray-500">Dec 2020 - Present</p>
            </div>
          </div>
        </InfoCard>

        {/* Education */}
        <InfoCard title="Education">
          <div className="flex items-center gap-3">
            <FaGraduationCap size={20} className="text-indigo-400" />
            <div>
              <p className="font-semibold text-sm">Computer Engineer</p>
              <p className="text-xs text-gray-400">NY University</p>
              <p className="text-xs text-gray-500">2016 - 2020</p>
            </div>
          </div>
        </InfoCard>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
