import React from "react";
import { Wrapper, Image } from "./Actor.styles";

interface ActorProps {
  name: string;
  character: string;
  imageUrl: string;
}

const Actor = ({ name, character, imageUrl }: ActorProps) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-thumb" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
