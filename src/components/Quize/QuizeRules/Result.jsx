function Result({ trueAnswer, allQwestion }) {
    return (
      <>
        <div>
          <p>{`Вы ответили на ${trueAnswer} из ${allQwestion}`}</p>
        </div>
      </>
    );
  }

  export default Result;