import { useState } from 'react'
import Home from './utils/Home'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
      <div className='w-full flex justify-center items-center'>
        <div className='w-full max-w-[500px] min-h-screen first-content bg-center flex flex-col justify-center bg-[#F1E8D7]'>
          <Routes>
            <Route path="/khitan-fawaz/:name" element={<Home />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
