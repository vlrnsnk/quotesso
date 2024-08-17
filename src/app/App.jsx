import './App.css';

import { quotes } from '../mocks/quotes';
import { colors } from '../data/colors';
import { getRandomArrayItem } from '../utilities';

import { Footer } from 'components/Footer/Footer';
import { QuoteBox } from 'components/QuoteBox/QuoteBox';
import { PageWrapper } from 'layout/PageWrapper/PageWrapper';
import { QuoteWrapper } from 'layout/QuoteWrapper/QuoteWrapper';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setQuote } from 'features/quote/quoteSlice';
import { setAuthor } from 'features/author/authorSlice';

function App() {
  // const [quote, setQuote] = useState('');
  // const [author, setAuthor] = useState('');
  const [lightColor, setLightColor] = useState('');
  const [darkColor, setDarkColor] = useState('');
  const [darkestColor, setDarkestColor] = useState('');
  const [quoteOpacity, setQuoteOpacity] = useState(1);

  const quoteRedux = useSelector((state) => state.quote.value);
  const authorRedux = useSelector((state) => state.author.value);
  const dispatch = useDispatch();

  useEffect(() => {
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    setQuoteOpacity(0);

    setTimeout(() => {
      const { quote, author } = getRandomArrayItem(quotes);

      dispatch(setQuote(`REDUX ${quote}`));
      dispatch(setAuthor(`REDUX ${author}`));
      // setQuote(quote);
      // setAuthor(author);

      const { lightColor, darkColor, darkestColor } = getRandomArrayItem(colors);

      setLightColor(lightColor);
      setDarkColor(darkColor);
      setDarkestColor(darkestColor);
    }, 1000);

    setTimeout(() => {
      setQuoteOpacity(1);
    }, 1000);
  };

  return (
    <PageWrapper backgroundColor={darkColor}>
      <QuoteWrapper>
        <QuoteBox
          // quote={quote}
          quote={quoteRedux}
          // author={author}
          author={authorRedux}
          color={darkColor}
          backgroundColor={lightColor}
          highlightColor={darkestColor}
          opacity={quoteOpacity}
          handleClick={getNewQuote}
        />
        <Footer />
        </QuoteWrapper>
    </PageWrapper>
  );
}

export default App;
