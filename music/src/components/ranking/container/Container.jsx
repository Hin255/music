import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Avatar, Button } from 'antd'
import Synopsis from './synopsis/Synopsis'
import Item from './item/Item'
const { Header, Sider, Content } = Layout

class Container extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = [
        {
            name: '芒种',
            time: '3:36',
            person: '赵芳静',
            src: '',
        }, 
        {
            name: '123',
            time: '3:36',
            person: '赵芳静',
            src: '',
        }, 
        {
            name: '芒种3345',
            time: '3:36',
            person: '赵芳静',
            src: '',
        }]
        const list = data.map((d) =>
            <Item name={d.name} time={d.time} person={d.person} src={d.src} />
        )
        return (
            <Layout>
                <Synopsis />
                <Content>{ list }</Content>
            </Layout>
        )
    }
}

export default Container