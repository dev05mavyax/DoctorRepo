import React from 'react'
import Layout from '../components/Layout'
import DoctorSection from '../components/DoctorSection'
import InfoSection from '../components/InfoSection'
import DentalTeamCard from '../components/DentalTeamCard'
import TreatementComponent from '../components/TreatementComponent'
import Slider from '../components/Slider'
import ClientReview from '../components/ClientReview'
import BookAppointment from '../components/BookAppointment'
import Card from '../components/Cards'


const Home = () => {
  return (
    <Layout>
      <DoctorSection />
      {/* <section>
        <div className="w-[100vw] flex justify-between items-center gap-20 animate-marquee py-3">
          <span className="text-[#5A5A5A] text-2xl font-semibold font-poppins">Pay via De9to App an get Flat 20% Discount</span>
          <span className="text-[#5A5A5A] text-2xl font-semibold font-poppins">Pay via De9to App an get Flat 20% Discount</span>
        </div>
      </section> */}
      <InfoSection />
      <DentalTeamCard />
      <TreatementComponent />
      <Slider />
      <ClientReview />
      <BookAppointment />
      <Card />
    </Layout>
  )
}

export default Home
