import './App.css';

import { quotes } from '../mocks/quotes';
import { colors } from '../data/colors';
import { getRandomArrayItem } from '../utilities';

import { Footer } from 'components/Footer/Footer';
import { QuoteBox } from 'components/QuoteBox/QuoteBox';
import { PageWrapper } from 'layout/PageWrapper/PageWrapper';
import { QuoteWrapper } from 'layout/QuoteWrapper/QuoteWrapper';
import { useEffect, useState } from 'react';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [lightColor, setLightColor] = useState('');
  const [darkColor, setDarkColor] = useState('');
  const [darkestColor, setDarkestColor] = useState('');

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    const { quote, author } = getRandomArrayItem(quotes);

    setQuote(quote);
    setAuthor(author);

    const { lightColor, darkColor, darkestColor } = getRandomArrayItem(colors);

    setLightColor(lightColor);
    setDarkColor(darkColor);
    setDarkestColor(darkestColor);
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
