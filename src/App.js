import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { VehicleNavbar } from './Components/NavbarSection/VehicleNavbar';
import VehicleContent from './Components/VehicleSection/VehicleContent';
import Home from './Components/VehicleSection/HomePage';
import DataProvider from './Components/DataSection/Data';

const App = () => {
  return (
    <div className="display">
      <DataProvider>
        <BrowserRouter>
          <VehicleNavbar />
          <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/:vehicle" element={ <VehicleContent /> }/>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;