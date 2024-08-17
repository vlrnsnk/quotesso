import { Button } from "components/Button/Button";

const ButtonQuotesso = ({ color, backgroundColor, highlightColor }) => {
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
    >
      Quotesso!
    </Button>
  );
};

export { ButtonQuotesso };
