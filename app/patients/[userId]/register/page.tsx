import RegisterForm from "@/components/form/RegisterForm";
import Logo from "@/components/Logo";
import { getPatient, getUser } from "@/lib/actions/patient.action";
import Image from "next/image";
import { redirect } from "next/navigation";


const Register = async (props: SearchParamProps) => {
  const params = await props.params;
  const { userId } = params;
  if (!userId) { return (<div>Error: User ID is missing</div>); }

  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Logo />
          <RegisterForm user={user} />
          <p className="copyright py-12">© 2024 UFirst </p>
        </div>
      </section>
      <Image
        src="/assets/register-image.png"
        alt="image"
        height={1000}
        width={1000}
        className="side-img max-w-[30%]"
      />
      <div className="absolute top-2 left-2"></div>
    </div>
  );
};

export default Register;
