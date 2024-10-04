import Image from "next/image";

//TODO: Replace this with DSS project
const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            {/* <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div> */}
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[1000px]">
              <div className="mb-9">
                <h2 className= "mb-4 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-4xl font-anka-coder">
                {/* <h2 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-lg lg:text-xl xl:text-lg"> */}
                  current projects 
                </h2>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl font-anka-coder">
                  worldie
                </h3>
                <p className="text-lg font-medium leading-relaxed text-body-color sm:text-lg lg:text-lg sm:leading-relaxed font-anka-coder">
                Rescue Social Inc, also known as Worldie — Social Media for Good, is an organization dedicated to helping victims and witnesses of sexual assault, other misconduct, and cover-ups thereof in the film, music, and arts industries in demonstrating these abuses and legislating against them. At the DSS/Worldie partnership project, we are teaming up with Worldie to demonstrate the online harassment and media manipulation against victims by performing sentiment analysis upon 500+ case articles, illustrating how victims and their interests are routinely marginalized and ignored.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl font-anka-coder">
                  passion project
                </h3>
                <p className="text-xl font-medium leading-relaxed text-body-color sm:text-xl lg:text-lg sm:leading-relaxed font-anka-coder">
                  yours can be here!
                </p>
              </div>
              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-lg lg:text-xl xl:text-lg font-anka-coder">
                  project 3
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed font-anka-coder">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
