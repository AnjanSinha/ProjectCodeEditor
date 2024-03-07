import { useState } from 'react';
import {Box, styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../../App.css'

const Container = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 8px 8px;
`


const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    padding: 9px 12px;
`

const Header = styled(Box)`
    display: flex;
    background: #060606;
    color: #AAAEBC;
    justify-content: space-between;
    font-weight: 700;
`

const Editor =({heading, logo, color, value, onChange})=>{

    const handleChange =(editor, data, value) =>{
        onChange(value)
    }
    const [open, setOpen] = useState(true)    
    

    return(
        <Container style={open? null : {flexGrow: 0}}>
            <Header>
                <Heading>
                    {logo}
                    {heading}
                </Heading>
                <CloseFullscreenIcon
                    fontSize='small'
                    style={{alignSelf: 'center'}}
                    onClick={()=>setOpen(prevState => !prevState)}
                        />
            </Header>
            <ControlledEditor 
                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{theme: 'material',
                          lineNumbers: true}}/>           
        </Container>
    )
}

export default Editor;