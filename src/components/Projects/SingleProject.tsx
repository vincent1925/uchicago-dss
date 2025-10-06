import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/projects";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, description, image, link, resources } = project;

  return (
    <article className="overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      <div className="flex flex-col md:flex-row">
        <Link
          href={link}
          className="block md:w-5/12 md:max-w-sm md:flex-shrink-0"
        >
          <div className="flex h-56 w-full items-center justify-center bg-white p-6 md:h-full md:min-h-[240px]">
            <div className="relative h-full w-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-contain"
              />
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col justify-between bg-primary/5 p-6 md:p-8">
          <div>
            <h3>
              <Link
                href={link}
                className="font-anka-coder mb-4 block text-left text-2xl font-semibold text-black transition-colors duration-200 hover:text-primary"
              >
                {title}
              </Link>
            </h3>
            <p className="font-anka-coder text-base leading-relaxed text-body-color">
              {description}
            </p>
          </div>

          {resources && resources.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {resources.map(({ label, href, external }, index) => {
                const key = `${project.id}-${index}`;

                if (external) {
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-anka-coder inline-flex items-center rounded-md border border-primary px-4 py-2 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
                    >
                      {label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={key}
                    href={href}
                    className="font-anka-coder inline-flex items-center rounded-md border border-primary px-4 py-2 text-sm text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default SingleProject;
