import './App.css';

import { quotes } from '../mocks/quotes';
import { colors } from '../data/colors';
import { getRandomArrayItem } from '../utilities';

import { Footer } from 'components/Footer/Footer';
import { QuoteBox } from 'components/QuoteBox/QuoteBox';
import { PageWrapper } from 'layout/PageWrapper/PageWrapper';
import { QuoteWrapper } from 'layout/QuoteWrapper/QuoteWrapper';

function App() {
  const { quote, author } = getRandomArrayItem(quotes);
  const { lightColor, darkColor, darkestColor } = getRandomArrayItem(colors);
  const getNewQuote = () => {
    console.log('clicked');
  };

  return (
    <PageWrapper backgroundColor={darkColor}>
      <QuoteWrapper>
        <QuoteBox
          quote={quote}
          author={author}
          color={darkColor}
          backgroundColor={lightColor}
          highlightColor={darkestColor}
          handleClick={getNewQuote}
        />
        <Footer />
        </QuoteWrapper>
    </PageWrapper>
  );
}

export default App;
