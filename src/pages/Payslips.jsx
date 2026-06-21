import React, { useCallback, useEffect, useState } from 'react'
import {dummyEmployeeData, dummyPayslipData} from "../assets/assets"
import Loading from '../components/Loading'
import PayslipList from '../components/payslips/PayslipList'
import GeneratePayslipForm from '../components/payslips/GeneratePayslipForm'

const Payslips = () => {
  const [payslips, setPayslips] = useState([])
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  
  // const isAdmin = false;
  const isAdmin = true;


const fetchPaySlips = useCallback(async ()=>{
  setPayslips(dummyPayslipData)
  setTimeout(()=>{
    setLoading(false)
  },1000)
},[])

useEffect(()=>{
  fetchPaySlips()
},[fetchPaySlips])

useEffect(()=>{
  if(isAdmin) setEmployees(dummyEmployeeData)
},[isAdmin])

if(loading) return <Loading />

  return (
    <div className='animate-fade-in'>
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
        <div className="">
          <h1 className='page-title'>Payslips</h1>
          <p className='page-subtitle'>{isAdmin ? "Genrate and Manage Employee Payslips" : "Your Payslips History"}</p>
        </div>
        {
          isAdmin && <GeneratePayslipForm employees={employees} onSuccess={fetchPaySlips}/>
        }
      </div>
      {/* <p>Payslips list</p> */}
      <PayslipList payslips={payslips} isAdmin={isAdmin} />
    </div>
  )
}

export default Payslips