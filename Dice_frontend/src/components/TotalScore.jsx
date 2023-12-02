import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>

      {score < -10 ? (
  <div>
    <p style={{ color: "red" }}>You Lose the game</p>
          <br />
          <p>Reset the game</p>
  </div>
) : score > 10 ? (
            <div>
                 <p style={{ color: "green" }}>You Win the Game 🏆🏆</p>
            <br />
            <p>Reset the game</p>
         </div>
) :(
  <p>Total Score</p>
) }

    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
