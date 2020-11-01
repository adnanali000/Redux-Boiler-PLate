import React from 'react';
import Child from './components/child'
import {connect} from 'react-redux';
import {set_data} from './store/action';


class App extends React.Component{
  //mounting
  constructor(){
    super()
      this.state = {
        count:0
      }
      console.log('constructor'); //1
  }

  //update state
  // static getDerivedStateFromProps(props,state){
  //   console.log('get derived state from props'); //2
  //   console.log(state);
  //   return null
    
  // }

  //we use componentdidmount for api call
/*
  componentDidMount(){
    //console.log('component Did Mount'); //4
    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {
    this.setState({
      data: data
    })
  })
  .catch(err => console.log(err))
  }
  */

  //updating

  /*
  shouldComponentUpdate(){
    if (this.state.count < 5) {
      return true      
    }else{
      return false
    }
  }

  getSnapshotBeforeUpdate(preProps,preState){
    console.log('getSnapshotBeforeUpdate',preState);
    return 10
  }

  componentDidUpdate(preProps,preState,snapshot){
    console.log(snapshot);
  }
*/

    render(){
      console.log('redux-data: ',this.props);
    return(
      <div style={{textAlign:'center'}}>

        {/* <h1>React Life Cycle</h1>

        {/* getDerivedStateFromProps */}

        {/* {this.state.count < 5 && <Child count={this.state.count} />}
        {/* <h2>{this.state.count}</h2> */}
{/* 
        <button onClick={()=>this.setState({count:this.state.count + 1})}>Incriment</button>
        <br/>
        <button onClick={()=>this.setState({count:this.state.count - 1})}>Decrement</button> */} 

        {/* componentdidmount */}

       {/* {this.state.date.map((v,i)=>{
          return <h3>{v.title}</h3>       
          })}  */}
    

        <h1>REDUX Boiler Plate</h1>

        <button onClick = {()=>this.props.set_data("data also pass from here")}>Set Data</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userName:state.auth.userName,
    email:state.auth.email,
    appName:state.app.appName,
  }
}

const mapDispatchToProp = (dispatch)=>{
  return{
    set_data:(data)=> dispatch(set_data(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProp)(App);