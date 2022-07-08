export default function Inputs(props) {
  return (
    <div className="inputs">
      <input
        type="text"
        className="input--text"
        name="topText"
        placeholder="Top Text"
      />
      <input
        type="text"
        className="input--text"
        name="bottomText"
        placeholder="Bottom Text"
      />
    </div>
  );
}
