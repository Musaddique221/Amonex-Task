const Section = ({ title, children }) => {
  return (
    <div className="mt-4 px-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <button className="text-xs text-indigo-400">View All</button>
      </div>
      {children}
    </div>
  );
};

export default Section;
