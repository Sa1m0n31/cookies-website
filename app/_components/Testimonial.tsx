import Image from "next/image";

export default function Testimonial() {
  return <div className="w-full xl:w-screen relative">
    <Image className="background background--5" src="/bg-5.svg" width={2000} height={2000} alt="background" />

    <section className="w-11/12 max-w-[1088px] mx-auto my-36 mb-20 lg:my-36 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="max-w-[424px]">
          <p className="text-xl italic">
            Aliquam tristique sed vulputate amet. Amet a orci nunc risus
            scelerisque varius placerat bibendum tristique. Ut pharetra non eu in
            cras ullamcorper viverra ac malesuada. Venenatis proin non magna
            ullamcorper nec adipiscing condimentum.
          </p>

          <p className="mt-8 mb-2 text-3xl font-extrabold">John Doe</p>
          <p className="uppercase text-[#7B6969]">Lorem Ipsum Company</p>
        </div>

        <Image src="/person.svg" width={523} height={523} alt="testimonial" />
      </section>
    )
  </div>
}
