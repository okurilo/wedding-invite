import React from "react";
import { Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { MapVolhonka } from "./MapVolhonka";

export const Page3: React.FC = () => {
  return (
    <Page3Wrapper>
      <MapVolhonka />
      <Page2Container>
        <Text fontSize="18px" paddingBottom="18px">
          Наша регистрация пройдет в особняке на Волхонке.
        </Text>
        <Text fontSize="16px" paddingBottom="18px">
          Адрес: ул. Большой Знаменский пер., 2, стр. 3
        </Text>
        <a href="https://yandex.ru/maps/-/CCUqZUGR8B">Открыть в Я.Картах</a>
      </Page2Container>
    </Page3Wrapper>
  );
};
