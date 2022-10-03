import Link from "next/link"
import { LogoImage } from "./Logo.styles"

type LogoProps = {
    position?: string
}

export const Logo = ({ position }: LogoProps) => {
    return (
        <Link href="/">
            <LogoImage src="/Logo.png" alt="Logo da IgnisFlix" position={position} />
        </Link>
    )
}