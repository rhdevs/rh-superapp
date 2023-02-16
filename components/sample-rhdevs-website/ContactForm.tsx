import axios from 'axios'
import { FieldValues, useForm } from 'react-hook-form'
import styled from 'styled-components'
import InputField from './InputField'
import SubmitButton from './SubmitButton'
import { emailRegex, nameRegex } from '@/texts/sample-rhdevs-website/errors/formErrors'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 29px;
  Button {
    margin: 40px;
  }
`

// const TextContainer = styled.div`
//   font-size: 24px;
//   margin: 35px 0px;
//   align-self: flex-start;
// `

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
    })
    // .then((response) => {
    //   // console.log(response)
    // })
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
