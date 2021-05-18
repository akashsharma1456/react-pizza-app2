import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import ProductsMain from './components/Products/index';
import Feature from './components/Feature';
import Footer from './components/Footer';
//  import { observer } from 'mobx-react';


// const Menu = observer(() => {
//   return (
//   <div>
//     <GlobalStyle />
//     <Hero />
//     <ProductsMain heading="Choose your favorite" />
//     <Feature />
//     <Footer />
//   </div>
//   )
// })
// const Side = observer(() => {
//   return (
//   <div>
//     <Sidebar />
//   </div>
//   )
// })
function App() {
  return (
    <Router>
    <GlobalStyle />
    <Hero />
    <ProductsMain heading="Choose your favorite" />
    <Feature />
    <Footer />
    </Router>
  )
}
export default App;
