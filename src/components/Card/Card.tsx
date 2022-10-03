import { memo, useState } from "react"
import { Progress } from 'antd';
import { CardContainer, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardParagraph, CardStatus, CardStatusPercentage, CardTitle } from "./Card.styles"

interface CardProps {
    id: number
    title: string
    overview: string
    poster_path: string
    vote_average: number
}

const CardComponent = ({ id, title, overview, poster_path, vote_average }: CardProps) => {
    
    const [currentFilm, setCurrentFilm] = useState(0)

    return (
        <CardContainer focus={
            currentFilm === id
        }>
            <CardHeader>
                <CardImage src={ poster_path ?? 'Placeholder.png' } alt="Pôster do filme" /> 
            </CardHeader>
                <CardStatus>
                    <Progress
                        className="progress"
                        type="circle"
                        strokeColor={{
                            '0%': '#F52D2D',
                            '100%': '#3A2FAF',
                        }}
                        percent={vote_average * 10}
                        status="active"
                        width={40}
                        trailColor="black"
                        style={
                            {
                                borderRadius: "100%",
                                backgroundColor: "black"
                            }
                        }
                    />
                </CardStatus>
            <CardContent>
                <CardTitle>
                    {
                        currentFilm === id ? title : title.length > 14 ? title.slice(0, 14) + "..." : title
                    }
                </CardTitle>
                <CardDescription>
                    {
                        currentFilm === id ? overview : overview.slice(0, 100) + "..."
                    }
                </CardDescription>
            </CardContent>
            <CardFooter>
                <CardParagraph
                    onClick={
                        () => currentFilm === id ? setCurrentFilm(0) : setCurrentFilm(id)
                    }
                >
                    {
                        currentFilm === id ? "Ver menos" : "Ver mais"
                    }
                </CardParagraph>
            </CardFooter>
        </CardContainer>
    )
}

export const Card = memo(CardComponent, (prevProps, nextProps) => {
    return prevProps.id === nextProps.id
})