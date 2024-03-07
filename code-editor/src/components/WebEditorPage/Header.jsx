import {AppBar, Toolbar, styled} from '@mui/material';
import { useState } from 'react';
import DataObjectIcon from '@mui/icons-material/DataObject';
const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;    
`
const Header =() => {
    const [hover,setHover] = useState(false)
    let iconstyle ={
        backgroundColor: "",
        borderRadius: 5
    }
    if(hover){
        iconstyle.backgroundColor="#1d1e22"
    }
    else{
        iconstyle.backgroundColor=""
    }

    return(
        <Container position='static'>
            <Toolbar>
                    <DataObjectIcon style={iconstyle} onMouseOver={()=>setHover(true)} onMouseOut={()=>setHover(false)} />   
            </Toolbar>
        </Container>
    )
}

export default Header;