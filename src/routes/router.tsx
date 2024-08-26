import { Route, Routes } from "react-router-dom"

import { Login } from "@pages/Login"
import { Error404 } from "@pages/Error404"
import { Dashboard } from "@pages/Dashboard"

export function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  )
}