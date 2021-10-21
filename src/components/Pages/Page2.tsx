import React from "react";
import { Page2Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";

export const Page2: React.FC = () => {
  return (
    <Page2Wrapper>
      <Page2Container>
        <Text fontSize="32px" fontWeight="bold" paddingBottom="18px">
          ПРИГЛАШЕНИЕ
        </Text>
        <Text fontSize="32px" paddingBottom="18px">
          27 ноября 2021 года
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -13:30-
        </Text>
        <Text fontSize="20px" paddingBottom="18px">
          начало церемонии
        </Text>
        <Text fontSize="32px" paddingBottom="2px">
          -16:00-
        </Text>
        <Text fontSize="20px">сбор в ресторане</Text>
      </Page2Container>
    </Page2Wrapper>
  );
};
