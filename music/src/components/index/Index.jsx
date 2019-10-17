import React, { Component } from "react"
import { ReactDOM } from "react-dom"
import './Index.less'
import Top from '../top/Top'
import Ranking from '../ranking/Ranking'

const Index = function(props) {
    return (
        <div className="Index">
            <Top />
            <Ranking />
        </div>
    )
}

export default Index
