import './App.css';

function App() {
  return (
    <div id="quote-box">
      <figure>
        <blockquote id="text">
          <p>I can't change the direction of the wind, but I can adjust my sails to always reach my destination.</p>
        </blockquote>
        <figcaption>
          <cite id="author">Jimmy Dean</cite>
        </figcaption>
      </figure>
      <div>
        <a id="tweet-quote" href="https://twitter.com/intent/tweet?text=I can't change the direction of the wind, but I can adjust my sails to always reach my destination." target="_blank" rel="noopener noreferrer">Tweet quote</a>
        <button id="new-quote" type="button">Get new quote</button>
      </div>
      <footer>
        by <a href="https://github.com/vlrnsnk" target="_blank" rel="noopener noreferrer">vlrnsnk</a>
      </footer>
    </div>
  );
}

export default App;
