import { Button } from "components/Button/Button";

const ButtonQuotesso = ({
  color,
  backgroundColor,
  highlightColor,
  handleClick,
  isLoading
}) => {
  return (
    <Button
      classes="px-4
        py-2 md:py-1
        text-xl md:text-2xl
        font-bold"
      id="new-quote"
      title="Display a new quote"
      attributes={{
        type: "button",
      }}
      color={color}
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      handleClick={handleClick}
      isLoading={isLoading}
    >
      Quotesso!
    </Button>
  );
};

export { ButtonQuotesso };
