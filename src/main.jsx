import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/index.css'
import App from './App.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Home from "./components/Home.jsx"
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import LoginForm from './components/Login.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import MealPlanner from './components/MealPlanner.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} > 
      <Route path='/home' element={<Home />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/log' element={<LoginForm />} />
      <Route path='/meal' element={<MealPlanner />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
