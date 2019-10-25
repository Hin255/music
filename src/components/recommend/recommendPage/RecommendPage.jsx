import React, { Component } from 'react'
import { Layout, Menu, Icon, Carousel } from 'antd'
import getBanner from '../../../api/recommend'

class RecommendPage extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            banners: [],
            images: [],
        }
    }

    componentWillMount() {
        let typeId = 0
        getBanner(typeId, (res) => {
            if(res.data.code == 200) {
                this.getCarousel(res.data.banners)
            }
        })
    }

    getCarousel = (banners) => {
        let images = this.state.images
        banners.map((o, key) => {
            images.push(<div key={key}>
                            <img src={o.imageUrl} alt="封面"/>
                        </div>)
        })
        console.log('images', images)
        this.setState({
            images: images
        })
    }

    render() {
        const images = this.state.images
        console.log('render image', images)
        return (
            <Layout>
                <Carousel autoplay style={{height: 400, width: 1080, margin: "0 auto"}}>
                    {images}
                </Carousel>
            </Layout>
        )
    }
}

export default RecommendPage