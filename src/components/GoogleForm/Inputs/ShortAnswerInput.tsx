import React from 'react'

import { useShortAnswerInput } from 'react-google-forms-hooks'
import styled from 'styled-components';

const InputStyled = styled.input`
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    font-size: 20px;

    background-color: #ffffffb3;
    outline-color: #b4763a;

    text-align: center;
`;

export default function ShortAnswerInput({ id }: { id: string }) {
  const { register } = useShortAnswerInput(id)

  return (
    <div>
      <InputStyled type='text' {...register()} />
    </div>
  )
}
