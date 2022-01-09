import React from 'react';
// import styled from 'styled-components'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


// const ImageContainerStyles = styled.imageContainerStyles`



// `


const ImageContainer = (props) => {

    return(
        // <ImageListItem key={props.image.id}>
            // <img
            //     src={`${props.image.img_src}?w=164&h=164&fit=crop&auto=format`}
            //     // srcSet={`${props.image.img_src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            //     alt={props.image.id}
            //     loading="lazy"
            // />  
        //     <ImageListItemBar
        //         title={<span>Rover name: {props.image.rover.name}</span>}
        //         subtitle={<span>Camera Name: {props.image.camera.full_name}</span>}
        //         position="below"
        //     />
        // </ImageListItem>
        <Container fixed>
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
            <img
                src={`${props.image.img_src}?w=50&h=50&fit=crop&auto=format`}
                // srcSet={`${props.image.img_src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={props.image.id}
                loading="lazy"
            />  
        </Container>        
    )
}
export default ImageContainer
