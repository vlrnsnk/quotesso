import { ReactComponent as QuoteMark } from '../../assets/quote.svg';

const Quote = ({ quote, author, color }) => {
  return (
    <figure className="mb-10" style={{ color: color }}>
      <blockquote className="mb-4" id="text">
        <div className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">
          <QuoteMark />
          <p className="text-center px-6">{quote}</p>
          <QuoteMark className="ms-auto rotate-180" />
        </div>
      </blockquote>
      <figcaption>
        <cite
          className="block text-right text-xl md:text-2xl lg:text-3xl"
          id="author"
        >
          {`- ${author}`}
        </cite>
      </figcaption>
    </figure>
  );
};

export { Quote };
