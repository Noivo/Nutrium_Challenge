import React from 'react'
import styled from 'styled-components'
import arrow from "../../assets/images/right-arrow.png"

const Container = styled.div`
    margin: 20px 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    
    color: white;
`
const Title = styled.div`
    margin-right:auto;
    margin-left: 10px;
    
`

const Arrow = styled.img`
    transition:transform .2s;
    margin-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;

    &:hover {
        transform: rotate(20deg) scale(1.1);
    }
`

const Header = () => {
    return(
        <Container>
            <Title>nutrium</Title>
            <div>Are you a healthcare professional? Sign up here </div>
            <Arrow src={arrow} />
        </Container>
    )
}

export default Header;