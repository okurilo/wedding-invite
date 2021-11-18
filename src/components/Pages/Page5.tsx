import React from "react";
import { Form, Page3Wrapper, Page2Container } from "./styled";
import { Text } from "../Text";
import { MapChalet } from "./MapChalet";
import { GoogleForm } from 'react-google-forms-hooks'

import form from '../../utils/form.json'
import { GoogleFormComponent } from "../GoogleForm/GoogleFormComponent";

export const Page5: React.FC = () => {

  return (
    <Page3Wrapper>
      <Page2Container>
        <GoogleFormComponent form={form as GoogleForm}/>
      </Page2Container>
    </Page3Wrapper>
  );
};
