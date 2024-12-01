import AppointmentForm from "@/components/form/AppointmentForm";;
import Logo from "@/components/Logo";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";

const Appointment = async ({ params }: SearchParamsProps) => {
  const { userId } = await params;
  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] py-10">
          <Logo />
          <AppointmentForm userId={ userId} type="create" patientId={patient.$id} />
          <p className="copyright py-12">© 2024 UFirst </p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment.png"
        alt="image"
        height={1000}
        width={1000}
        className="side-img bg-center max-w-[390px] bg-green-500"
      />
      <div className="absolute top-2 left-2"></div>
    </div>
  );
};

export default Appointment;