// import { LockIcon, X } from 'lucide-react'
// import React, { useState } from 'react'

// const ChangePasswordModal = ({open,onClose}) => {

//     const [loading, setLoading] = useState(false)
//     const [showPasswordModal,setShowPasswordModal] = useState(false)
//     const [message, setMessage] = useState({ type: "", text: "" })

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//     }

//     if (!open) return null;

//     return (
//         <div
//             onClick={onClose}
//             className='fixed inset-0 z-50 flex items-center justify-center p-4'>
//             <div className=" absolute inset-0 bg-black/40 backdrop-blur-sm" />

//             <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in"
//                 onClick={(e) => e.stopPropagation()}>
//                 <div className="flex items-center justify-between p-6 pb-0">
//                     <h2 className='text-lg font-medium text-slate-900 flex items-center gap-2'>
//                         <LockIcon className='w-5 h-5 text-slate-400' />Change Password
//                     </h2>
//                     <button
//                     onClick={()=>setShowPasswordModal(false)} className='p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600'>
//                         <X className='w-5 h-5'/>
//                         </button>
//                 </div>

//             </div>
            
//         </div>
//     )
// }

// export default ChangePasswordModal



import { LockIcon, X } from 'lucide-react'
import React, { useState } from 'react'

const ChangePasswordModal = ({ open, onClose }) => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // TODO: add password change logic here
  }

  if (!open) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 pb-0">
          <h2 className="text-lg font-medium text-slate-900 flex items-center gap-2">
            <LockIcon className="w-5 h-5 text-slate-400" /> Change Password
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Old Password
            </label>
            <input type="password" name="oldPassword" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              New Password
            </label>
            <input type="password" name="newPassword" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Confirm Password
            </label>
            <input type="password" name="confirmPassword" required />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePasswordModal
// 6:5:34
