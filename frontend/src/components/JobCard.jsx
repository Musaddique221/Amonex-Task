import { FaBriefcase } from "react-icons/fa";

const JobCard = ({ job }) => {
  return (
    <div className="bg-[#24294d] rounded-xl p-4 text-white mb-3 shadow">
      <div className="flex items-center gap-3">
        <div className="bg-[#9999ff] p-2 rounded-lg">
          <FaBriefcase />
        </div>
        <div>
          <h4 className="font-semibold">{job.title}</h4>
          <p className="text-sm text-gray-300">
            {job.company} / {job.location}
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-2 text-xs">
        <span className="bg-[#2e3461] px-2 py-1 rounded">{job.level}</span>
        <span className="bg-[#2e3461] px-2 py-1 rounded">{job.type}</span>
        {job.mode && (
          <span className="bg-[#2e3461] px-2 py-1 rounded">{job.mode}</span>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold">{job.salary}</p>
      <p className="text-xs text-gray-400">{job.postedAgo}</p>
    </div>
  );
};

export default JobCard;
