import PatientForm from "@/components/form/PatientForm";
import Logo from "@/components/Logo";
import Image from "next/image";

const CreateUser = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto ">
        <div className="sub-container max-w-[496px]">
          <div className="mb-6">
            <Logo />
          </div>
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-xl">
              © 2024 UFirst
            </p>
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
export default CreateUser;
