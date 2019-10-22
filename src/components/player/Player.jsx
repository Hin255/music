import React, { Component } from "react"
import { ReactDOM } from "react-dom"
import PropTypes from 'prop-types'
import { Icon } from "antd"
import './Player.css'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // src: null,
            src:    "http://m7.music.126.net/20191022172400/5e15d9a7a0f65905c958e34144cd1ceb/ymusic/025d/060f/5552/57889b144f1e3beccb57b81709c72094.mp3",
            pause: true,
            music: null,
            currentTime: 0,
            volume: 0,
        }
    }

    static propTypes = {
        music: PropTypes.object,
    }

    clickHandler = () => {
        this.playMusic()
    }

    getDuration = () => {
        let audio = document.querySelector('#id-audio')
        this.setState({
            duration: audio.duration,
        })
    }

    getCurrentTime = () => {
        let audio = document.querySelector('#id-audio')
        this.setState({
            currentTime: audio.currentTime
        })
    }

    getVolume = () => {
        let audio = document.querySelector('#id-audio')
        this.setState({
            volume: audio.volume
        })
    }

    componentDidMount() {
        this.getDuration()
        this.getVolume()
    }

    playMusic = () => {
        let audio = document.querySelector('#id-audio')
        let pause = this.state.pause
        if (pause) {
            audio.play()
        } else {
            audio.pause()
        }
        this.setState({
            pause: !pause
        })
    }

    render() {
        const pause = this.state.pause
        const source  = this.state.src
        const volume = this.state.volume
        const duration = this.state.duration
        return (
            <div className="player">
                <div class="music-ctrl">
                    <Icon type="step-backward" style={{ fontSize: '30px', color: '#001529' }} />
                    <Icon className={pause ? 'show' : 'hidden'} onClick={this.clickHandler} type="play-circle" style={{ fontSize: '40px', color: '#001529' }} />
                    <Icon className={!pause ? 'show' : 'hidden'} onClick={this.clickHandler} type="pause-circle" style={{ fontSize: '40px', color: '#001529' }} />
                    <Icon type="step-forward" style={{ fontSize: '30px', color: '#001529' }} />
                    <audio id="id-audio">
                        <source type="audio/mp3" src={source} />
                    </audio>
                </div>
                <div class="progress">
                    <span class="start"></span>
                    <div class="progress-bar">
                        <div class="now"></div>
                    </div>
                    <span class="end"></span>
                    <span>{duration}</span>
                </div>
                <div class="hand" title="展开播放条"></div>
            </div>
        )
    }
}

export default Player
