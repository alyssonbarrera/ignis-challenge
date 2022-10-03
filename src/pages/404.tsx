import { NextPage } from "next";
import { NotFoundContainer, NotFoundText } from "../styles/404.styles";

const NotFound: NextPage = () => {
    return (
        <NotFoundContainer>
            <NotFoundText>404</NotFoundText>
        </NotFoundContainer>
    )
}

export default NotFound;