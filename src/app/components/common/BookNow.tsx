import Link from 'next/link'
import React from 'react'

function BookNow() {
  return (
    <Link href="./animal-health-check.html"
    className="text-base sm:text-lg block w-fit  text-[#494336] Roboto-font py-2 sm:py-3 px-6 sm:px-8 lg:px-[38px] font-medium tracking-[1.4px] rounded-[27px] hover:shadow-lg !shadow-slate-500/60  duration-300 hover:scale-[1.02] bg-[linear-gradient(90deg,#FFA280_0%,#8FD9D9_100%)]">BOOK
    NOW</Link>
  )
}

export default BookNow