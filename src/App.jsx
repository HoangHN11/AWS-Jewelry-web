import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import CollectionsPage from "./pages/collections/CollectionsPage";
import CollectionDetailPage from "./pages/collections/CollectionDetailPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}


          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:id" element={<CollectionDetailPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App