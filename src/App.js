import {
  BrowserRouter as Router,
  Routes, 
  Route
} from "react-router-dom"

import Houses from "./Houses"
import House from "./House"
import Member from "./Member"

import houses from "./gameOfThrones"
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/houses"
          element={<Houses houses={houses} />}
        />

        <Route 
          path="/houses/:id"
          element={<House  houses={houses}/>}
        />

        <Route 
          path="/houses/:houseId/members/:memberId"
          element={<Member houses={houses}/>}
        />
      </Routes>
    </Router>
  )
}

export default App;
