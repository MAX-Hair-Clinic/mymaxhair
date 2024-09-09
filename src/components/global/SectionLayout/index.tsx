interface SectionLayout {
  children: any;
}

const SectionLayout: React.FC<SectionLayout> = ({ children }) => {
  return (
    <div className="px-[3vw] py-[6vw]">
      <div className="">{children}</div>
    </div>
  );
};

export default SectionLayout;
