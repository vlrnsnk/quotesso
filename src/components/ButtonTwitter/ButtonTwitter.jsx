import { Button } from "../Button/Button";
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

const ButtonTwitter = ({ quote, color, backgroundColor }) => {
  return (
    <Button
      buttonAs="a"
      classes="p-3
        cursor-pointer"
      id="tweet-quote"
      title="Tweet this quote"
      attributes={{
        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`,
        target: "_blank",
        rel: "noopener noreferrer"
      }}
      color={color}
      backgroundColor={backgroundColor}
    >
     <TwitterIcon />
    </Button>
  );
};

export { ButtonTwitter };
