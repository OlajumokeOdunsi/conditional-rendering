import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './component/List'



class App extends Component{

  state=({
    persons:[
      {id: "ytsdwgy",name: "BOJ", age: 35},
      {id: "hgdfh",name: "Fresh L", age: 38},
      {id: "ugd",name: "LOS", age: 31},
      {id: "fhd",name: "Yung6ix", age: 31},
    ],
    showPersons: false
  })

tooglePersonHandler(){
  let ogashow = this.state.showPersons
  this.setState({
    showPersons: !ogashow
  })
}
  
delete(){
  let deleteentry = this.setState({
    
  })

}


  render(){
    return(
      <>
      <button onClick={()=>this.tooglePersonHandler()}>SHOW</button>





      {
        this.state.showPersons?
        <div>
          {this.state.persons.map(
          (person,index)=>{
            return<List name={person.name} age={person.age} key={person.id}/>
          })}
        </div>:<h1>showPersons is false</h1>
      }
      </>
    )

  }


}





export default App
