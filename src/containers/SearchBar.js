import React, { Component } from 'react'
import SearchInput from '../components/SearchInput'

class SearchBar extends Component {
  search () {
    console.log('Search')
  }

  render () {
    return (
      <div>
        <SearchInput />
      </div>
    )
  }
}

export default SearchBar
