import AppointmentForm from "@/components/form/AppointmentForm";;
import Logo from "@/components/Logo";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";



export default async function Appointment({ params }: SearchParamProps) {
  const { userId } = params;

  if (!userId) {
    return (
    <div>User Id not</div>
  )
}
  
    
  const patient = await getPatient(userId);

    if (!patient) { return (<div>Error: Patient Information is missing</div>); }
    
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] py-10">
          <Logo />
          <AppointmentForm userId={ userId} type="schedule" patientId={patient.$id} />
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
