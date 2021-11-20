import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import LoadingComponents from './Components/LoadingComponents/LoadingComponents';

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <Suspense fallback={<LoadingComponents />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
}

export default App;
