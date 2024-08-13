const QuoteWrapper = ({ children }) => {
  return (<div
    className="h-screen
      mx-auto
      container
      flex
      flex-col
      justify-center
      items-center"
  >
    {children}
  </div>);
};

export { QuoteWrapper };
