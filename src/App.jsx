import React from 'react'
import DrawerAppBar from './DrawerAppBar'
import Dashboard from './components/Dashboard'
import CreateAds from './components/CreateAds'
import MediaAds from './components/MediaAds'
import { Routes,Route } from 'react-router'
import TextAds from './components/TextAds'



function App() {
  return (
    <div>
      <div className='App'>
      <DrawerAppBar/>
      <Routes>
        <Route path="/DASHBOARD" element={<Dashboard />} />
        <Route path="/CREATE ADS" element={<CreateAds />} />
        <Route path="/TextAds" element={<TextAds />} />
        <Route path="/MediaAds" element={<MediaAds />} />
      </Routes>
        </div>
    </div>
  )
}

export default App