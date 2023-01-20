import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Houses from './Houses'
import House from './House'
import Member from './Member'

import gameOfThrones from './gameOfThrones'

export default function App() {
  console.log(gameOfThrones)
  return (
    <Router>
      <Routes>
        <Route 
          element={<Houses gameOfThrones={gameOfThrones} />}
          path='/'
        />

        <Route 
          path='/houses/:id'
          element={<House gameOfThrones={gameOfThrones } />}
        />

        <Route 
          path='/houses/:houseId/members/:memberId'
          element={<Member gameOfThrones={gameOfThrones } />}
        />
      </Routes>
    </Router>
  )
}