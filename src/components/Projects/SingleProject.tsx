import Image from "next/image";
import Link from "next/link";
import { Project } from "@/types/projects";

const SingleProject = ({ project }: { project: Project }) => {
  const { title, description, image, link } = project;

  return (
    <div className="dark:bg-dark-2 w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <Link href={link} className="block">
        <div className="relative aspect-video w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </Link>

      <div className="p-6">
        <h3>
          <Link
            href={link}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
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
