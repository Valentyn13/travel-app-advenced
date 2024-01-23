import { Link, useNavigate  } from "react-router-dom";
import { ROUTES } from "../../types/routes.types";
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IUser } from "../../types/user.types";
import { isValidEmail, isPasswordLenghtValid } from "../../helpers/email.helpers";
import Button from "../../components/common/button/button";
import Input from "../../components/common/input/input";
import Label from "../../components/common/label/label";

type Props ={
  setUser:Dispatch<SetStateAction<IUser | null>>
}

const SignInPage:FC<Props> = ({setUser}) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const handleEmailInput = (e:ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const handlePasswordInput = (e:ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)

  const handleValidateEmail= () => {
    const valid = isValidEmail(email)
    setValidEmail(valid)
  }

  const handlePasswordValidate = () => {
    const valid = isPasswordLenghtValid(password)
    setPasswordValid(valid)
  }

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setUser({
      fullName: 'Test',
      email,
      password,
      id: self.crypto.randomUUID()
    })
    navigate(ROUTES.MAIN)
  }

    return(
        <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form onSubmit={handleSubmit} className="sign-in-form" autoComplete="off">
          <h2 className="sign-in-form__title">Sign In</h2>
          <Label className="input" name="Email" isInputError={!validEmail} errorMessage="Email is not valid">
          <Input
            testId="auth-email"
            name="email"
            type="email"
            onChange={handleEmailInput}
            onBlur={handleValidateEmail}
            required
            value={email}
            />
          </Label>
          <Label className="input" name="Password" isInputError={!passwordValid} errorMessage="Password must have from 3 to 20 characters">
          <Input
            value={password}
            onChange={handlePasswordInput}
            onBlur={handlePasswordValidate}
            testId="auth-password"
            name="password"
            type="password"
            required
            />
          </Label>
          <Button
            type="submit"
            testId="auth-submit"
            disabled={!validEmail || !passwordValid}
            children={'Sign In'}
          />
        </form>
        <span>
          Don't have an account?
          <Link
            data-test-id="auth-sign-up-link"
            to={ROUTES.SIGN_UP}
            className="sign-in-form__link"
          >
            Sign Up
          </Link>
        </span>
      </main>
    )
}

export default SignInPage;