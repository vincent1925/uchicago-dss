import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/projects";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, description, image, link } = project;

  return (
    <div className="dark:bg-dark-2 w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
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
        <p className="text-base text-body-color dark:text-body-color-dark">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SingleProject;
