import React from 'react'
import styled from 'styled-components'

import { useCheckboxInput } from 'react-google-forms-hooks'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckboxContainer = styled.div`
  display: flex;

  & label {
    margin: 5px 10px;
    color: #361202;

    font-size: 20px;
    text-align: start;
  }
  
  /*  */
  /* прячем input checkbox */
  & input[type="checkbox"] {
    display: none;
  }
  
  /* стили для метки */
  & label {
    cursor: pointer;
  }
  
  /* формируем внешний вид чекбокса в псевдоэлементе before */
  & label:before {
    content: " ";
    color: #361202;
    background-color: #ffffffb3;
    display: inline-block;
    margin-right: 15px;
    position: relative;
    text-align: center;
    text-indent: 0px;
    width: 20px;
    height: 20px;
    border: 1px solid #e3e3e3;
    vertical-align: middle;
  }
  
  /* вариации внешнего вида в зав-ти от статуса checkbox */
  /* checked */
  & input:checked + label:before {
    content: "✓";
  }
  /* disabled */
  & input:disabled + label:before {
    background: #eee;
    color: #aaa;
  }
`

export default function CheckboxInput({ id }: { id: string }) {
  const { options, customOption } = useCheckboxInput(id)

  return (
    <Container>
      {options.map((o) => (
        <CheckboxContainer key={o.id}>
          <input type='checkbox' id={o.id}  {...o.registerOption()} name={`entry.${o.id.split('-')[0]}`} />
          <label htmlFor={o.id}>{o.label}</label>
        </CheckboxContainer>
      ))}
      {customOption && (
        <CheckboxContainer>
          <input
            type='checkbox'
            id={customOption.id}
            {...customOption.registerOption()}
            name={`entry.${customOption.id.split('-')[0]}`} 
          />
          <label htmlFor={customOption.id}>Outra</label>
        </CheckboxContainer>
      )}
    </Container>
  )
}
