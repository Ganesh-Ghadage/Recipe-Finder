import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import App from './App.tsx'

import { Provider } from 'react-redux'
import { store } from './app/store.ts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { CategoryPage, Home, RecipeDetails, SearchPage, WhatsInFridge } from './pages/index.ts'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/whats-in-fridge',
        element: <WhatsInFridge />
      },
      {
        path: '/recipe/:id',
        element: <RecipeDetails />
      },
      {
        path: '/search/:query',
        element: <SearchPage />
      },
      {
        path: '/category/:category/:menu',
        element: <CategoryPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </StrictMode>,
)
