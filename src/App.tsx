import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { ContentProvider } from "./context/ContentProvider.tsx"; // Import the provider

function App() {
  return (
    <BrowserRouter>
        <ContentProvider>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        </ContentProvider>
      </BrowserRouter>
    
  );
}

export default App;

//learn about react-hook forms , react-query , swr
