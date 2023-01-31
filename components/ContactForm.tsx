import axios from 'axios'
import { FieldValues, useForm } from 'react-hook-form'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import { emailRegex, nameRegex } from '@/texts/errors/formErrors'

import { FormContainer } from './styles/FormContainer.styled'

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data: FieldValues) => {
    axios({
      url: 'https://formspree.io/f/myyopaal', // added raffles hall gmail raffleshalldevs@gmail.com
      method: 'post',
      headers: {
        Accept: 'application/json',
      },
      data: {
        name: data.Name.trim().replace(/ {2,}/g, ' '), // trim and remove double spaces
        email: data.Email.trim(),
        message: data.Message.trim(),
      },
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} noValidate>
      <InputField
        type="text"
        title="Name"
        error={errors.Name}
        register={register}
        pattern={nameRegex}
        required
      />
      <InputField
        type="email"
        title="Email"
        error={errors.Email}
        register={register}
        pattern={emailRegex}
        required
      />
      <InputField type="text" title="Message" error={errors.Message} register={register} required />
      <SubmitButton text="Submit" />
    </FormContainer>
  )
}

export default ContactForm
