const PageWrapper = ({ backgroundColor, children }) => {
  return (
    <div className="px-4" style={{ backgroundColor: backgroundColor }}>
      {children}
    </div>
  );
};

export { PageWrapper };
