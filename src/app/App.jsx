import './App.css';

import { quotes } from '../mocks/quotes';
import { Footer } from '../components/Footer/Footer';
import { QuoteBox } from '../components/QuoteBox/QuoteBox';
import { PageWrapper } from '../layout/PageWrapper/PageWrapper';
import { QuoteWrapper } from '../layout/QuoteWrapper/QuoteWrapper';

function App() {
  const getRandomQuote = (quotes) => {
    return quotes[(Math.floor(Math.random() * quotes.length))]
  };

  const { quote, author } = getRandomQuote(quotes);

  const backgroundColor = '#7f1d1d';

  return (
    <PageWrapper backgroundColor={backgroundColor}>
      <QuoteWrapper>
        <QuoteBox quote={quote} author={author} />
        <Footer />
        </QuoteWrapper>
    </PageWrapper>
  );
}

export default App;
