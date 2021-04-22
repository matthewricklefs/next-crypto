import styles from '../styles/Search.module.css'

function Search({ ...rest }) {
  return (
    <div className={styles.coin_search}>
      <input className={styles.coin_input} {...rest} />
    </div>
  )
}

export default Search
