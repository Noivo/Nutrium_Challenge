import  React, {useState} from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FormatNumber = styled.div`
    display:flex;
    margin: 20px 30px;

`

const Number = styled.button`
    color: gray;
    padding: 5px 10px;
    text-align: center;
    background-color: white;
    border:none;

    &:hover{
        color: green;
        background: #F8F8F8
    }

    &:focus{
        color: green;
        background: #F8F8F8;
        outline: none;
    }
`

function Footer() {

    return(
        <>
            <FormatNumber>
                <Number>1</Number>
                <Number>2</Number>
                <Number>3</Number>
                <Number>4</Number>
                <Number>{'>'}</Number>
            </FormatNumber>

        </>
    )
}

export default Footer;