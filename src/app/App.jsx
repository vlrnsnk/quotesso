import './App.css';
import { ReactComponent as TwitterIcon } from '../assets/twitter.svg';

import { quotes } from '../mocks/quotes';
import { Footer } from '../components/Footer/Footer';
import { Quote } from '../components/Quote/Quote';
import { ButtonTwitter } from '../components/ButtonTwitter/ButtonTwitter';
import { ButtonQuotesso } from '../components/ButtonQuotesso/ButtonQuotesso';

function App() {
  const getRandomQuote = (quotes) => {
    return quotes[(Math.floor(Math.random() * quotes.length))]
  };

  const { quote, author } = getRandomQuote(quotes);

  const color = '#7f1d1d';

  return (
    <div className="px-4" style={{ backgroundColor: color }}>
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
          <Quote quote={quote} author={author} />
          <div className="flex justify-between">
            <ButtonTwitter quote={quote} />
            <ButtonQuotesso />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
