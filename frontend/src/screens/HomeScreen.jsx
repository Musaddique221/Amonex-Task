import Footer from "../components/Footer";
import Header from "../components/Header";
import JobCard from "../components/JobCard";
import Section from "../components/Section";

const suggestedJobs = [
  {
    id: 1,
    title: "Frontend Designer",
    company: "Info Corp",
    location: "New York",
    level: "Senior",
    type: "Full Time",
    salary: "50k - 70k",
    postedAgo: "10 hours ago",
  },
];

const recommendedJobs = [
  {
    id: 2,
    title: "Python Developer",
    company: "Code INC",
    location: "Germany",
    level: "Senior",
    type: "Full Time",
    mode: "Remote",
    salary: "80k - 90k",
    postedAgo: "2 days ago",
  },
  {
    id: 3,
    title: "Product Engineer",
    company: "Cube Tech",
    location: "UK",
    level: "Senior",
    type: "Part Time",
    mode: "Remote",
    salary: "80k - 90k",
    postedAgo: "5 days ago",
  },
  {
    id: 4,
    title: "Product Engineer",
    company: "Cube Tech",
    location: "UK",
    level: "Senior",
    type: "Part Time",
    mode: "Remote",
    salary: "80k - 90k",
    postedAgo: "5 days ago",
  },
  {
    id: 5,
    title: "Product Engineer",
    company: "Cube Tech",
    location: "UK",
    level: "Senior",
    type: "Part Time",
    mode: "Remote",
    salary: "80k - 90k",
    postedAgo: "5 days ago",
  },
];

const HomeScreen = () => {
  return (
    <div className="min-h-screen bg-[#121227]">
      <Header />

      {/* Search Bar */}
      <div className="px-4 mt-2">
        <input
          type="text"
          placeholder="Search Job"
          className="w-full px-4 py-2 rounded-full  text-white placeholder-white border-white"
        />
      </div>

      <a href="/job-detail">
        <Section title="Suggested for you">
          {suggestedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Section>
      </a>

      <a href="/job-detail" className="mb-20">
        <Section title="Recommended for you">
          {recommendedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Section>
      </a>
      <Footer />
    </div>
  );
};

export default HomeScreen;
