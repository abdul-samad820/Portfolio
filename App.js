import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main>
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
