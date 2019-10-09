import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  onChangeType = (event) => {

    this.setState({filters: {
                          type: event.target.value}})



  }

  onAdoptPet = pet_id => {
      const pets =  this.state.pets.map(pet => {return pet.id === pet_id ? {...pet,isAdopted: true}: pet})
      //pet.isAdopted=true;
    //  this.setState({this.state.pets[pet_id].isAdopted: true})
      this.setState({pets})
  }
  onFindPetsClick = () => {

    var fetchURL;

    if (this.state.filters.type === 'all') {
      fetchURL = '/api/pets'
    }
    else
      {
      fetchURL = '/api/pets' + '?type='+ this.state.filters.type
    }

   return  fetch(fetchURL)
    .then (res => res.json())
    .then (res => this.setState({pets: res}) )


  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />

            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
