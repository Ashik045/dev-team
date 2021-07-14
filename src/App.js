import { BrowserRouter } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Detail from './component/Details/Detail';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Review from './component/Review/Review';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Header />
                <Detail />
                <About />
                <Review />
                <Contact />
            </div>
        </BrowserRouter>
    );
}

export default App;
