import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'

const Navbar = () => {
  return (
    <div className="relative z-[20] w-full flex items-start justify-between gap-4  px-4 sm:gap-10  sm:pb-5">
        {/* Name Section */}
        <p className="text-6xl font-bold hidden pb-5 sm:block md:text-8xl ">
          Abdul Wahab Tahir.
        </p>

        {/* Theme Switcher Section */}
        <div className="ml-auto pb-5">
          <ThemeSwitcher />
        </div>
      </div>
  )
}

export default Navbar
