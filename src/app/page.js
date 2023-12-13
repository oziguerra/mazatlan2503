import Amenity from "@/components/Amenity";
import { AMENITIES } from "./data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/*Hero Section*/}
      <div className=" w-full h-screen bg-no-repeat bg-cover bg-[url('/assets/images/pool.jpg')]">
        <div className="absolute inset-0 w-full h-screen bg-slate-100 bg-opacity-60"></div>

        <div className="flex h-full items-center justify-center">
          <div className="px-6 flex flex-col text-center items-center justify-center text-black z-10 md:px-12">
            <h1 className="mt-2 mb-16 text-4xl font-semibold font-kalnia tracking-tight md:text-5xl xl:text-6xl">
              Mazatlan 2503, <br />
              <span>Your home, away from home</span>
            </h1>
            <a
              href="https://www.airbnb.mx/rooms/48401709"
              target="_blank"
              className="rounded border-2 border-black text-center z-10 m-2 px-[46px] pt-[14px] pb-[12px] font-kalnia text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Book on Airbnb
            </a>
            <a
              href="mailto:mazatlan2503@gmail.com"
              className="rounded border-2 border-black text-center z-10 m-2 px-[46px] pt-[14px] pb-[12px] font-kalnia text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Contact us directly
            </a>
          </div>
        </div>
      </div>
      {/*The apartment section*/}
      <div className="flex flex-col w-full items-center">
      <h1 className="p-9 font-kalnia text-xl xl:text-4xl">The apartment</h1>
        <div className="grid grid-cols-2 xl:grid-cols-5 bg-slate-100">
        {AMENITIES.map((amenity) => (
          <Amenity key={amenity.title} {...amenity} />
        ))}
        </div>
      </div>

      <div className="flex flex-col w-full items-center mb-4">
      <h1 className="p-9 font-kalnia text-xl xl:text-4xl">Location</h1>
      <iframe className="border-double border-4 border-black w-96 h-80 md:w-[500px] md:h-[450px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.9332126144614!2d-106.45608522367115!3d23.245517307969752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f550b9a421661%3A0x48686ce8b59158ad!2sCamino%20al%20Mar%20-%20Plaza%20Comercial!5e0!3m2!1sen!2sca!4v1702489121270!5m2!1sen!2sca" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
