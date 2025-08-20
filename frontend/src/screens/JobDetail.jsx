import { FaArrowLeft, FaShareAlt, FaBriefcase } from "react-icons/fa";
import JobTag from "../components/JobTag";

const job = {
  id: 1,
  title: "Python Developer",
  company: "Code INC",
  location: "Germany",
  salary: "80k - 90k",
  level: "Senior",
  type: "Full Time",
  mode: "Remote",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, 
  non pulvinar lorem felis nec erat.`,
  responsibilities: [
    "Lorem ipsum dolor sit amet",
    "Nunc maximus, nulla ut commodo sagittis",
    "Vivamus feugiat elit lorem eu porttitor",
    "Suspendisse lorem felis pretium maximus",
  ],
};

const JobDetail = () => {
  return (
    <div className="min-h-screen bg-[#121221] text-white">
      <div className="flex justify-between items-center p-4">
        <button>
          <a href="/">
            <FaArrowLeft size={20} />
          </a>
        </button>

        <h2 className="font-semibold">Job Description</h2>
        <button>
          <FaShareAlt size={18} />
        </button>
      </div>

      <div className="flex flex-col items-center mt-4 text-center px-4">
        <div className="bg-[#9999ff] p-4 rounded-2xl mb-3">
          <FaBriefcase size={28} />
        </div>
        <h3 className="text-lg font-bold">{job.title}</h3>
        <p className="text-gray-400">
          {job.company} / {job.location}
        </p>
        <p className="mt-1 font-semibold">{job.salary}</p>
        <div className="flex gap-2 mt-2">
          <JobTag text={job.level} />
          <JobTag text={job.type} />
          <JobTag text={job.mode} />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="px-4 py-2 rounded-lg bg-[#9999ff] text-sm text-black">
          Job Details
        </button>
        <button className="px-4 py-2 rounded-lg bg-[#2e3461] text-sm">
          About Company
        </button>
      </div>

      <div className="px-5 mt-6">
        <h4 className="font-semibold text-sm mb-2">Job Description</h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {job.description}
        </p>

        <h4 className="font-semibold text-sm mt-4 mb-2">
          Key Responsibilities
        </h4>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {job.responsibilities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="fixed bottom-4 left-0 right-0 flex justify-center">
        <button className="bg-[#9999ff] w-[90%] py-3 rounded-full text-white font-semibold">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
