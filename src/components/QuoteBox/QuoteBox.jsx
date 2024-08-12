const QuoteBox = ({ children }) => {
  return (<div
    className="
      h-screen
      mx-auto
      container
      flex
      flex-col
      justify-center
      items-center
    "
    id="quote-box"
  >
    {children}
  </div>);
};

export { QuoteBox };
