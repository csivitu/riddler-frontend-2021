import React from "react";
import { HeaderWrap, Icon, Title } from "./HeaderElements";

const Header = ({TitleTextTop, TitleTextBottom, TitleColor, ImageURL, Opposite}) => {
  if(Opposite === "true") {
    return (
      <HeaderWrap titleColor={TitleColor}>
        <Icon>
          <img src={ImageURL} alt="" />
        </Icon>
        <Title>
          {TitleTextTop}<br />{TitleTextBottom}
        </Title>
      </HeaderWrap>
    );
  }
  return (
    <HeaderWrap titleColor={TitleColor}>
      <Title>
        {TitleTextTop}<br />{TitleTextBottom}
      </Title>
      <Icon>
        <img src={ImageURL} alt="" />
      </Icon>
    </HeaderWrap>
  );
};

export default Header;
