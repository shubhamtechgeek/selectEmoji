import { emojis } from "../data/emoji";

//select random emoji logic
const selectedRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

//game start
export default function Game() {
  const selected = selectedRandomElement(emojis);

  //handle copy
  const handleCopy = (e) => {
    if (e.target.innerText !== selected.emoji) {
      alert("Wrong emoji");
    } else if (e.timeStamp > 5000) {
      alert("Too slow. Reset and try again.");
    } else {
      alert("🎉 Winner!");
    }
  };

  //handle reset
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <>
      <h1>{selected.emoji}</h1>
      <p>copy this emoji</p>
      <div className="emoji-container">
        <ul style={{ listStyleType: 'none' }}>
          {emojis.map(({ id, emoji }) => {
            return (
              <li onCopy={handleCopy} key={id}>
                {emoji}
              </li>
            );
          })}
        </ul>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}
