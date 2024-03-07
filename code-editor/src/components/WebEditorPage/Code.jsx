
import Editor from "./Editor";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCss3Alt, faHtml5, faJs} from '@fortawesome/free-brands-svg-icons'
import {Box, styled} from '@mui/material'
import { useContext } from "react";
import {DataContext} from '../../context/WebEditorPage/DataProvider'

const Container =styled(Box)`
    display: flex;
    background-color: #060606;
    height: 60vh;
`

const Code =() =>{

    const {html, setHtml, css, setCss, js, setJs} = useContext(DataContext)
    return(
        <Container>
            <Editor
                heading ='HTML'
                logo ={<FontAwesomeIcon icon={faHtml5} style={{color: "#ff0000", fontSize: 20, paddingRight: 5}} />}
                color ="#ff0000"
                value ={html}
                onChange ={setHtml}/>
            <Editor
                heading ='CSS'
                logo ={<FontAwesomeIcon icon={faCss3Alt} style={{color: "#005eff", fontSize: 20, paddingRight: 5}} />}
                color ="#ffc800"
                value ={css}
                onChange ={setCss}/>
            <Editor
                heading ='JavaScript'
                logo ={<FontAwesomeIcon icon={faJs} style={{color: "#FFD43B", fontSize: 20, paddingRight: 5}}/>}
                color ="#ff0000"
                value ={js}
                onChange ={setJs}/>
        </Container>
    )
}

export default Code;