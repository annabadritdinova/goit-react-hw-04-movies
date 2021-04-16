import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Spinner() {
  return (
    <Loader
      className={styles.Spiner}
      type="Oval"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000} //3 secs
    />
  );
}