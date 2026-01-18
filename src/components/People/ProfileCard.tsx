import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image }) => {
  const roleParts = role
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className="items-center rounded-xl bg-gray-50 shadow w-64 min-h-[21rem] dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-64 h-64 object-cover rounded-xl"
        />
      </a>
      <div className="p-5">
        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-anka-coder">
          <a href="#">{name}</a>
        </h3>
        <div className="text-sm text-gray-500 dark:text-gray-400 leading-snug break-words">
          {roleParts.map((part, index) => (
            <span key={`${name}-role-${index}`} className="block">
              {part}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
