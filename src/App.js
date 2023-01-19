import { BrowserRouter, Routes, Route } from 'react-router-dom'

import gameOfThrones from './gameOfThrones'
import Houses from './components/Houses'
import House from './components/House'
import Member from './components/Member'

export default function App() {
  const houseData = gameOfThrones
  // console.log(houseData, '<<<<')
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" 
          element={<Houses houses={houseData}/>}/>
        <Route path="/houses/:id" 
          element={<House houses={houseData}/>}/>
        <Route path="/houses/:houseId/members/:memberId"
          element={<Member houses={houseData}/>}/>
      </Routes>
    </BrowserRouter>
  )
}