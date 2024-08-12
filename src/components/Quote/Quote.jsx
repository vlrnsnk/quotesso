import { ReactComponent as QuoteMark } from '../../assets/quote.svg';

const Quote = ({ quote, author }) => {
  return (
    <figure className="mb-10">
      <blockquote id="text" className="mb-4">
        <div className="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold">
          <QuoteMark className="text-red-900" />
          <p className="text-center px-6">{quote}</p>
          <QuoteMark className="text-red-900 ms-auto rotate-180" />
        </div>
      </blockquote>
      <figcaption>
        <cite id="author" className="block text-right text-xl md:text-2xl lg:text-3xl ">{`- ${author}`}</cite>
      </figcaption>
    </figure>
  );
};

export { Quote };
