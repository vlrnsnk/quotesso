const Button = ({ buttonAs, classes ,id, title, color, backgroundColor, attributes, children }) => {
  const ButtonAs = buttonAs ? buttonAs : 'button';

  return (
    <ButtonAs
      className={`rounded-lg hover:bg-red-950 focus:bg-red-950 active:bg-neutral-50 active:text-red-950 transition-colors motion-reduce:transition-none ${classes}`}
      id={id}
      title={title}
      style={{
        color: backgroundColor,
        backgroundColor: color,
        boxShadow: `0 4px 6px -1px rgb(from ${color} r g b / 0.3), 0 2px 4px -2px rgb(from ${color} r g b / 0.3)`
      }}
      {...attributes}
    >
      {children}
    </ButtonAs>
  );
};

export { Button };
