import { Button } from "components/Button/Button";
import { ReactComponent as TwitterIcon } from 'assets/twitter.svg';

const ButtonTwitter = ({
  quote,
  author,
  color,
  backgroundColor,
  highlightColor,
  handleClick,
  isLoading,
}) => {
  return (
    <Button
      buttonAs="a"
      classes={`p-3
        cursor-pointer${isLoading ? ' opacity-75 cursor-wait' : ''}`}
      id="tweet-quote"
      title="Tweet this quote"
      attributes={{
        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} - ${author}`)}`,
        target: "_blank",
        rel: "noopener noreferrer"
      }}
      color={color}
      backgroundColor={backgroundColor}
      highlightColor={highlightColor}
      handleClick={handleClick}
      isLoading={isLoading}
    >
     <TwitterIcon />
    </Button>
  );
};

export { ButtonTwitter };
