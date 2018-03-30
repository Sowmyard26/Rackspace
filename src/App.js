import React from 'react'
import SampleTable from './components/Sample-table'

import data from './data/testTable.json'

import './app.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
      direction: {
        id : 'asc',
      }
    }

    this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
    this.setState({
      data: data.sort( (a, b) => (
        this.state.direction[key] === 'asc'
          ? parseFloat(a[key]) - parseFloat(b[key])
          : parseFloat(b[key]) - parseFloat(a[key]) 
      )),
      direction: {
        [key]: this.state.direction[key] === 'asc'
          ? 'desc'
          : 'asc'
      }
    })
  }

  render() {
    return (
      <div
        className="page-container"
      >
        <SampleTable
          data={this.state.data}
          sortBy={this.sortBy}
        />
      </div>
    )
  }
}

export default App
