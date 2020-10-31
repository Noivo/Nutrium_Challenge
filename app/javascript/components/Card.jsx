import  React, {useState, useEffect} from "react"
import styled from 'styled-components'
import PropTypes from 'prop-types'
import {IconContext}  from "react-icons"

import {FaRegAddressBook, FaMapMarkerAlt, FaMoneyBillAlt} from "react-icons/fa"

const CardBoard = styled.div`
    background-color: white;
    margin: 50px 30px;
`
const Format1 = styled.div`
    display:flex;
    justify-content: flex-start;
    margin: 20px 10px;
    
`

const ImagePerfil = styled.img`
    border-radius: 50%;
    margin: 10px 20px;
    max-height: 100px;
`

const FormatText = styled.div`
    display: flex;
    flex-direction:column;
    align-self: center;
`

const TextGreen = styled.div`
    color: Green;
    font-size: 25px;
`

const TextOrange = styled.div`
    color: Orange;
    
`

const FormatButtons = styled.div`
    margin-left:auto;
    display:flex;
    flex-direction:column;
    align-self: center;
    margin-right: 20px;

`
const ButtonOrange = styled.button`
    height: 30px;
    width: 180px;
    margin: 2px;
    border: none;
    color: #f48c25;
    background-color: #fbd9b6;
    border-radius: 3px;
    transition:transform .2s;

    &:hover {
        transform: rotate(20deg) scale(1.1);
    }
`
const ButtonBlue = styled(ButtonOrange)`
    color: #4da6ff;
    background-color: #99ebff
`

const Format2 = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin: 20px 10px;
`
const FormatAddress = styled.div`
    display: flex;
    flex-direction: column;
`

const ImageDistance = styled.div`
    margin-right: 5px;
    margin-top: 5px;
`
const ClinicName = styled.div`
    color: green;
    margin-top:5px;
`
const SmallText = styled.div`
    color: gray;
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 21px;
`
const SmallTextPrice = styled.div`
    color: gray;
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
`

const FormatPrice = styled(FormatAddress)``

const FormatSelect = styled.select`
    border: none;
    color: grey;

    &:focus{
        outline:none;
    }
`

const FormatIconText =styled.div`
    display:flex;
`


function Card(props) {
    const [valuesAvailable, setvaluesAvailable] = useState([])
    const [value, setValue] = useState("")
    const [priceSelect, setPriceSelect]= useState("")

    useEffect(() => {
        setvaluesAvailable(props.appointments)
        setPriceSelect(props.appointments[0].price)
    }, [])

    const handleChange = e => {
        setValue(e.target.value)
        const newValue = valuesAvailable.filter(values => values.session === e.target.value).map(value => value.price)
        setPriceSelect(newValue)
    }
    
    const options = valuesAvailable.map(values => <option value={values.session} key={values.id}>{values.session}</option>)

    return(
        <>
        <CardBoard>
            <Format1>
                <ImagePerfil src={props.nutritionists[0].image_url} alt="nutritionist_photo"></ImagePerfil>
                <FormatText>
                    <TextGreen>{props.nutritionists[0].name}</TextGreen>
                    <TextOrange>Nutricionista - {props.nutritionists[0].number}N</TextOrange>
                </FormatText>
                <FormatButtons>
                    <ButtonOrange>Marcar Consulta</ButtonOrange>
                    <ButtonBlue>Página Pessoal</ButtonBlue>
                </FormatButtons>
            </Format1>            
            <Format2>
                <FormatAddress>
                    <FormatIconText>
                    <ImageDistance>
                        <IconContext.Provider value={{ color: "#b3d9ff"}}>
                            <div>
                                <FaMapMarkerAlt />
                            </div>
                        </IconContext.Provider>
                    </ImageDistance>
                        <ClinicName>{props.clinicsLocation[0].name}</ClinicName>
                    </FormatIconText>
                    <SmallText>{props.clinicsLocation[0].street}, {props.clinicsLocation[0].parish}</SmallText>
                    <SmallText>{props.clinicsLocation[0].county}, {props.clinicsLocation[0].district}</SmallText>
                   
                </FormatAddress>
                
                <FormatPrice>
                    <FormatIconText>
                        <ImageDistance>
                            <IconContext.Provider value={{ color: "#b3d9ff"}}>
                                <div>
                                    <FaRegAddressBook />
                                </div>
                            </IconContext.Provider>  
                        </ImageDistance>   
                        <FormatSelect value={value} onChange={handleChange}>
                            {options}
                        </FormatSelect>                                     
                    </FormatIconText>
                    <FormatIconText>
                        <ImageDistance>
                            <IconContext.Provider value={{ color: "#b3d9ff"}}>
                                <div>
                                    <FaMoneyBillAlt />
                                </div>
                            </IconContext.Provider> 
                        </ImageDistance>                  
                        <SmallTextPrice>{priceSelect}€</SmallTextPrice>
                    </FormatIconText>
                </FormatPrice>
            </Format2>
        </CardBoard>
        </>
    )
}

export default Card