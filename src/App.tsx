import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { sum } from '@/utils/sample';
import logo from '@/assets/logo.svg';
import '@/assets/App.css';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <button onClick={() => alert(sum(1, 2))} className="underline">
          click me
        </button>
        <Suspense fallback="loading...">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </Suspense>
      </header>
    </div>
  );
}

export default App;