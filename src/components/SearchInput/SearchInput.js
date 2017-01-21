import React from 'react'
import Button from '../Button'
import styles from './SearchInput.scss'

const SearchInput = () => (
  <div className={styles.searchInput}>
    <input type='text' className={styles.input} placeholder='Search questions' />
    <Button text='Search' />
  </div>
)

export default SearchInput
