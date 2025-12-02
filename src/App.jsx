import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from "./layouts/MainLayout";
import CollectionsPage from "./pages/collections/CollectionsPage";
import CollectionDetailPage from "./pages/collections/CollectionDetailPage";
import NewsListPage from './pages/news/NewsListPage'
import NewsDetailPage from './pages/news/NewsDetailPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* <Route path="/" element={<HomePage />} /> */}


          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:id" element={<CollectionDetailPage />} />

          <Route path="/news" element={<NewsListPage />} />
          <Route path="/news/:slug" element={<NewsDetailPage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App