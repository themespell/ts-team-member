const TsMemberName = ({ children, className = "" }) => {
  return (
    <h3
      className={` ${className} text-[16px] font-semibold mb-0.5 tsteam-member__name  `}
    >
      {children}
    </h3>
  );
};

export default TsMemberName;
