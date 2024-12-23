import React from "react";
import { calcTime, convertMoney } from "../../helpers";
import { Wrapper, Content } from "./MovieInfoBar.styles";

interface MovieInfoBarProps {
  time: number;
  budget: number;
  revenue: number;
}

const MovieInfoBar = ({
  time,
  budget,
  revenue,
}: MovieInfoBarProps): JSX.Element => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running Time: {calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget: {convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue: {convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
