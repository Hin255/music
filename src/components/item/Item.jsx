import React, { Component } from 'react'
import { Icon } from 'antd'
import { Avatar} from 'antd'
import PropTypes from 'prop-types'
import getMusicSource from '../../api/player'
import store from '../store'
import passMusic from '../action'
import './Item.css'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            music: {
                id: null,
                name: null,
                singer: null,
                cover: null,
            },
        }
    }

    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        singer: PropTypes.string,
        cover: PropTypes.string,
    }

    componentWillMount() {
        let p = this.props
        let m = this.state.music
        m.id = p.id
        m.name = p.name
        m.singer = p.singer
        m.cover = p.cover
    }

    getMusic = () => {
        let that = this
        let id = this.state.music.id
        getMusicSource(id, function(res){
            let data = res.data.data
            let m = data[0]
            if (m.url) {
                let music = that.state.music
                music.src = m.url
                that.setState({
                    music: music
                })
                store.dispatch(passMusic(music)) // 传递music
            }
        })
    }

    render() {
        let cover  = this.props.cover
        let name = this.props.name
        let singer = this.props.singer
        return (
            <tr style={{ height: 50 }}>
                <td className="td-1"></td>
                <td className="td-2">
                    <img src={cover} alt=""/>
                    <Icon   className="icon icon-play"
                            type="play-circle"
                            onClick={this.getMusic}
                    />
                    <span>{name}</span>
                </td>
                <td className="td-3">
                    <Icon className="icon" type="play-circle" />
                    <Icon className="icon" type="plus" />
                    <Icon className="icon" type="download" />
                </td>
                <td className="td-4">
                    <a href="">{singer}</a>
                </td>
            </tr>
        )
    }
}

export default Item