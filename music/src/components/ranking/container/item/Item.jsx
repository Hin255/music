import React, { Component } from 'react'
import { Icon } from 'antd'
import { Avatar} from 'antd'
import PropTypes from 'prop-types'

class Item extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <span>1</span>
                <Avatar style={{ backgroundColor: '#001529', height: 50, width: 50, }} shape="square">
                </Avatar>
                <span>{this.props.name}</span>
                <Icon type="play-circle" />
                <Icon type="plus" />
                <Icon type="download" />
                <a href="">{this.props.person}</a>
                <a href="">歌手</a>
            </div>
        )
    }
}

Item.propTypes = {
    name: PropTypes.string,
    person: PropTypes.string,
    time: PropTypes.string,
    src: PropTypes.string,
}


export default Item

