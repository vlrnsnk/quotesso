import { Quote } from 'components/Quote/Quote';
import { ButtonTwitter } from 'components/ButtonTwitter/ButtonTwitter';
import { ButtonQuotesso } from 'components/ButtonQuotesso/ButtonQuotesso';

const QuoteBox = ({
  quote,
  author,
  color,
  backgroundColor,
  highlightColor,
  opacity,
  handleClick,
}) => {
  return (
    <div
      className="rounded-md
      p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
      mb-4
      shadow-2xl
      md:w-3/4 lg:w-2/3 xl:w-1/2
      transition-all  duration-1000"
      id="quote-box"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Quote quote={quote} author={author} color={color} opacity={opacity} />
      <div className="flex justify-between">
        <ButtonTwitter
          quote={quote}
          author={author}
          color={color}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          handleClick={() => {}}
        />
        <ButtonQuotesso
          color={color}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export { QuoteBox };
