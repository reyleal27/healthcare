import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
         <div className="flex items-center gap-2 mb-6">
                        <Image
                            src="/assets/health-logo.jpg"
                            width={1000}
                            height={1000}
                            alt="logo"
                            className="h-10 w-fit rounded-full"
                        />
                        <h2 className="text-primary text-2xl font-bold">
                            U<span className="text-red-500">First</span>
                        </h2>
                    </div>
  )
}

export default Logo