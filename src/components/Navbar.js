import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import '../styles/Navbar.css'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import ImageFeed from "./ImageFeed";
import LikedFeed from './LikedFeed';

const Navbar = () => {
    const [value, setValue] = useState(0)

    const routes = ["/imageFeed", "/likedFeed"]
    const handleOnClickTab = (e, newValue) =>{
        setValue(newValue);
    }
    return (
        <div>
            <BrowserRouter>
                <Route path="/" render={(history) => (
                    <AppBar className="navbar_appbar" position="static" style={{backgroundColor: '#130c4a', boxShadow: "0px 0 px 0px 0px"}}>
                        <Toolbar>
                            <Typography>NASA Rover Image Feed</Typography>
                            
                            <Tabs indicatorColor='secondary' onChange={handleOnClickTab} value={history.location.pathname !== "/" ? history.location.pathname : false} textColor='inherit' >
                                <Tab disableRipple label='Home Feed' component={Link} to={routes[0]}/>
                                <Tab disableRipple label='Liked Images' component={Link} to={routes[1]} />

                            </Tabs>

                        </Toolbar>
                    </AppBar> 

                )}>


                </Route>

                <Switch>
                    <Route path="/imageFeed" component={ImageFeed}/>
                    <Route path="/likedFeed" component={LikedFeed}/>
                </Switch>
                
            </BrowserRouter>
        </div>
    )
}

export default Navbar
