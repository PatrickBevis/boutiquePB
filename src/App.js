
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import CategoryCard from './components/CategoryCard/CategoryCard';
import HomeScreen from './pages/HomeScreen';




function App() {



  const categoriesInit = [
    { id: "1", title: "hommes", desc: "La mode pour lui", image: "https://picsum.photos/id/100/300/200" },
    { id: "2", title: "femmes", desc: "La mode pour elle", image: "https://picsum.photos/id/101/300/200" },
    { id: "3", title: "enfants", desc: "La mode pour eux", image: "https://picsum.photos/id/102/300/200" },
    { id: "4", title: "bébé", desc: "La mode pour eux aussi", image: "https://picsum.photos/id/103/300/200"}
  ]

  const categoryElements = categoriesInit.map(category =>
    <div className='col-lg-3 col-12' key={category.id}>
      <CategoryCard title={category.title} desc={category.desc} image={category.image} />
    </div>

  );

  return (
    <>
      <div className="container-fluid"></div>
      <HomeScreen />

      




    </>
  );
}

export default App;
