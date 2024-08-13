import './App.css';

import { quotes } from '../mocks/quotes';
import { colors } from '../data/colors';
import { Footer } from '../components/Footer/Footer';
import { QuoteBox } from '../components/QuoteBox/QuoteBox';
import { PageWrapper } from '../layout/PageWrapper/PageWrapper';
import { QuoteWrapper } from '../layout/QuoteWrapper/QuoteWrapper';

function App() {
  const getRandomQuote = (quotes) => {
    return quotes[(Math.floor(Math.random() * quotes.length))]
  };

  const { quote, author } = getRandomQuote(quotes);

  const { lightColor, darkColor } = colors[1];

  return (
    <PageWrapper backgroundColor={darkColor}>
      <QuoteWrapper>
        <QuoteBox quote={quote} author={author} color={darkColor} backgroundColor={lightColor} />
        <Footer />
        </QuoteWrapper>
    </PageWrapper>
  );
}

export default App;
