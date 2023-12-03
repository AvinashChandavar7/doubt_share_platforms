
import { Routes, Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import { SignInForm, SignUpForm } from "./_auth/forms/index.js";

import { Home, Profile, Dashboard, Doubts, ChatRoom } from "./_root/pages/index.js";

import { Toaster } from "@/components/ui/toaster"
import CreateDoubts from "./_root/pages/CreateDoubts.jsx";


const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />} >
          <Route path='/sign-up' element={<SignUpForm />} />
          <Route path='/sign-in' element={<SignInForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />} >
          <Route index element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/doubts' element={<Doubts />} />
          <Route path='/chatroom' element={<ChatRoom />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-post' element={<CreateDoubts />} />
        </Route>
      </Routes>
      <Toaster />

    </main>
  )
}

export default App;