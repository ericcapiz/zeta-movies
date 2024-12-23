import React from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";

interface HeroImageProps {
  image: string;
  title: string;
  text: string;
}

const HeroImage = ({ image, title, text }: HeroImageProps) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
