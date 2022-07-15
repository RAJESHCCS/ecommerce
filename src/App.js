import './App.scss';
import ProductCard from "./components/productCard/ProductCard"
import ProductFooter from './components/footer/ProductFooter';
function App() {
  return (
    <div className="App">
      Header
      <ProductCard/>
      <ProductCard/>
      <ProductFooter/>
    </div>
  );
}

export default App;
