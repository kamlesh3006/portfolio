import './App.css';
import Background from './Components/Background';
import colorImage from './assets/front.png'; 
import bwImage from './assets/back.png';
function App() {
  return (
    <div className="App">
      <Background
        bottomImageSrc={colorImage}
        topImageSrc={bwImage}
        alt="A landscape view"
        revealRadius={120} /* Optional: you can change the circle size */
      />
    </div>
  );
}

export default App;
