import React, { ReactElement, useState, useEffect } from "react";
import { WrapperPage } from "./styled";
import { Parallax, Background } from "react-parallax";
import { Divider } from "../Divider";

const PAGE_COUNT = 4;

export const Page: React.FC<{
  page: { img: string; content: JSX.Element };
  index: number;
  setLoading: Function
}> = ({ page, index, setLoading }) => {

  return (
    <Parallax strength={200} bgImage={page.img} onLoad={(e) => setLoading(false)}>
      <WrapperPage>{page.content}</WrapperPage>
      {index !== 3 && <Divider />}
    </Parallax>
  );
};
