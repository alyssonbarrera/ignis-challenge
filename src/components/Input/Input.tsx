import { forwardRef, ForwardRefRenderFunction, useState } from "react"
import { FieldError } from "react-hook-form"
import { InputError, InputIcon, InputLabel, InputStyled } from "./Input.styles"

interface InputProps {
    name: string
    type: string
    label?: string
    placeholder?: string
    error?: FieldError
    variant?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
        {
            name,
            type,
            label,
            placeholder, 
            error = null,
            variant,
            ...rest
        }, ref
    ) => {
    
    const [visiblePassword, setVisiblePassword] = useState(false)

    return (
        <InputLabel htmlFor={name}>
            {label}
            <InputStyled
                name={name}
                type={
                    type === 'password' && !visiblePassword ? 'password' : 'text'
                }
                id={name}
                variant={variant}
                placeholder={placeholder}
                error={error}
                ref={ref}
                {...rest}
            />
            {
                variant === 'search' ? (
                    <InputIcon
                        src="/Search.svg"
                        alt="Ícone de lupa"
                        variant="search"
                    />
                ) : type === 'password' && !visiblePassword ? (
                    <InputIcon
                        src="/Eye.svg"
                        alt="Ícone mostrar senha"
                        variant="password"
                        onClick={() => setVisiblePassword(!visiblePassword)}
                    />
                ) : type === 'password' && visiblePassword && (
                    <InputIcon
                        src="/Eye-slash.svg"
                        alt="Ícone ocultar senha"
                        variant="password"
                        onClick={() => setVisiblePassword(!visiblePassword)}
                    />
                )
            }
            { error && <InputError>{error.message}</InputError> }
        </InputLabel>
    )
}

export const Input = forwardRef(InputBase)