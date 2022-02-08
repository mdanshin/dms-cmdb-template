/* eslint-disable react/react-in-jsx-scope */
import { Routes, Route } from 'react-router-dom'
import CreateServiceUser from '../pages/CreateServiceAccForm'
import MainForm from '../pages/MainForm'

export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainForm />} />
            <Route path="/sites" element={<h1>Sites</h1>} />
            <Route path="/users" element={<h1>Users</h1>} />
            <Route path="/servers" element={<h1>Servers</h1>} />
            <Route path="/request" element={<CreateServiceUser />} />
            <Route path="*" element={<h1>Not found</h1>} />
        </Routes>
    )
}

export default useRoutes
