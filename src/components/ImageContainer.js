import React , {useState, useEffect} from 'react';
import '../styles/ImageContainer.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from '@mui/material/IconButton';
import Zoom from '@mui/material/Zoom';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.white,
      },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
    },
  }));

const ImageContainer = ({image, addLikedItem, deleteLikedItem}) => {

    const [liked, setLiked] = useState(false)

    
    useEffect(() =>{
        if(localStorage.getItem(image.id)) setLiked(true)        
    },[image.id, liked])

    const handleOnLike =  (event) => {
        setLiked(true) 
        addLikedItem(image);
        
	}

    const handleDisLike = (event) => {
        setLiked(false)
		deleteLikedItem(image.id);
		
	}


    return(
        <div className="imageContainer__container">
            <h4 className="imageContainer__cameraName"><strong>Camera name:</strong> {image.camera.full_name}</h4>
            <img
                className="imageContainer__image"
                src={image.img_src}
                alt={image.id}
            />
            <h5 className="imageContainer__roverName"><strong>Rover name:</strong> {image.rover.name}</h5>
            <h5 className="imageContainer__date"><strong>Date:</strong> {image.earth_date}</h5>
            
            <span>{JSON.parse(localStorage.getItem(image.id)) ? 

                        <LightTooltip  fontSizeTransitionComponent={Zoom} disableFocusListener title="Tap to Dislike!" arrow>
                            <IconButton onClick={handleDisLike} >
                                    <FavoriteIcon fontSize="large" style={{fill: "#f2495a"}}/>
                            </IconButton> 
                        </LightTooltip>
                        : 
                        <LightTooltip  TransitionComponent={Zoom} disableFocusListener title="Tap to Like!" arrow>
                            <IconButton onClick={handleOnLike}>
                                <FavoriteBorderIcon style={{fill: "#262525"}}fontSize="large"/>
                            </IconButton>
                        </LightTooltip>
                        }</span>
            

        </div>



               
    )
}
export default ImageContainer
