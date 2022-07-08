import React from "react";

export default function Meme(props) {
  const [allMemes, setAllMemes] = React.useState([]);
  const [meme, setMeme] = React.useState("https://i.imgflip.com/1bij.jpg");

  function getRandomMeme() {
    const randNum = Math.floor(Math.random() * 100);
    setMeme(allMemes[randNum].url);
  }

  React.useEffect(() => {
    async function getAllMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();
      setAllMemes(data.data.memes);
    }
    getAllMemes();
  }, []);

  return (
    <div className="meme">
      <div className="meme--img">
        <div className="topText">Top Text</div>
        <img src={meme} alt="meme" />
        <div className="bottomText">Bottom Text</div>
      </div>
      <button onClick={getRandomMeme}>New Meme</button>
    </div>
  );
}
