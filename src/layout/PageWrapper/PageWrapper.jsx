const PageWrapper = ({ backgroundColor, children }) => {
  return (
    <div
      className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14
      flex flex-col
      justify-center
      items-center
      transition-colors motion-reduce:transition-none duration-1000"
      style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}
    >
      {children}
    </div>
  );
};

export { PageWrapper };
