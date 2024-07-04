import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import {BrowserRouter, Routes,  Route} from'react-router-dom'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Nav />
          <BrowserRouter>
          <Nav />
          <Routes>
            <Route path  ='/' element={<h1>Hello</h1>}  />
            <Route path  ='/hi' element={<h1>hi</h1>}  />
            <Route path  ='/how' element={<h1>how </h1>}  />
            <Route path  ='/ok' element={<h1>ok</h1>}  />

          </Routes>
          </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
