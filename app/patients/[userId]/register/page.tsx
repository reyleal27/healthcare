import RegisterForm from '@/components/form/RegisterForm'
import Logo from '@/components/Logo'
import { getUser } from '@/lib/actions/patient.action'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = async ({params: {userId}}: SearchParamProps) => {
    const user = await getUser(userId)
  return (
      <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto ">
                <div className="sub-container max-w-[600px]">
                  <Logo />
                  <RegisterForm user={user } />
                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-xl">
                            © 2024 UFirst{" "}
                        </p>
                        <Link href="/admin=true" className="text-green-500">
                            Admin
                        </Link>
                    </div>
                </div>
            </section>
            <Image
                src="/assets/register-image.png"
                alt="image"
                height={1000}
                width={1000}
                className="side-img max-w-[30%]"
            />
            <div className="absolute top-2 left-2">

            </div>
        </div>
  )
}

export default Register