import React , {useState} from 'react';
import '../styles/ImageContainer.css'
import Button from '@mui/material/Button';



const ImageContainer = ({image, addLikedItem, deleteLikedItem}) => {

    const [liked, setliked] = useState(false)
    
    const handleOnLike = (event) => {
        event.preventDefault()
		addLikedItem(image);
        setliked(true)
		
	}

    const handleDisLike = (event) => {
        event.preventDefault()
		deleteLikedItem(image.id);
        setliked(false)
		
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
            
            <span>{liked ? <Button onClick={handleDisLike} >Unlike</Button> : <Button onClick={handleOnLike}>Like</Button>}</span>
            

        </div>



               
    )
}
export default ImageContainer
