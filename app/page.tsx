'use client'
import PatientForm from "@/components/form/PatientForm";
import Logo from "@/components/Logo";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto ">
                <div className="sub-container max-w-[496px]">
                    <Logo/>
                    <PatientForm />
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
                src="/onboarding-img.jpg"
                alt="image"
                height={1000}
                width={1000}
                className="side-img max-w-[50%]"
            />
            <div className="absolute top-2 left-2">

            </div>
        </div>
    );
};