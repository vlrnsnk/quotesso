import { Quote } from 'components/Quote/Quote';
import { ButtonTwitter } from 'components/ButtonTwitter/ButtonTwitter';
import { ButtonQuotesso } from 'components/ButtonQuotesso/ButtonQuotesso';

const QuoteBox = ({ quote, author, color, backgroundColor, highlightColor }) => {
  return (
    <div
      className="rounded-md
      p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
      mb-4
      shadow-sm shadow-neutral-50
      md:w-3/4 lg:w-2/3 xl:w-1/2"
      id="quote-box"
      style={{ backgroundColor: backgroundColor }}
    >
      <Quote quote={quote} author={author} color={color} />
      <div className="flex justify-between">
        <ButtonTwitter
          quote={quote}
          color={color}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
        />
        <ButtonQuotesso
          color={color}
          backgroundColor={backgroundColor}
          highlightColor={highlightColor}
        />
      </div>
    </div>
  );
};

export { QuoteBox };
