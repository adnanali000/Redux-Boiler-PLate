import React from 'react'

class Child extends React.Component{

    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps children',props);
        return null

    }

    componentWillUnmount(){
        console.log('component deleted');
    }
    render(){
        return(
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

export default Child;