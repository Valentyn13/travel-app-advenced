import { Link, useNavigate  } from "react-router-dom";
import { ROUTES } from "../../types/routes.types";
import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { IUser } from "../../types/user.types";
import { isValidEmail, isPasswordLenghtValid } from "../../helpers/email.helpers";
import Button from "../../components/common/button/button";
import Input from "../../components/common/input/input";
type Props ={
  setUser:Dispatch<SetStateAction<IUser | null>>
}

const SignInPage:FC<Props> = ({setUser}) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [validEmail, setValidEmail] = useState(false)
  const [passwordValid, setPasswordValid] = useState(false)

  const handleEmailInput = (e:ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value
    setEmail(email)
  }

  const handlePasswordInput = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
  }


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
    navigate(ROUTES.MAIN)
  }


    return(
        <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form onSubmit={handleSubmit} className="sign-in-form" autoComplete="off">
          <h2 className="sign-in-form__title">Sign In</h2>
          <label className="input">
            <span className="input__heading">Email</span>
            <Input
            testId="auth-email"
            name="email"
            type="email"
            onChange={handleEmailInput}
            onBlur={handleValidateEmail}
            required
            value={email}
            />
            {!validEmail && (<div>Email is not valid</div>)}
          </label>
          <label className="input">
            <span className="input__heading">Password</span>
            <Input
            value={password}
            onChange={handlePasswordInput}
            onBlur={handlePasswordValidate}
            testId="auth-password"
            name="password"
            type="password"
            required
            />
            {!passwordValid && (<div>Password must have from 3 to 20 characters</div>)}
          </label>
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