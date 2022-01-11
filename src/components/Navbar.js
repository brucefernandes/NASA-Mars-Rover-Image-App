import React from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import '../styles/Navbar.css'


const Navbar = () => {

    return (
        <div>
            <AppBar className="navbar_appbar" position="static" style={{backgroundColor: '#130c4a', boxShadow: "0px 0 px 0px 0px"}}>
                        <Toolbar>
                            <Typography>NASA Rover Image Feed</Typography>
                            <Tabs indicatorColor='secondary'  textColor='inherit' >
                                <Tab  label='Home Feed' />

                            </Tabs>

                        </Toolbar>
                    </AppBar>
        </div>
    )
}

export default Navbar
