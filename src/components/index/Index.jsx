import React, { Component } from "react"
import { ReactDOM } from "react-dom"
import './Index.less'
import Top from '../top/Top'
import Player from '../player/Player'
import Ranking from '../ranking/Ranking'

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render()  {
        return (
            <div className="Index">
                <Top />
                <Player />
            </div>
        )
    }
}

export default Index
