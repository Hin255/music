import React, { Component } from 'react'
import { Icon } from 'antd'
import { Avatar} from 'antd'
import PropTypes from 'prop-types'
import getMusicSource from '../../../../api/player'


class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            musicSource: null,
            id: null,
            name: null,
            singer: null,
            time: null,
            cover:  null,
        }
    }

    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        person: PropTypes.string,
        time: PropTypes.string,
        cover: PropTypes.string,
    }
    componentWillMount() {
        this.state.id = this.props.id
    }

    getMusic = () => {
        let that = this
        let id = this.state.id
        getMusicSource(id, function(res){
            let data = res.data.data
            let music = data[0]
            if (music.url) {
                that.setState({
                    musicSource: music.url
                })
            }

        })
    }

    render() {
        return (
            <tr style={{height: 50}}>
                <td>1</td>
                <td>
                    <img src="" alt=""/>
                    <Icon type="play-circle" onClick={this.getMusic} />
                    <span>{this.props.name}</span>
                </td>
                <td>
                    <span>{this.props.time}</span>
                </td>
                <td>
                    <Icon type="play-circle" />
                    <Icon type="plus" />
                    <Icon type="download" />
                </td>
                <td>
                    <a href="">{this.props.person}</a>
                    <a href="">歌手</a>
                </td>
            </tr>
        )
    }
}

export default Item