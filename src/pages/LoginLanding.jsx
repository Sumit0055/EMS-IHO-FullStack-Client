import React from 'react'
import LoginLeftSide from '../components/LoginLeftSide'
import { ArrowRightIcon, ShieldIcon, User2Icon } from 'lucide-react'
import { Link } from 'react-router-dom'

const LoginLanding = () => {

  const portOptions = [
    {
      to: "/login/admin",
      title: "Admin Portal",
      description: "Manage Employees, Departments, Payroll, and System Configurations.",
      icons: ShieldIcon
    },
    {
      to: "/login/employee",
      title: "Employee Portal",
      description: "Views your Profile,track attendance, request time off, and access payslips",
      icons: User2Icon
    }
  ]

  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        <div className='w-full max-w-md animate-fade-in relative z-10'>
          {/* Header  */}
          <div className="mb-10 text-center md:text-left">
            <h2 className='text-3xl font-medium text-slate-900 tracking-tight'>Wlcome Back</h2>
            <p className='text-slate-600'>Select your Portal to securely access the System</p>
          </div>
          {/* Portal List  */}
          <div className="space-y-4">
            {
              portOptions.map((portal) => (
                <Link key={portal.to} to={portal.to}
                  className='group0 block bg-slate-50 sm:p-6 transition-all duration-300 hover:border-indigo-400  hover:bg-indigo-100'>
                  <div
                    className=" relative z-10 flex items-center justify-between gap-4 sm:gap-5">
                    <h3
                      className='text-lg text-slate-800 group-hover:text-indigo-600 mb-1 transition-colors'>{portal.title}</h3>
                    <ArrowRightIcon
                      className='w-4 h-4 text-slate-500 group-hover:text-indigo-600 group-hover:transition-x-1 transition-all duration-300' />
                  </div>
                </Link>
              ))
            }
          </div>
          {/* footer  */}
          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
            {/* <p>© {new Date().getFullYear()} Infinites Horizons Opportunities PVT.LTD. All Rights Reserved </p> */}
            <p>© {new Date().getFullYear()} IHO PVT.LTD. All Rights Reserved </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LoginLanding

// 41:10