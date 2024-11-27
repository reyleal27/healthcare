'use client'
import PatientForm from "@/components/form/PatientForm";
import { ThemeToggle } from "@/components/Theme";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container my-auto ">
                <div className="sub-container max-w-[496px]">
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