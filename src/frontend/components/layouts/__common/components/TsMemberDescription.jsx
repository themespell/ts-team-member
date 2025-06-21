const TsMemberDescription = ({ children, className = "" }) => {
  return (
    <p className={`tsteam-member__description ${className} `}> {children} </p>
  );
};

export default TsMemberDescription;
