import React, { ReactElement } from "react";
import { WrapperPage } from "./styled";
import { Parallax, Background } from "react-parallax";
import { Divider } from "../Divider";

export const Page: React.FC<{
  page: { img: string; content: JSX.Element };
  index: number;
  setLoading: Function
}> = ({ page, children, index, setLoading }) => {
  return (
    <Parallax strength={200} bgImage={page.img} onLoad={(e) => {
        setLoading(false);
        console.log('Ready for work');
      }}>
      <WrapperPage>{page.content}</WrapperPage>
      {index !== 3 && <Divider />}
    </Parallax>
  );
};
