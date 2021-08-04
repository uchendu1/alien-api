import React from "react";
import { Wrapper, StyledGender } from "./Card.styles";

type Props = {
  name: string;
  imgUrl: string;
  gender: string;
};

const Card: React.FC<Props> = ({ name, imgUrl, gender }) => {
  return (
    <Wrapper>
      <p>{name}</p>
      <img src={imgUrl} alt="character-thumb" />
      <StyledGender color="red" gender={gender} />
    </Wrapper>
  );
};

export default Card;
