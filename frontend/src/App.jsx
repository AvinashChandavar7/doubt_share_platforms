import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import { SignInForm, SignUpForm } from "./_auth/forms/index.js";

import { Home } from "./_root/pages/index.js";



const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />} >
          <Route path='/sign-in' element={<SignInForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
        </Route>

      </Routes>
      <Toaster />
    </main>
  )
}

export default App;