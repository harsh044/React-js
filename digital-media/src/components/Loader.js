import React, { Component } from 'react'
import loading from './loading.gif'

export default class loader extends Component {
    render() {
        return (
            <div className="text-center mt-5">
                <img className="my-4" src={loading} alt="loading"/>
            </div>
        )
    }
}

