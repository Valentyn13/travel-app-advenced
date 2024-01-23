import { FC, ReactNode } from "react"
import { Link } from "react-router-dom"

type Props = {
    to: string
    testId: string
    aditionClassNames?: string
    children: string | ReactNode
    state?: object
}

const LinkButton:FC<Props> = ({to, state, testId, aditionClassNames, children}) => {
    return(
        <Link
        to={to}
        data-test-id={testId}
        className={`button ${aditionClassNames}`}
        state={state}
      >
        {children}
      </Link>
    )
}


export default LinkButton