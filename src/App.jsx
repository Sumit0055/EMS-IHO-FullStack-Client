import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginLanding from './pages/LoginLanding'
import Dashboard from './pages/Dashboard'
import Employee from './pages/Employee'
import Attendence from './pages/Attendence'
import Leave from './pages/Leave'
import Payslips from './pages/Payslips'
import Setting from './pages/Setting'
import PrintPayslip from './pages/PrintPayslip'
import Layout from './pages/Layout'
import LoginForm from './components/LoginForm'
export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/login' element={<LoginLanding />} />
        <Route path='/login/admin' element={<LoginForm role="admin" title="Admin Portal" subtitle="Sign in to manage the organization" />} />
        <Route path='/login/employee' element={<LoginForm role="employee" title="Employee" subtitle="Sign in to access your account" />} />


        <Route element={<Layout />} >
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/attendance' element={<Attendence />} />
          <Route path='/leave' element={<Leave />} />
          <Route path='/payslips' element={<Payslips />} />
          <Route path='/settings' element={<Setting />} />
        </Route>
        <Route path='/print/payslips:id' element={<PrintPayslip />} />
        <Route path='*' element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  )
}
