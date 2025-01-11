import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image }) => {
  return (
    <div className="items-center bg-gray-50 rounded-xl shadow w-auto h-auto dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-auto h-auto opacity-100 rounded-xl transform scale-x-[-1]"
        />
      </a>
      <div className="p-5">
        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-anka-coder">
          <a href="#">{name}</a>
        </h3>
        <span className="text-md text-gray-500 dark:text-gray-400">{role}</span>
      </div>
    </div>
  );
};

export default ProfileCard;