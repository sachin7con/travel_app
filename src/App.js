import Userform from './components/Userform';
import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="App">
      <Userform />
      <div className="App">
            <HeroSection 
                country="TOKYO"
                duration="7 Days"
                activities="Sightseeing, Wine Tasting"
                groupSize="Couple"
                backgroundImage="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" 
            />
        </div>
    </div>
  );
};

export default App;
