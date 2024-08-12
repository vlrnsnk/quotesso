const Button = ({ buttonAs, classes ,id, title, attributes, children }) => {
  const ButtonAs = buttonAs ? buttonAs : 'button';
  return (
    <ButtonAs
      className={`rounded-lg text-neutral-50 bg-red-900 shadow-sm shadow-red-900 hover:bg-red-950 focus:bg-red-950 active:bg-neutral-50 active:text-red-950 transition-colors motion-reduce:transition-none ${classes}`}
      id={id}
      title={title}
      {...attributes}
    >
      {children}
    </ButtonAs>
  );
};

export { Button };
