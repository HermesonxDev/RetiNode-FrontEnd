import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js' 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Discussions from './pages/discussions.jsx'
import Write from './pages/write.jsx'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import SignInForm from './pages/SignInForm.jsx'
import SignUpForm from './pages/SignUpForm.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "discussions",
        element: <Discussions />
      }
    ]
  },
  {
    path: "write",
    element: <Write />
  },
  {
    path: "signIn",
    element: <SignIn />
  },
  {
    path: "signUp",
    element: <SignUp />
  },
  {
    path: "signIn/email-signIn",
    element: <SignInForm />
  },
  {
    path: "signUp/email-signUp",
    element: <SignUpForm />
  },
  {
    path: "signUp/email-signIn",
    element: <SignInForm />
  },
  {
    path: "signIn/email-signUp",
    element: <SignUpForm />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)