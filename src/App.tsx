import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'


function App() {

  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title='Github Finder' />
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
