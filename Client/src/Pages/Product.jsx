import React, { Component } from 'react'

export class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    componentDidMount () {
        const url = 'https://jsonplaceholder.typicode.com/posts' ;
        fetch(url).then(res => res.json())
        .then((result) => {
            this.setState({data:result})
        })
    }

    // console.log(this.state.data)

    render() {
        return (
            <div>
                {this.state.data.map(ty => (
                    <li>{ty.title.toUpperCase()}</li>
                ))}
            </div>
        )
    }
}

export default Product
