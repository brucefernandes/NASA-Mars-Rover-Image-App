import React, { Component } from 'react'
import ImageContainer from './ImageContainer'
import '../styles/ImageFeed.css'
import FavoriteIcon from '@mui/icons-material/Favorite';



export default class ImageFeed extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            likedItems: [],
            isLoaded: false,
        }
    }

    addLikedItem = (item) =>{
		let new_liked_items = [...this.state.likedItems, item];
        localStorage.setItem(JSON.stringify(item.id), JSON.stringify(true));
		this.setState({
			likedItems: new_liked_items
		})

	}
    deletedLikedItem = (id) =>{

        let new_liked_items = this.state.likedItems.filter( t =>{
            if(t.id == id){ return false}
            else{return true}
        })
        localStorage.removeItem(JSON.stringify(id))

        this.setState({
            likedItems: new_liked_items
        })

    }


    getFeed = async () => {
        const response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=1wxMKNhSBgLJq1Qj2CflBRu11coBP3w7CDNAFbey&page=1`, {
            method: 'GET', 
            header: {
                "Content-type": 'application/json; charset=UTF-8'
            }
        })
        const data = await response.json()
        this.setState({ items: data, isLoaded: true })
    }

    async componentDidMount() {
            await this.getFeed()
    }
    

    render() {
        let { items , isLoaded} = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else{
            return (
                <div>
                    <span>
                        <div className="imageFeed__counter">
                            <FavoriteIcon fontSize="large" style={{fill: "#f2495a"}}/>
                            <div className="imageFeed_counter_text">{localStorage.length}</div>

                        </div>
                        <div className="imageFeed__feed">
                            {items.photos.map(imageData => {
                                return (<ImageContainer deleteLikedItem={this.deletedLikedItem} addLikedItem={this.addLikedItem} image={imageData}/>)
                            })}
                        </div>
                    </span>

                </div>

                
                
            )
        }
    }
}
