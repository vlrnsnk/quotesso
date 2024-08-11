import './App.css';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';
import { ReactComponent as QuoteMark } from '../assets/quote.svg';

function App() {
  const quote = `I can't change the direction of the wind, but I can adjust my sails to always reach my destination.`;
  const author = 'Jimmy Dean';

  const color = 'red-900';
  const backgroundColor = `bg-${color}`;
  const textColor = `text-${color}`;

  return (
    <div className={`${textColor} ${backgroundColor} px-4`}>
      <div
        className="
          h-screen
          mx-auto
          container
          flex
          flex-col
          justify-center
          items-center
        "
        id="quote-box"
      >
        <div className="
          bg-neutral-50
          rounded-md
          p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
          mb-4
          shadow-sm shadow-neutral-50
          md:w-3/4 lg:w-2/3 xl:w-1/2
        ">
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
          <div className="flex justify-between">
            <a
              className="
                rounded-lg
                p-3
                bg-red-900
                text-neutral-50
                shadow-sm shadow-red-900
                cursor-pointer
                hover:bg-red-950
                focus:bg-red-950
                active:bg-neutral-50
                active:text-red-950
                transition-colors
                motion-reduce:transition-none
              "
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Tweet this quote"
            >
              <TwitterIcon />
            </a>
            <button
              className="
                rounded-lg
                px-4
                py-2 md:py-1
                bg-red-900
                text-neutral-50
                text-xl md:text-2xl
                font-bold
                shadow shadow-red-900
                cursor-pointer
                hover:bg-red-950
                focus:bg-red-950
                active:bg-neutral-50
                active:text-red-950
                transition-colors
                motion-reduce:transition-none
              "
              id="new-quote"
              type="button"
              title="Display a new quote"
            >
              Quotesso!
            </button>
          </div>
        </div>
        <footer className="text-neutral-50 underline">
          by <a href="https://github.com/vlrnsnk" target="_blank" rel="noopener noreferrer">vlrnsnk</a>
        </footer>
      </div>
    </div>
  );
}

export default App;
