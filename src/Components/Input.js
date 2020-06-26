import React from 'react'
import LBL from '../Firebase/keys'
import { useForm } from 'react-hook-form'

const InputComponent = ({ refr, label, ...inputProps }) => (
  <React.Fragment>
    <label >
      {label}
      <input ref={refr} name={label} {...inputProps} />
    </label>
    <br />
  </React.Fragment>
)

const UserDetailForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputComponent type="email" refr={register({})} label={LBL.Email} placeholder="Email" required />
      <InputComponent type="password" refr={register({})} label={LBL.Password} placeholder="Password" required />
      <InputComponent type="text" refr={register({})} label={LBL.First} />
      <InputComponent type="text" refr={register({})} label={LBL.Last} />
      <InputComponent type="number" refr={register({})} label={LBL.Age} />
      <InputComponent type="text" refr={register({})} label={LBL.Address} />
      <InputComponent type="number" refr={register({})} label={LBL.Phone} />
      <InputComponent type="file" refr={register({})} label={LBL.Profile} />

      <button type="submit">Sign Up</button>
    </form>
  )
}

export default UserDetailForm