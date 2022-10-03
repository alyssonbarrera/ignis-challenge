import { PropsWithChildren } from "react"
import { ButtonStyled } from "./Button.styles"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: PropsWithChildren<any>
    loading?: boolean
}

export const Button = ({ loading, children , ...props }: ButtonProps) => {
    return (
        <ButtonStyled
            loading={loading ? true : undefined}
            {...props}
        >
            { children }
        </ButtonStyled>
    )
}