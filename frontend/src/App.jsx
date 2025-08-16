import { Suspense, useState } from 'react'
import HomePage from '@components/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from './routers/routers'
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routers.map((i, index) => {
            return <Route key={index} path={i.path} element={<i.component />} />
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
