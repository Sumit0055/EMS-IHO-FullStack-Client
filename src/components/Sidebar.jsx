import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { dummyProfileData } from '../assets/assets'
import { CalendarIcon, ChevronRightIcon, FileTextIcon, icons, IndianRupee, LayoutGridIcon, MenuIcon, SettingsIcon, UserIcon, XIcon } from 'lucide-react'

const Sidebar = () => {

    const { pathname } = useLocation()
    const [userName, setUserName] = useState('')
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName)
    }, [])

    // Close mobiole Sidebar on route change 

    useEffect(() => {
        setMobileOpen(false)
    }, [pathname])

    const role = "ADMIN" || "EMPLOYEE";

    const navItems = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icons: LayoutGridIcon
        },
        role === "ADMIN" ?
            {
                name: "Employees",
                href: "/employees",
                icons: UserIcon
            } :

            {
                name: "Attendance",
                href: "/attendance",
                icons: CalendarIcon
            },
        {
            name: "Leave",
            href: "/leave",
            icons: FileTextIcon
        },
        {
            name: "Payslips",
            href: "/payslips",
            icons: IndianRupee
        },
        {
            name: "Settings",
            href: "/settings",
            icons: SettingsIcon
        }
    ]

    const sidebarContent = (
        <>
            {/* Brand Header */}

            <div className="px-5 pt-6 pb-5 border-b border-white/6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <UserIcon className='text-white size-7' />
                        <div className="">
                            <p className='font-semibold text-[13px] text-white tracking-wide'>Employee MS</p>
                            <p className='text-[11px] text-slate-500 font-medium'>Management System</p>
                        </div>
                    </div>
                    <button onClick={() => setMobileOpen(false)} className='lg:hidden text-slate-400 hover:text-white p-1'>
                        <XIcon size={20} />
                    </button>
                </div>
            </div>

            {/* user Profile card */}
            {
                userName && (
                    <div className="mx-3 mt-4 mb-1 p-3 rounded-lg  border border-white/6">
                        <div className="flex items-center gap-3 ">
                            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center ring-1 ring-white">
                                <span className='text-slate-400 text-xs font-semibold'>
                                    {
                                        userName.charAt(0).toLocaleUpperCase()
                                    }
                                </span>
                            </div>
                            <div
                                className="min-w-0">
                                <p
                                    className='text-[13px] font-medium text-slate-200 truncate'>
                                    {userName}
                                </p>
                                <p>
                                    {role === "ADMIN" ? "Administrator" : "Employee"}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Section label */}
            <div className="px-5 pt-5 pb-2">
                <p
                    className='text-[10px] font-semibold uppercase tracking-[0.12rem] text-slate-500'>
                    Navigation
                </p>
            </div>
            {/* Navigation List */}
            <div
                className="flex-1 px-3 space-x-0.5 overflow-auto">
                {navItems.map((item) => {
                    const isActive = pathname.startsWith(item.href)
                    return (
                        <Link
                            key={item.name}
                            to={item.href}
                            className={`group flex items-center gap-3 px-3 py-2.5 rounded-md text-[13px] font-medium transition-all duration-150 relative ${isActive ? "bg-indigo-500/12 text-indigo-300" : "text-slate-300 hover:text-white hover:bg-white/4"}`}>
                            {
                                isActive && <div className='absolute left-0 top-1/2 w-[3px] h-5 rounded-r-full bg-indigo-500' />
                            }
                            <item.icons
                                className={`w-[17px] h-[17px] shrink-0 ${isActive ? "text-indigo-300" : "text-slate-400 group-hover:stale-300"}`} />
                            <span
                                className='flex-1'>
                                {item.name}
                            </span>
                            {
                                isActive &&
                                <ChevronRightIcon
                                    className='w-3.5 h-3.5 text-indigo-500/50' />
                            }
                        </Link>
                    )
                })}
            </div>

            {/* Logout  */}


        </>
    )

    return (
        <>
            {/* Mobile hamburger button  */}
            <button onClick={() => {
                setMobileOpen(true)
            }}
                className='lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-lg shadow-lg border border-white/10'>
                <MenuIcon size={20} />
            </button>

            {/* Mobile Overlay */}
            {
                mobileOpen &&
                <div
                    className='lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40'
                    onClick={() => { setMobileOpen(false) }} />
            }

            {/* Sidebar - desktop */}
            <aside
                className='hidden lg:flex flex-col h-full w-[260px] bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4'>
                {
                    sidebarContent
                }
            </aside>

            {/* Sidebar - mobile */}
            <aside
                className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}>
                {
                    sidebarContent
                }
            </aside>
        </>
    )
}

export default Sidebar