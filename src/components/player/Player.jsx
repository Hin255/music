import React, { Component } from "react"
import { ReactDOM } from "react-dom"
import PropTypes from 'prop-types'
import { Icon } from "antd"
import Item from '../ranking/container/item/Item'
import './Player.css'

import store from '../store'

class Player extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pause: true,
            music: {},
            musicList:[],
            musicArray: [],
            duration: null,
            durationSecond: null,
            currentTime: 0,
            volume: 0,
            showPlayList: false,
            audio: new Audio(),
        }
    }

    static propTypes = {
        music: PropTypes.object,
    }

    setAudioSource = (src) => {
        let audio = this.state.audio
        audio.src = src
    }

    play = () => {
        let audio = this.state.audio
        if (audio.src && audio.paused) {
            audio.play()
            this.setState({
                pause: false
            })
        }
    }

    pause = () => {
        let audio = this.state.audio
        if (audio.src && !audio.paused) {
            audio.pause()
            this.setState({
                pause: true
            })
        }
    }

    setPlayMode = (mode) => {
        let audio = this.state.audio
        let musicList = this.state.musicList
        switch (mode) {
            case 'loop': // 单曲循环
                audio.loop = true
                break
            case 'listLoop':
                break
            case 'once':
                audio.loop = false
                break
            case 'random':
                break
            case 'order':
                break
        }
    }

    getDuration = () => {
        let audio = this.state.audio
        let second = audio.duration
        let d = (second / 60).toString().replace('.', ':').substr(0, 4)
        if (audio.src) {
            this.setState({
                duration: d,
                durationSecond: second,
            })
        }
    }

    getCurrentTime = () => {
        let audio = this.state.audio
        if (audio.src) {
            this.setState({
                duration: audio.currentTime
            })
        }
    }

    setCurrentTime = (time) => {
        let audio = this.state.audio
        if (time <= audio.duration) {
            this.state.audio.currentTime = time
            this.music.currentTime = time
        }
    }

    initMusicAndPlay = (src) => {
        this.setAudioSource(src)
        setTimeout(this.getDuration, 1000)
        this.play()
    }

    addMusicToPlayer = (music) => {
        let musicArray = this.state.musicArray
        let musicList = this.state.musicList
        if (music instanceof Array) {
            musicList.concat(music)
            music.map((d) => {
                musicArray.push(<Item id={d.id} name={d.name} singer={d.singer} cover={d.cover} />)
            })
        } else if (music instanceof Object) {
            musicList.push(music)
            let d = music
            console.log('dddde', d) 
            musicArray.push(<Item id={d.id} name={d.name} singer={d.singer} cover={d.cover} />)
        }
        this.setState({
            musicArray: musicArray,
        })
        console.log('musicArray', musicArray)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            let data = store.getState()
            this.setState({ 
                music: data.music 
            })
            this.initMusicAndPlay(data.music.src)
            console.log('data.music', data.music)
            this.addMusicToPlayer(data.music)
        })
    }
    componentWillUnmount() {
        this.unsubscribe()
    }

    clickPlayList = () => {
        this.setState({
            showPlayList: !this.state.showPlayList
        })
    }

    render() {
        const pause = this.state.pause
        const duration = this.state.duration
        const music = this.state.music
        const name = music.name
        const singer = music.singer
        const cover = music.cover
        const showPlayList = this.state.showPlayList
        const musicArray = this.state.musicArray
        
        return (
            <div className="player">
                <div>
                    <img src={cover} alt=""/>
                </div>
                <div class="music-ctrl">
                    <Icon type="step-backward" style={{ fontSize: '30px', color: '#001529' }} />
                    <Icon className={pause ? 'show' : 'hidden'} onClick={this.play} type="play-circle" style={{ fontSize: '40px', color: '#001529' }} />
                    <Icon className={!pause ? 'show' : 'hidden'} onClick={this.pause} type="pause-circle" style={{ fontSize: '40px', color: '#001529' }} />
                    <Icon type="step-forward" style={{ fontSize: '30px', color: '#001529' }} />
                </div>
                <div class="info">
                    <span>{name}</span>
                    <span>{singer}</span>
                </div>
                <div class="progress">
                    <span class="start"></span>
                    <div class="progress-bar">
                        <div class="now"></div>
                    </div>
                    <span class="end"></span>
                    <span>{duration}</span>
                </div>
                <div class="hand" title="展开播放条">
                    <Icon onClick={this.clickPlayList} style={{marginRight: 200}} type="unordered-list" />
                </div>
                <div className={showPlayList ? 'show' : 'hidden'} style={{position:'fixed', backgroundColor: '#000', opacity: '0.9', height: 300, width: 1000, bottom: 60}}>
                    <div>
                        <table>
                            <tbody>
                                {musicArray}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        歌词
                    </div>
                </div>
            </div>
        )
    }
}

export default Player
