// import { Plus, X } from 'lucide-react'
// import React, { useState } from 'react'

// const GeneratePayslipForm = ({employees, onSuccess}) => {
//     const [isOpen, setIsOpen] = useState(false)
//     const [loading, setLoading] = useState(false)

//     if(!isOpen) return (
//         <button onClick={()=>setIsOpen(true)} className='btn-primary flex items-center gap-2'>
//             <Plus className='w-4 h-4' /> Genrate Payslip
//         </button>
//     )

//     const handleSubmit = async(e)=>{
//         e.preventDefault()
//     }

//   return (
//     <div className="flexed inset-0 bg-black/40 backdrop:-blur-sm flex items-center justify-center z-50 p-4">
//         <div className="card max-w-lg w-full p-6 animate-slide-up">
//             <div className="flex justify-between items-center mb-6">
//                 <h3 className='text-lg font-bold text-slate-900'>Genrate Monthly Payslip</h3>
//                 <button 
//                 onClick={()=>setIsOpen(false)}
//                 className='text-slate-400 hover:text-slate-600 p-1'>
//                     <X size={20}/>
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default GeneratePayslipForm



import { Loader2Icon, Plus, X } from 'lucide-react'
import React, { useState } from 'react'

const GeneratePayslipForm = ({ employees, onSuccess }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="btn-primary flex items-center gap-2"
            >
                <Plus className="w-4 h-4" /> Generate Payslip
            </button>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        // Example payload
        const formData = new FormData(e.target)
        const payload = {
            employeeId: formData.get("employee"),
            month: formData.get("month"),
            year: formData.get("year"),
        }

        // Call API or parent callback
        await onSuccess?.(payload)

        setLoading(false)
        setIsOpen(false)
    }

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="card max-w-lg w-full p-6 animate-slide-up">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-slate-900">
                        Generate Monthly Payslip
                    </h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-slate-400 hover:text-slate-600 p-1"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Form */}
                {/* <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Employee
            </label>
            <select name="employee" required>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.id}>
                  {emp.firstName} {emp.lastName}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Month
              </label>
              <input type="text" name="month" required placeholder="June" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Year
              </label>
              <input type="number" name="year" required placeholder="2026" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? "Generating..." : "Generate Payslip"}
          </button>
        </form> */}

                <form action="" onSubmit={handleSubmit} className='space-y-4'>
                    {/* ------Select Employee------- */}
                    <div className="">
                        <label className='block text-sm font-medium text-slate-700 mb-2'>Employee</label>
                        <select name="employeeId" required id="">
                            {
                                employees.map((e) => (
                                    <option key={e.id} value={e.id}>
                                        {e.firstName} {e.lastName}  ({e.position})
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                    {/* ---------Select Month & year------ */}
                    <div className="grid grid-cols-3 gap-4">
                        <div className="">
                            <label className='block text-sm font-medium text-slate-700 mb-2'>Month</label>
                            <select name="month" id="">
                                {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
                                    <option key={m} value={m}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="">
                            <label className='block text-sm font-medium text-slate-700 mb-2'>Year</label>
                            <input type="number" name='year' defaultValue={new Date().getFullYear()} />
                        </div>
                    </div>

                    {/* ----------Basic Salary------- */}
                    <div className="">
                        <label className='block text-sm font-medium text-slate-700 mb-2'>Basic Salary</label>
                        <input type="number" name='basicSalary' required placeholder='₹ 50000' />
                    </div>

                    {/* -----------Allowance & Deductions--------- */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <label className='block text-sm font-medium text-slate-700 mb-2'>Allowance</label>
                            <input type="number" name='allowance' defaultValue={0} />
                        </div>
                        <div className="">
                            <label className='block text-sm font-medium text-slate-700 mb-2'>Deductions</label>
                            <input type="number" name='deductions' defaultValue={0} />
                        </div>
                    </div>

                    {/* -----------button---------- */}
                    <div className="flex justify-end gap-3 pt-2">
                        <button
                            onClick={() => setIsOpen(false)}
                            type='button'
                            className='btn-secondary'>
                            Cancel
                        </button>

                        <button
                            type='submit'
                            disabled={loading}
                            className='btn-primary flex items-center'>
                                {
                                    loading && <Loader2Icon className='w-4 h-4 mr-2 animate-spin'/>
                                }
                            Genrate
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default GeneratePayslipForm
