import React from 'react'
import SearchBar from '../../containers/SearchBar'
import Navbar from '../Navbar/Navbar'
import './Header.scss'

export const Header = () => (
  <div>
    <Navbar />
    <SearchBar />
  </div>
)

export default Header
