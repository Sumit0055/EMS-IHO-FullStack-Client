import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'

const LoginForm = ({ role, title, subtitle }) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
  }

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />
      <div
        className="flex-1 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div
          className="w-full max-w-md animate-fade-in">

          <Link to={`/login`}
            className='inline-flex items-center gap-2  text-slate-500 hover:text-slate-700
           text-sm mb-10 transition-colors'>
            <ArrowLeftIcon size={16} /> Back to Portals
          </Link>

          <div
            className="mb-8">

            <h1
              className='test-2xl sm:text-3xl font-medium text-zinc-600'>
              {title}
            </h1>
            <p
              className='text-slate-500 text-sm sm:text-base mt-2'>
              {subtitle}
            </p>
          </div>
          {
            error && (
              <div
                className="mb-6 p-4 bg-rose-50 border b order-rose-200 text-sm rounded-xl flex items-start gap-3">
                <div
                  className='w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0' />

                {error}

              </div>
            )
          }

          <form
            action=""
            className='space-y-5'
            onSubmit={handleSubmit}>
            <div 
            className="">
              <label
                htmlFor=""
                className='block text-sm font-medium text-slate-700 mb-2'>
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder='example@gmail.com'
              />
            </div>
            <div className="">
              <label htmlFor="" className='block text-sm font-medium text-slate-700 mb-2'>Password</label>
              <div className=" relative">
                <input type={showPassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} required placeholder='.......' className='pr-11' />
                <button type='button'></button>
              </div>
            </div>
          </form>
        </div>
      </div>
{/* 1:02:29 */}
    </div>
  )
}

export default LoginForm