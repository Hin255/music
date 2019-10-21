import React, { Component } from "react"
import { ReactDOM } from "react-dom"
import PropTypes from 'prop-types'
import { Icon } from "antd"
import './Player.css'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: null,
            pause: false
        }
    }

    static propTypes = {
        src: PropTypes.string,
    }

    clickHandler = () => {
        let p = this.state.pause
        this.setState({
            pause: !p
        })
    }

    render() {
        const pause = this.state.pause
        return (
            <div className="player">
                <div class="music-ctrl">
                    <Icon type="step-backward" style={{ fontSize: '30px', color: '#001529' }} />
                    <Icon className={pause ? 'show' : 'hidden'} onClick={this.clickHandler} type="play-circle" style={{ fontSize: '40px', color: '#001529' }} />
                    <Icon className={!pause ? 'show' : 'hidden'} onClick={this.clickHandler} type="pause-circle" style={{ fontSize: '40px', color: '#001529' }} />
                    <Icon type="step-forward" style={{ fontSize: '30px', color: '#001529' }} />
                </div>
                <div class="hand" title="展开播放条"></div>
            </div>
        )
    }
}

export default Player
