import React from "react";
import styled, {css} from "styled-components";



const Card: React.FC<CardPropsType> = function ({image, title, description}) {
    return (
        <Article>
            <Image src={image} alt='image'/>
            <Section>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Button primary >See more</Button>
                <Button>Save</Button>
            </Section>
        </Article>
    )
}

export default Card

const Article = styled.article`
    max-width: 300px;
    width: 100%;
    padding: 10px 10px 22px 10px;
    background-color: #FFFFFF;
    box-sizing: border-box;
    border-radius: 15px;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);

    button + button {
        margin-left: 12px;
    }

`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`
const Section = styled.section`
    padding: 0 10px
`
const Title = styled.h1`
    color: rgb(0, 0, 0);
    font-family: Inter, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    text-align: left;
    margin: 20px 0;
`
const Description = styled.h2`
    color: rgb(171, 179, 186);
    font-family: Inter, sans-serif;
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    text-align: left;
    margin-bottom: 20px;
`
const Button = styled.button<{primary?: boolean }>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid rgb(78, 113, 254);
    background: #FFFFFF;
    color: #4E71FE;
    font-family: Inter, sans-serif;
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    
    ${props => props.primary && css`
        border: transparent;
        background: #4E71FE;
        color: #FFFFFF;
    `}
`


type CardPropsType = {
    image: string
    title: string
    description: string
}