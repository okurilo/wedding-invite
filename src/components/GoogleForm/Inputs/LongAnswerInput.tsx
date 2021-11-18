import React from 'react'

import { useLongAnswerInput } from 'react-google-forms-hooks'

export default function LongAnswerInput({ id }: { id: string }) {
  const { register } = useLongAnswerInput(id)

  return (
    <div>
      <textarea {...register()} />
    </div>
  )
}
