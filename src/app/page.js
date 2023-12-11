import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className=" w-full h-screen bg-no-repeat bg-cover bg-[url('/assets/images/pool.jpg')]">
      <div className="absolute inset-0 w-full h-full bg-slate-100 bg-opacity-60"></div>
        {/*<img className="object-fill" src="/assets/images/pool.jpg" alt="" />*/}
        <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-black z-10 md:px-12">
          <h1 className="mt-2 mb-16 text-4xl font-semibold font-kalnia tracking-tight md:text-5xl xl:text-6xl">
            Mazatlan 2503, <br /><span>Your home, away from home</span>
          </h1>
          <a href="https://www.airbnb.mx/rooms/48401709" target="_blank"
            className="rounded border-2 border-black z-10 px-[46px] pt-[14px] pb-[12px] font-kalnia text-sm font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100"
            data-te-ripple-init data-te-ripple-color="light">
            Book on Airbnb
          </a>
        </div>
      </div>

        </div>
    </main>
  )
}
