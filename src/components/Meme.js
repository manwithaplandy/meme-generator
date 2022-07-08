import React from "react";

export default function Meme(props) {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/1bij.jpg",
  });

  function getRandomMeme() {
    const randNum = Math.floor(Math.random() * 100);
    setMeme({ url: allMemes[randNum].url });
  }

  React.useEffect(() => {
    async function getAllMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    }
    getAllMemes();
  }, []);

  function handleChange(event) {
    const target = event.target;
    setMeme((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  }

  return (
    <div className="meme">
      <div className="inputs">
        <input
          type="text"
          className="input--text"
          name="topText"
          placeholder="Top Text"
          onChange={handleChange}
          value={meme.topText || ""}
        />
        <input
          type="text"
          className="input--text"
          name="bottomText"
          placeholder="Bottom Text"
          onChange={handleChange}
          value={meme.bottomText || ""}
        />
      </div>
      <div className="meme--img">
        <div className="topText">{meme.topText}</div>
        <img src={meme.url} alt="meme" />
        <div className="bottomText">{meme.bottomText}</div>
      </div>
      <button onClick={getRandomMeme}>New Meme</button>
    </div>
  );
}
