
import { Routes, Route } from "react-router-dom";

import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import { SignInForm, SignUpForm } from "./_auth/forms/index.js";

import { Home, Profile, Dashboard, Doubts, ChatRoom, DoubtDetails } from "./_root/pages/index.js";

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
        <Route index path="/" element={<Home />} />
        {/* private routes */}
        <Route element={<RootLayout />} >

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/doubts' element={<Doubts />} />
          <Route path='/doubt-details/:id' element={<DoubtDetails />} />
          <Route path='/chatroom' element={<ChatRoom />} />
          <Route path='/profile/:id/*' element={<Profile />} />
          <Route path='/create-post' element={<CreateDoubts />} />
        </Route>
      </Routes>
      <Toaster />

    </main>
  )
}

export default App;