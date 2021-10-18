import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { MapChalet } from "./MapChalet";

export const Page4: React.FC = () => {
  return (
    <Page3Wrapper>
      <MapChalet />
      <Page2Container>
        <Text fontSize="18px" paddingBottom="18px">
          Празднование пройдет в ресторане Chalet River Club.
        </Text>
        <Text fontSize="16px" paddingBottom="18px">
          Адрес: ул. Панфилова, 19/3, Химки, Россия
        </Text>
        <a href="https://yandex.ru/maps/-/CCUqZUs4kA">Открыть в Я.Картах</a>
      </Page2Container>
    </Page3Wrapper>
  );
};
