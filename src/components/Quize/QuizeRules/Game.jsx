import { questions } from "../../../constants/data";
import { useState } from "react";



function Game({ data, fn, step, allQwestion }) {
    let progress = Math.round((step / allQwestion) * 100);
  
    return (
      <>
        <section>
          <div>
            <div className="bar">
              <div style={{ width: `${progress}%` }}></div>
            </div>
            <div>
              <h3 className="title">{data.title}</h3>
            </div>
            <div>
              <ul>
                {data.variants.map((variant, ind) => (
                  <li onClick={() => fn(ind)} key={variant}>
                    {variant}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }

  export default Game;