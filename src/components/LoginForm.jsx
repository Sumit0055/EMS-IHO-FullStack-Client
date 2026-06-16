import React, { useState } from 'react'
import LoginLeftSide from './LoginLeftSide'
import { Link } from 'react-router-dom'
import { ArrowLeftIcon, EyeIcon, EyeOff, EyeOffIcon, Loader2Icon } from 'lucide-react'

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
    // Left Side Design  
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
                // htmlFor=""
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

            <div
              className="">
              <label
                // htmlFor=""
                className='block text-sm font-medium text-slate-700 mb-2'>
                Password
              </label>

              <div
                className=" relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='.......'
                  className='pr-11' />
                <button
                  type='button'
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors'
                  onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>

            <button
              type='submit'
              disabled={loading}
              className='w-full py-3 bg-linear-to-r from-indigo-600 to-indigo-400 text-white rounded-md text-sm font-semibold hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center'
            >
            {
            loading && <Loader2Icon 
            className='animate-spin h-4 w-4 mr-2'/>
            }
            Sign in
            </button>
          </form>
          {/* <form action="" className="space-y-5 max-w-md mx-auto px-4 sm:px-6 lg:px-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="example@gmail.com"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="......."
                  className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm pr-11 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                </button>
              </div>
            </div>

            
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-md text-sm font-semibold hover:to-indigo-600 disabled:opacity-50 transition-all duration-200 shadow-lg shadow-indigo-500/25 active:scale-[0.98] flex items-center justify-center"
            >
              {loading && (
                <Loader2Icon className="animate-spin h-4 w-4 mr-2" />
              )}
              Sign in
            </button>
          </form> */}

        </div>
      </div>
    </div>
  )
}

export default LoginForm