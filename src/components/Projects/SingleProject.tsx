import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/projects";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, description, image, link, resources } = project;

  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg dark:bg-dark-2">
      <Link href={link} className="block">
        <div className="rounded-lg p-3">
          <div className="relative aspect-video w-full ">
            <Image src={image} alt={title} fill className="object-contain" />
          </div>
        </div>
      </Link>

      <div className="p-6">
        <h3>
          <Link
            href={link}
            className="font-anka-coder mb-4 block text-center text-xl text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
          >
            {title}
          </Link>
        </h3>
        <p className="font-anka-coder text-base text-body-color dark:text-body-color-dark">
          {description}
        </p>
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
  );
};

export default SingleProject;
