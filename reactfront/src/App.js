import logo from './logo.svg';
import './App.css';

///Layout
import LayoutFront from './components/Layaout/Layout';

function App() {
  return (
   <LayoutFront></LayoutFront>
  );
}

 {/* <div>
      <Router>
        <MainComponent>
          <Routes>
            <Route path={'/'} exact  element={<CompShowBlog/>}/>
            <Route path={'/user'} exact  element={<Usurio/>}/>
            <Route path={'/prueba'} exact  element={<Prueba/>}/>
            <Route path={'/prueba2'} exact  element={<Prueba2/>}/>
          </Routes>
        </MainComponent>
      </Router>
    </div> */}

export default App;
