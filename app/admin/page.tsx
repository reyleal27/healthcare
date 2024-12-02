import { DataTable } from '@/components/table/DataTable';
import Logo from '@/components/Logo';
import StatCard from '@/components/StatCard';
import { getRecentAppointmentList } from '@/lib/actions/appointment.action';
import Link from 'next/link';
import React from 'react'
import { columns} from '@/components/table/columns';


const Admin = async() => {
  const appointments = await getRecentAppointmentList();

  return (
    <div className='mx-auto flex max-w-7xl flex-col space-y-14'>
      <header className='admin-header'>
        <Link href='/admin' className="cursor-pointer">
          <Logo/>
        </Link>
        <p className='text-16-semibold'>
          Admin dashboard
          </p>
      </header>
      <main className='admin-main'>
        <section className='w-full space-y-4'>
          <h1 className='header'>Welcome, Admin👋</h1>
          <p className='text-dark-700'>Start managing new appointments</p>
        </section>
        <section className='admin-stat'>
          <StatCard
            type="appointments"
            count={appointments.scheduledCount}
            label="Scheduled Appointments"
            icon="/assets/icons/appointments.svg" />
           <StatCard
            type="pending"
            count={appointments.pendingCount}
            label="Pending Appointments"
            icon="/assets/icons/pending.svg" />
           <StatCard
            type="cancelled"
            count={appointments.cancelledCount}
            label="Cancelled Appointments"
            icon="/assets/icons/cancelled.svg"/>
        </section>
        <DataTable columns={columns} data={appointments.documents} />
        {/* <DataTable columns={columns} data={data} /> */}
      </main>
    </div>
  )
}

export default Admin;