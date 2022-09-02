
import './App.css';
import CategoryCard from './components/CategoryCard/CategoryCard';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <>
      <div className="container-fluid"></div>
      <HomeScreen />

      <div className="row">
        <div className="col-12 col-lg-3"><CategoryCard />
        </div>
      </div>



    </>
  );
}

export default App;
