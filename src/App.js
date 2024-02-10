import "./App.css";
import React from "react";

const phrases = [
  "No",
  "Are you sure",
  "Really sure",
  "Don't do this to me",
  "I'm gonna cry..",
  "You're breaking my heart ;(",
];

const images = [
  "https://media.tenor.com/J6xumGwaxh8AAAAj/flowers-flower.gif",
  "https://media.tenor.com/0Hw-vPVORlEAAAAj/peach-goma-phone-lying-down.gif",
  "https://media.tenor.com/ti6jDf8qC5IAAAAj/peach-and-goma-goma.gif",
  "https://media.tenor.com/JulL3dye-BoAAAAj/peach-goma-peach-and-goma.gif",
  "https://media.tenor.com/wqYFElBnfoYAAAAj/yelynn-yelynnn.gif",

  "https://media.tenor.com/Uac8Y5yud28AAAAj/peach-and-goma-goma.gif",
];

const happy = "https://media.tenor.com/z6X7ejA5Vs0AAAAj/peach-goma-love.gif";
function App() {
  const [declineCount, setDeclineCount] = React.useState(0);
  const [resValentine, setResValentine] = React.useState(false);

  const yesButtonSize = declineCount * 15 + 16;

  const nextText = () => phrases[Math.min(declineCount, phrases.length - 1)];
  const nextImage = () => images[Math.min(declineCount, images.length - 1)];

  return (
    <div className="App">
      <header className="App-header">
        <p
          style={{
            fontFamily: "Kanit, sans-serif",
            fontSize: 57,
            fontWeight: "bold",
          }}
        >
          {!resValentine ? " Will you be my valentine?" : "Happy valentine :)"}
        </p>
        {!resValentine ? (
          <img src={nextImage()} alt="reaction" />
        ) : (
          <img src={happy} alt="reaction" />
        )}

        {!resValentine ? (
          <div className="button-container">
            <button
              className="yes-button"
              style={{ fontSize: yesButtonSize, fontWeight: "bold" }}
              onClick={() => setResValentine(!resValentine)}
            >
              Yes
            </button>

            <button
              className="decline-button"
              style={{ fontSize: 16, fontWeight: "bold" }}
              onClick={() => setDeclineCount(declineCount + 1)}
            >
              {nextText()}
            </button>
          </div>
        ) : null}
      </header>
    </div>
  );
}

export default App;
