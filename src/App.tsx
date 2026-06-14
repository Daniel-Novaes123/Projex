
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Admin } from './pages/Admin'
import { ProtectedRoute } from './components/ProtectedRoute'
import { CreateProject } from './pages/CreateProject'
import { EditProject } from './pages/EditProject'
import { ProjectDetails } from './pages/ProjectDetails'
import { Register } from './pages/Register'
import { EditProfile } from './pages/Perfil/Edit'
import { PublicProfile } from './pages/Perfil/Public'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'


function App() {

  const init = useAuthStore(state => state.init)

  useEffect(() => {
    init()
  }, [init])


  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />

      <Route path='/register' element={<Register />} />
      <Route path='/projetos/:id' element={<ProjectDetails />} />
      <Route
        path="/usuario/:id"
        element={<PublicProfile />}
      />

      <Route path='/admin' element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
      <Route path='/admin/projetos/novo' element={
        <ProtectedRoute>
          <CreateProject />
        </ProtectedRoute>
      } />
      <Route path='/admin/projetos/:id/editar' element={
        <ProtectedRoute>
          <EditProject />
        </ProtectedRoute>

      } />
      <Route
        path="/admin/perfil"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />

    </Routes>
  )
}

export default App
