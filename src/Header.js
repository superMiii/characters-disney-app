export const Header = ({ isDark, setIsDark }) => {
  return (
    <>
      <div
        className={`navbar ${
          isDark ? "bg-black text-white" : "bg-base-100 text-black"
        } flex justify-between`}
      >
        <a href="#" className="btn btn-ghost normal-case text-xl">
          Disney Characters
        </a>
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? "Light?" : "Dark?"}
        </button>
      </div>
    </>
  );
};
