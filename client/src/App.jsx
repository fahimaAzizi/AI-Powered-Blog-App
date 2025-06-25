import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Blog } from './assets/pages/Blog'
import { Home } from './assets/pages/Home'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path ='./' element={<Home/>}></Route>
         <Route path='./bolg' element={<Blog/>}></Route>

      </Routes>
    </div>
  )
}
