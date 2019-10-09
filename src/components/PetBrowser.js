import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    const map1 = this.props.pets.map(pet=><Pet pet={pet} onAdoptPet={this.props.onAdoptPet}/>)
    return <div className="ui cards"> {/*PET COMPONENT SHOULD GO HERE*/}
      {map1}
    </div>
  }
}

export default PetBrowser
