import { useState } from "react";

const Button = ({
  buttonAs,
  classes,
  id,
  title,
  color,
  backgroundColor,
  highlightColor,
  attributes,
  children,
}) => {
  const ButtonAs = buttonAs ? buttonAs : 'button';
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ButtonAs
      className={`rounded-lg transition-colors motion-reduce:transition-none ${classes}`}
      id={id}
      title={title}
      style={{
        color: backgroundColor,
        backgroundColor: isHovered ? highlightColor : color,
        boxShadow: `0 4px 6px -1px rgb(from ${color} r g b / 0.3), 0 2px 4px -2px rgb(from ${color} r g b / 0.3)`
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      {...attributes}
    >
      {children}
    </ButtonAs>
  );
};

export { Button };
