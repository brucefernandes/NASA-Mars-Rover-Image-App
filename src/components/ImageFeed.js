import React, { Component } from 'react'
import ImageContainer from './ImageContainer'
import { ImageList } from '@mui/material';


export default class ImageFeed extends Component {
    constructor() {
        super()
        this.state = {
            items: [],
            isLoaded: false
        }
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
                    {items.photos.map(imageData => {
                        return (<ImageContainer image={imageData}/>)
                    })}
                </div>
                
                
            )
        }
    }
}
