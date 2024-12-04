
import { questions } from "../../../constants/data";
import { useState } from "react";

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