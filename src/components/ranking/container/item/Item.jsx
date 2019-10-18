import React, { Component } from 'react'
import { Icon } from 'antd'
import { Avatar} from 'antd'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props)
    }

    propTypes = {
        name: PropTypes.string,
        person: PropTypes.string,
        time: PropTypes.string,
        src: PropTypes.string,
    }

    render() {
        return (
            <tr style={{height: 50}}>
                <td>1</td>
                <td>
                    <img src="" alt=""/>
                    <Icon type="play-circle" />
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

