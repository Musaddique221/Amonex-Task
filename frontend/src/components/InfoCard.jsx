import { FaEdit } from "react-icons/fa";

const InfoCard = ({ title, children, editable }) => {
  return (
    <div className="bg-[#24294d] rounded-xl p-4 mb-4 text-white shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">{title}</h3>
        {editable && (
          <button className="text-indigo-400 text-xs flex items-center gap-1">
            <FaEdit size={12} /> Edit
          </button>
        )}
      </div>
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  );
};

export default InfoCard;
