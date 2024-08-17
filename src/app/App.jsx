import './App.css';

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
import { setLightColor } from 'features/lightColor/lightColorSlice';
import { setDarkColor } from 'features/darkColor/darkColorSlice';
import { setDarkestColor } from 'features/darkestColor/darkestColorSlice';

import axios from 'axios';

function App() {
  const [quoteOpacity, setQuoteOpacity] = useState(1);

  const quote = useSelector((state) => state.quote.value);
  const author = useSelector((state) => state.author.value);
  const lightColor = useSelector((state) => state.lightColor.value);
  const darkColor = useSelector((state) => state.darkColor.value);
  const darkestColor = useSelector((state) => state.darkestColor.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const { lightColor, darkColor, darkestColor } = colors[0];

    dispatch(setLightColor(lightColor));
    dispatch(setDarkColor(darkColor));
    dispatch(setDarkestColor(darkestColor));
    getNewQuote();
  }, []);

  const getNewQuote = () => {
    setQuoteOpacity(0);
    let content = '';
    let author = '';

    axios.get('https://api.quotable.io/quotes/random')
    .then((response) => {
      ({ content, author } = response.data[0]);
    }).catch((error) => {
      console.log(error);
    });

    setTimeout(() => {
      dispatch(setQuote(content));
      dispatch(setAuthor(author));

      const { lightColor, darkColor, darkestColor } = getRandomArrayItem(colors);

      dispatch(setLightColor(lightColor));
      dispatch(setDarkColor(darkColor));
      dispatch(setDarkestColor(darkestColor));
    }, 1000);

    setTimeout(() => {
      setQuoteOpacity(1);
    }, 1000);
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
          opacity={quoteOpacity}
          handleClick={getNewQuote}
        />
        <Footer />
        </QuoteWrapper>
    </PageWrapper>
  );
}

export default App;
