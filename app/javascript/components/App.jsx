import React from 'react'
import styled from 'styled-components'

import Search from "./Search"


const Container = styled.div`
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    position:relative;
    top:-22px;
`


function App() {
    return (
        <>
            <Container>
                <Search/>            
            </Container>
        </>
    )
}

export default App