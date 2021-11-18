import React from 'react'
import styled from 'styled-components'

import { GoogleForm, GoogleFormProvider, useGoogleForm } from 'react-google-forms-hooks'

import CheckboxInput from './Inputs/CheckboxInput'
import RadioInput from './Inputs/RadioInput'
import ShortAnswerInput from './Inputs/ShortAnswerInput'
import LongAnswerInput from './Inputs/LongAnswerInput'
import RadioGridInput from './Inputs/RadioGridInput'
import CheckboxGridInput from './Inputs/CheckboxGridInput'
import DropdownInput from './Inputs/DropdownInput'
import LinearGrid from './Inputs/LinearGrid'
import { Button } from '../Button'

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px 0;
`

const QuestionContainer = styled.div`
  margin-bottom: 20px;
`

const QuestionLabel = styled.h3`
  margin-bottom: 10px;
  color: #361202;
`

const Questions: React.FC<{form: GoogleForm}> = ({ form }) => {
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field

        let questionInput = null
        switch (field.type) {
          case 'CHECKBOX':
            questionInput = <CheckboxInput id={id} />
            break
          case 'RADIO':
            questionInput = <RadioInput id={id} />
            break
          case 'SHORT_ANSWER':
            questionInput = <ShortAnswerInput id={id} />
            break
          case 'LONG_ANSWER':
            questionInput = <LongAnswerInput id={id} />
            break
          case 'RADIO_GRID':
            questionInput = <RadioGridInput id={id} />
            break
          case 'CHECKBOX_GRID':
            questionInput = <CheckboxGridInput id={id} />
            break
          case 'DROPDOWN':
            questionInput = <DropdownInput id={id} />
            break
          case 'LINEAR':
            questionInput = <LinearGrid id={id} />
            break
        }

        if (!questionInput) {
          return null
        }

        return (
          <QuestionContainer key={id}>
            <QuestionLabel>{field.label}</QuestionLabel>
            {questionInput}
          </QuestionContainer>
        )
      })}
    </div>
  )
}

export const GoogleFormComponent: React.FC<{form: GoogleForm}> = ({ form }) => {
  const methods = useGoogleForm({ form })

  const onSubmit = async (data: any) => {
    await methods.submitToGoogleForms(data)
    alert('Данные успешно отправлены, спасибо!')
  }

  console.error('Извините, произошла ошибка. Попробуйте ещё.', methods.formState.errors)

  return (
    <GoogleFormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Questions form={form} />
        
        <Button type='submit'>Отправить</Button>
      </Form>
    </GoogleFormProvider>
  )
}
