import { Link, useNavigate  } from "react-router-dom";
import { ROUTES } from "../../types/routes.types";
import { FormEvent } from "react";

const SignInPage = () => {
  const navigate = useNavigate()

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    navigate(ROUTES.MAIN)
  }
    return(
        <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form onSubmit={handleSubmit} className="sign-in-form" autoComplete="off">
          <h2 className="sign-in-form__title">Sign In</h2>
          <label className="input">
            <span className="input__heading">Email</span>
            <input data-test-id="auth-email" name="email" type="email" required />
          </label>
          <label className="input">
            <span className="input__heading">Password</span>
            <input
              data-test-id="auth-password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
            />
          </label>
          <button data-test-id="auth-submit" className="button" type="submit">
            Sign In
          </button>
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