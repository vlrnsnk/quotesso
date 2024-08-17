const QuoteWrapper = ({ children }) => {
  return (<div
    className="h-full
      py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14
      mx-auto
      container
      flex
      flex-col
      items-center"
  >
    {children}
  </div>);
};

export { QuoteWrapper };
