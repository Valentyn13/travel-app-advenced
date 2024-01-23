import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../types/routes.types";
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IUser } from "../../types/user.types";
import { isPasswordLenghtValid, isValidEmail } from "../../helpers/email.helpers";
import Button from "../../components/common/button/button";
import Input from "../../components/common/input/input";

type Props ={
  setUser:Dispatch<SetStateAction<IUser | null>>
}

const SignUpPage:FC<Props> = ({ setUser}) => {
  const navigate = useNavigate()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [validEmail, setValidEmail] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const handleFullNameInput = (e:ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value
    setFullName(name)
  }
  const handleEmailInput = (e:ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setEmail(email)
  }

  const handlePasswordInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUser({
      fullName,
      email,
      password,
      id: self.crypto.randomUUID()
    })
    navigate(ROUTES.MAIN)
  }


  const handleValidateEmail= () => {
    const valid = isValidEmail(email)
    setValidEmail(valid)
  }

  const handlePasswordValidate = () => {
    const valid = isPasswordLenghtValid(password)
    setPasswordValid(valid)
  }

  return (
    <main className="sign-up-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form onSubmit={handleSubmit} className="sign-up-form" autoComplete="off">
        <h2 className="sign-up-form__title">Sign Up</h2>
        <label className="input">
          <span className="input__heading">Full name</span>
          <Input
            onChange={handleFullNameInput}
            testId="auth-full-name"
            name="full-name"
            type="text"
            required
            value={fullName}
          />
        </label>
        <label className="input">
          <span className="input__heading">Email</span>
          <Input
          name="email"
          type="email"
          onChange={handleEmailInput}
          onBlur={handleValidateEmail}
          required
          value={email}
          testId="auth-email"
          />
          {!validEmail && (<div>Email is not valid</div>)}
        </label>
        <label className="input">
          <span className="input__heading">Password</span>
          <Input
            onChange={handlePasswordInput}
            onBlur={handlePasswordValidate}
            testId="auth-password"
            name="password"
            type="password"
            required
            value={password}
          />
          {!passwordValid && (<div>Password must have from 3 to 20 characters</div>)}
        </label>
        <Button 
          children="Sign Up"
          disabled={!validEmail || !passwordValid}
          type="submit"
          testId="auth-submit"
          />
      </form>
      <span>
        Already have an account?
        <Link
          data-test-id="auth-sign-in-link"
          to={ROUTES.SIGN_IN}
          className="sign-up-form__link"
        >
          Sign In
        </Link>
      </span>
    </main>
  );
};

export default SignUpPage;
