import React, { useEffect, useState } from "react";
import { Page } from "./components/Page/Page";
import { AppStyled } from "./styled";
import { LoadPage } from "./components/LoadPage";

import Image1 from "./images/image1.png";
import Image2 from "./images/image2.png";
import Image3 from "./images/image3.png";
import Image4 from "./images/image4.png";
import Image5 from "./images/image5.png";

import { Page1, Page2, Page3, Page4, Page5 } from "./components/Pages";

const pages = [
  {
    img: Image1,
    content: <Page1 />
  },
  {
    img: Image2,
    content: <Page2 />
  },
  {
    img: Image3,
    content: <Page3 />
  },
  {
    img: Image4,
    content: <Page4 />
  },
  {
    img: Image5,
    content: <Page5 />
  }
];

export const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AppStyled>
      {loading && <LoadPage />}
      {pages.map((page, index) => (
        <Page setLoading={setLoading} key={index} index={index} page={page}></Page>
      ))}
    </AppStyled>
  );
};
