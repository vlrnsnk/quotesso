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
  const [isActive, setIsActive] = useState(false);

  return (
    <ButtonAs
      className={`rounded-lg transition-colors motion-reduce:transition-none ${classes}`}
      id={id}
      title={title}
      style={{
        color: isActive ? color : backgroundColor,
        backgroundColor: isActive ? backgroundColor : (isHovered ? highlightColor : color),
        boxShadow: `0 4px 6px -1px rgb(from ${isHovered ? highlightColor : color} r g b / 0.3), 0 2px 4px -2px rgb(from ${isHovered ? highlightColor : color} r g b / 0.3)`
      }}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      {...attributes}
      onClick={() => {
        setIsActive(true);

        // 150ms is the default transition duration of tailwind css
        setTimeout(() => {
          setIsActive(false);
        }, 150);
      }}
    >
      {children}
    </ButtonAs>
  );
};

export { Button };
