import  React, {useState, useEffect} from "react"
import styled from 'styled-components'

import Header from "./Header"
import Card from "./Card"
import Footer from "./Footer"

import {IconContext}  from "react-icons"
import {FaSearch, FaMapMarkerAlt, FaCrosshairs} from "react-icons/fa"

const FormatMain = styled.div`
width: 700px;
margin: 0 auto;
`
const Green = styled.div`
    background-color: #50B5A2;
    position:relative;
    top:-22px;
`

const Grey = styled.div`
    background-color: #F8F8F8;
    position: relative;
    padding: 1px;
    top: -9px;
`

const Format = styled.form`
    height: 100px;
    margin: 10px 30px;
    display:flex;
    justify-content: space-around;
`

const Input = styled.input`
    height: 30px;
    border-radius-rigth-top: 3px;
    border-radius-rigth-bottom: 3px;
    width: 200px;
    border: none;
    
    &:focus{
        outline: none;
    }
`
const Button = styled.button`
    background-color: white;
    height: 32px;
    border: none;
    padding-bottom: 2px;

    
    &:focus{
        outline: none;
    }  
`

const ButtonSubmit = styled.button`
    height: 32px;
    width: 100px;
    border: none;
    background-color: #ffb3b3;
    color: white;
    border-radius: 3px;
    transition:transform .2s;

    &:hover {
        transform: rotate(20deg) scale(1.1);
    }
`

const Warning = styled.div`
    text-align: center;
    color: green;
    font-size: 30px;`

function Search() {
    const [allClinics, setAllClinics] = useState([]);
    const [allNutritionists, setAllNutritionists] = useState([]);
    const [allWorks, setAllWorks] = useState([]);
    const [allAppointments, setAllAppointments] = useState([]);
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [clinicsLocation, setClinicsLocation] = useState([]);
    const [nutritionists, setNutritionists] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [show, setShow] = useState(false);

useEffect(async () => {
    const requestClinics = await fetch("/clinics.json")
    const parseJsonClinics = await requestClinics.json();
    setAllClinics(parseJsonClinics);

    const requestNutritionist = await fetch("/nutritionists.json")
    const parseJsonNutritionist = await requestNutritionist.json()
    setAllNutritionists(parseJsonNutritionist)

    const requestWork = await fetch("/works.json")
    const parseJsonWork = await requestWork.json()
    setAllWorks(parseJsonWork)

    const requestAppointments = await fetch("/appointments.json")
    const parseJsonAppointments = await requestAppointments.json()
    setAllAppointments(parseJsonAppointments)
},[])

    const handleSubmit = e => {
        e.preventDefault();
        
        const clinicsLocaltions = allClinics.filter(clinic => clinic.district === location)
        setClinicsLocation(clinicsLocaltions)

        const nutritionistsID = allWorks.filter(worker => parseInt(worker.clinic_id) === clinicsLocaltions[0].id)        
        setNutritionists(allNutritionists.filter(nutritionist => nutritionist.id === parseInt(nutritionistsID[0].id)))

        setAppointments(allAppointments.filter(appointment => parseInt(appointment.clinic_id) === clinicsLocaltions[0].id))  
        setShow(true)
    }

    const displayCard = show ? <div><Grey>
        <FormatMain>
            <Card nutritionists={nutritionists} clinicsLocation={clinicsLocation} appointments={appointments} />
        </FormatMain>
    </Grey> 
    <FormatMain>
        <Footer/>
    </FormatMain></div> : <FormatMain><Warning>Select a Location<p>(Ex. Porto or Braga)</p></Warning></FormatMain>

    return(
        <>
            <Green>
            <FormatMain>
            <Header/>                
            <Format onSubmit={handleSubmit}>
            <div>
                <Button>
                <IconContext.Provider value={{ color: "#b3d9ff"}}>
                    <div>
                        <FaSearch />
                    </div>
                </IconContext.Provider>
                </Button>            
                <Input type="text" value={type} onChange={e => setType(e.target.value)} placeholder="Service" name="search"></Input>
            </div>    
            <div>
                <Button>
                <IconContext.Provider value={{ color: "#b3d9ff"}}>
                    <div>
                        <FaMapMarkerAlt />
                    </div>
                </IconContext.Provider>
                </Button>
                <Input type="text" value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" name="search"></Input>
                <Button>
                <IconContext.Provider value={{ color: "#50B5A2"}}>
                    <div>
                        <FaCrosshairs />
                    </div>
                </IconContext.Provider>
                </Button>
            </div>
            <ButtonSubmit value="Submit">Pesquisar</ButtonSubmit>


            </Format>
         </FormatMain>
        </Green>
        {displayCard} 
        </>
    )
}

export default Search;