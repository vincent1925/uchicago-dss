import Image from "next/image";

interface ProfileCardNoPhotoProps {
  name: string;
  role: string;
}

const ProfileCardNoPhoto: React.FC<ProfileCardNoPhotoProps> = ({ name, role }) => {
  const roleParts = role
    .split(",")
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className="items-center rounded-xl bg-gray-50 shadow w-64 min-h-[6rem] dark:bg-gray-800 dark:border-gray-700">
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

export default ProfileCardNoPhoto;
