import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import { GithubProvider } from "./Context/github/GitHubContext"


function App() {

  return (
    <GithubProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <Navbar title='Github Finder' />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;
