import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";

import { getAppointment } from "@/lib/actions/appointment.action";
import Logo from "@/components/Logo";


const RequestSuccess = async ({ searchParams,params }: SearchParamsProps) => {
    const id = await searchParams;
    const appointmentId = (id.appointmentId as string) || "";
    const  {userId}  = await params;
   
    const appointment = await getAppointment(appointmentId);

      const doctor = Doctors.find(
    (doctor) => doctor.name === appointment.primaryPhysician
    );

 
  return (
    <div className=" flex h-screen max-h-screen px-[5%]">
      <div className="success-img">
        <Logo/>

        <section className="flex flex-col items-center">
          <Image
            src="/assets/gifs/success.gif"
            height={300}
            width={280}
            alt="success"
          />
          <h2 className="header mb-6 max-w-[600px] text-center">
            Your <span className="text-green-500">appointment request</span> has
            been successfully submitted!
          </h2>
          <p>We&apos;ll be in touch shortly to confirm.</p>
        </section>

        <section className="request-details">
          <p>Requested appointment details: </p>
          <div className="flex items-center gap-3">
            <Image
              src={doctor?.image!}
              alt="doctor"
              width={100}
              height={100}
              className="size-6"
            />
            <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
          </div>
          <div className="flex gap-2">
            <Image
              src="/assets/icons/calendar.svg"
              height={24}
              width={24}
              alt="calendar"
            />
            <p> {formatDateTime(appointment.schedule).dateTime}</p>
          </div>
        </section>

              <div className="flex flex-col gap-4 xl:flex-row">
                  
        <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/patients/${userId}/new-appointment`}>
            New Appointment
          </Link>
              </Button>
         <Button variant="outline" className="shad-primary-btn" asChild>
          <Link href={`/`}>
            New Patient
          </Link>
        </Button>
              </div>

        <p className="copyright">© 2024 UFirst</p>
      </div>
    </div>
  );
}

export default RequestSuccess;