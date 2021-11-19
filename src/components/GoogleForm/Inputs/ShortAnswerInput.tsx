import React from 'react'

import { useShortAnswerInput } from 'react-google-forms-hooks'
import styled from 'styled-components';
import { device } from '../../../utils';

const InputStyled = styled.input`
    border-radius: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border: none;
    font-size: 18px;

    background-color: #ffffffb3;
    outline-color: #b4763a;

    text-align: center;


    @media ${device.tablet} {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    }
`;

export default function ShortAnswerInput({ id }: { id: string }) {
  const { register } = useShortAnswerInput(id)

  return (
    <div>
      <InputStyled type='text' {...register()} name={`entry.${id.split('-')[0]}`} />
    </div>
  )
}
