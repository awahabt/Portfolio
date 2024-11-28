import React from 'react'
import ThemeSwitcher from './ThemeSwitcher'


interface NavbarProps {
  value: string;
  padding: string;
}

const Navbar: React.FC<NavbarProps> = ({ value, padding }) =>{
  return (
    <div className="relative z-10 w-full flex items-start justify-between gap-4  px-4 sm:gap-10  sm:pb-5">
        {/* Name Section */}
        <p className={`text-6xl font-bold hidden pb-5 sm:block md:text-8xl ${value}`} >
          Abdul Wahab Tahir.
        </p>

        {/* Theme Switcher Section */}
        <div className={`ml-auto pb-5 ${padding}`}>
          <ThemeSwitcher value={""} />
        </div>
      </div>
  )
}

export default Navbar
