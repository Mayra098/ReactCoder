
import './App.css';
import Saludo from './components/Saludo';

const stylesP={
  border: 'solid 2px blue',
  padding:'20px'
}
const styles={
  header:'text-3xl font-light underline text-amber-600'
}
function App() { 
  return (
   
   <>
  <h1>hola mundo con REACT!</h1>
  <p>tienda</p>
  <p style={stylesP}>Mayra :)</p>
 
  <h1 className={styles.header}>
    Hello world!
  </h1>

  <button class="btn gap-2">
 click aqui
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
<Saludo/>
  </>

  );
}

export default App;
