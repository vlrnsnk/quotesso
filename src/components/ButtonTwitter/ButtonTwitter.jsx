import { Button } from "../Button/Button";
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';

const ButtonTwitter = ({ quote }) => {
  return (
    <Button
      classes="p-3
        cursor-pointer"
      id="tweet-quote"
      title="Tweet this quote"
      attributes={{
        href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`,
        target: "_blank",
        rel: "noopener noreferrer"
      }}
      buttonAs="a"
    >
     <TwitterIcon />
    </Button>
  );
};

export { ButtonTwitter };
