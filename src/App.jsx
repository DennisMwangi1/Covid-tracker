import Aside from "./components/Aside";
import Statistics from "./components/Statistics";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./components/Overview";
import GlobalTrends from "./components/GlobalTrends";
import Symptoms from "./components/Symptoms";


function App() {
 
  return (
    <div className="  grid grid-cols-6">
      <BrowserRouter>
      <Aside/>
      <Routes>

      <Route 
        path="/"
        exact
        element={
          <div className="bg-red-500 col-span-5">
            <Overview/>
          </div>
        }
      />
        <Route 
        path="/statistics"
        exact
        element={
          <div className=" col-span-5 bg-orange-200">
            <Statistics/>
          </div>
        }
      />
        <Route 
        path="/globaltrends"
        exact
        element={
          <div className="bg-blue-500 col-span-5">
            <GlobalTrends/>
          </div>
        }
      />
        <Route 
        path="/symptoms"
        exact
        element={
          <div className="bg-green-500 col-span-5">
            <Symptoms/>
          </div>
        }
      />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
