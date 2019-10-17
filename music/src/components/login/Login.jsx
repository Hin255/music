import React, { Component } from 'react'
import { Modal, Button } from 'antd'
import { Input } from 'antd'
import PropTypes from 'prop-types'

class Login extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            })
        }, 2000)
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        })
    }

    render() {
        const { visible, confirmLoading, ModalText } = this.state
        return (   
            <div className="">
                <Button type="primary" onClick={this.showModal}>
                    登录
                </Button>
                <Modal
                    title="用户登录"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    okText="登录"
                    cancelText="取消"
                >
                    <Input placeholder="username" />
                    <Input.Password placeholder="password" />
                </Modal>
            </div>
        )
    }
}

export default Login