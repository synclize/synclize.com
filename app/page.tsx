import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex bg-conic-180  bg-black min-h-screen relative  items-center justify-center  font-sans d">
      <Image
        src="/hero-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover absolute top-0 left-0 z-9 opacity-40"
      />
      <div className="container  h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1 ">
            <p className="text-start mt-24 max-w-2/3 me-auto">FROM CONCEPT TO COMPLETION, EVERY PROJECT IS CRAFTED WITH CARE, SKILL, AND CREATIVITY, ENSURING YOUR VISION BECOMES A TANGIBLE MASTERPIECE.</p>
            <div className="img-content gap-8 flex items-end justify-start w-full">
              <Image
                className="mt-12 rounded-4xl"
                src="/hero-img.png"
                alt="Next.js logo"
                width={460}
                height={20}
                priority
              />
              <div className="socials">
                <Link href={'#'} className="block">__INSTAGRAM</Link>
                <Link href={'#'} className="block">FACEBOOK</Link>
                <Link href={'#'} className="block">TWITTER</Link>
                <Link href={'#'} className="block">LINKEDIN</Link>
              </div>
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2 py-16 h-full flex  items-end justify-end">
            <div className="block">
              <h1 className="md:text-end text-2xl md:text-8xl md:leading-25">TRANSFORMING <br /> IDEAS INTO <br /> REALITY THROUGH CREATIVITY AND EXCELLENCE</h1>
              <p className="text-end mt-24 max-w-1/2 ms-auto">FROM CONCEPT TO COMPLETION, EVERY PROJECT IS CRAFTED WITH CARE, SKILL, AND CREATIVITY, ENSURING YOUR VISION BECOMES A TANGIBLE MASTERPIECE.</p>
            </div>
          </div>
        </div>
      </div>
      {/* <main className="flex min-h-screen w-full max-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          src="/logo.png"
          alt="Next.js logo"
          width={400}
          height={20}
          priority
        />
      </main> */}
    </div>
  );
}
