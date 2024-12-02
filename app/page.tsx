import PatientForm from "@/components/form/PatientForm";
import Logo from "@/components/Logo";
import PasskeyModal from "@/components/PasskeyModal";
import Image from "next/image";
import Link from "next/link";

const Home = async ({ searchParams }: SearchParamsProps) => {
  const isAdmin = await searchParams?.admin === "true";

    return (
        <div className="flex h-screen max-h-screen">
            {isAdmin && <PasskeyModal />}
                <section className="remove-scrollbar container my-auto ">
                <div className="sub-container max-w-[496px]">
                    <div className="mb-6">
                        <Logo/>
                    </div>
                        <PatientForm />
                        <div className="text-14-regular mt-20 flex justify-between">
                            <p className="justify-items-end text-dark-600 xl:text-xl">
                                © 2024 UFirst
                            </p>
                            <Link href="/?admin=true" className="text-slate-200 py-2 px-6 rounded-full hover:bg-green-700 bg-green-500">
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
          
        </div>
    );
};
export default Home;