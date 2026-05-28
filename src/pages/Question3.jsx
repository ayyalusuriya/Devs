import { useNavigate } from "react-router-dom";

export default function Question3() {

  const navigate = useNavigate();

  const moveButton = (e) => {

    const x = Math.random() * 500 - 250;
    const y = Math.random() * 300 - 150;

    e.target.style.position = "relative";
    e.target.style.left = `${x}px`;
    e.target.style.top = `${y}px`;
  };

  return (

    <div className="page">

      <div className="butterfly b1">🦋</div>
      <div className="butterfly b2">🦋</div>
      <div className="butterfly b3">🦋</div>

      <h1>🌈 Question 3 🌈</h1>

      <h2>
        Will you have the best birthday ever this year? 🎉💫
      </h2>

      <div className="btns">

        <button
          className="yesBtn"
          onClick={() => navigate("/main")}
        >
          Yes 💖
        </button>

        <button
          className="noBtn"
          onMouseEnter={moveButton}
        >
          Potu thalliruvenn 😈
        </button>

      </div>

    </div>
  );
}