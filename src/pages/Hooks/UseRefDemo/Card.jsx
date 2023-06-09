import React, { Component } from 'react'

export default class Card extends Component {
    state = {
        like: 1
    }

    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }
    render() {
        return (
            <div className="card">
                <img src="https://i.pravatar.cc?u=1" alt="" />
                <div className="card-body">
                    <h3>username</h3>
                    <p>Age: 19</p>
                    <div>
                        {this.state.like}  <i style={{ cursor: "pointer" }} onClick={this.handleLike} className='fa fa-heart text-danger display-4'></i>
                    </div>
                </div>
            </div>
        )
    }
}
