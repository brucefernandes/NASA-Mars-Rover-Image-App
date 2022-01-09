import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import '../styles/Navbar.css'



const Navbar = () => {
    const [value, setValue] = useState(0)

    const handleOnClickTab = (e, newValue) =>{
        setValue(newValue);
    }
    return (
        <div>
            <AppBar className="navbar_appbar" position="static" style={{backgroundColor: '#130c4a', boxShadow: "0px 0 px 0px 0px"}}>
                <Toolbar>
                    <Typography>NASA Rover Image Feed</Typography>
                    
                    <Tabs indicatorColor='secondary' onChange={handleOnClickTab} value={value} textColor='inherit' >
                        <Tab disableRipple label='Home Feed'/>
                        <Tab disableRipple label='Liked Images'/>

                    </Tabs>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
