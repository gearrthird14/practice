import { useState } from 'react';
import styles from './app.module.scss';

// Components
import SecondVenue from './components/secondVenue';
import InnerVenue from './components/innerVenue/innerVenue'

function App() {
  const [showNav, setShowNav] = useState(false);
  const [current, setCurrent] = useState('');
  const prp = {
    current,
    setCurrent,
    showNav,
    setShowNav,
  }
  
  return (
    <div className={styles.app}>
      <SecondVenue {...prp} />
      <InnerVenue {...prp} />
    </div>
  );
}

export default App;
