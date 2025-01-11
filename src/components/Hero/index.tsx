import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          backgroundImage: "url(/images/Hero/groupphoto.jpg)" ,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Add an overlay and blur */}
        <div className="absolute inset-0 bg-white bg-opacity-60 backdrop-blur"></div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[1400px] text-center">
                <h1
                  className="
                  mb-5
                  text-3xl 
                  sm:text-3xl
                  md:text-3xl
                  lg:text-3xl 
                  font-bold 
                  leading-tight 
                  text-black 
                  dark:text-black 
                  sm:leading-tight 
                  md:leading-tight
                  font-anka-coder"
                >
                  data science society
                </h1>
                <p
                  className="
                  mb-12 
                  text-base 
                  !leading-relaxed 
                  text-body-color 
                  dark:text-body-color-dark 
                  sm:text-xl
                  md:text-xl
                  lg:text-xl
                  font-anka-coder"
                >
                  university of chicago&#39;s data science club connecting students
                  with hands-on projects and professional development opportunities
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://forms.gle/fpwrfu93D72PhxJM9"
                    className="rounded-sm bg-primary px-8 py-4 text-lg font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 font-anka-coder"
                  >
                    interest form
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;