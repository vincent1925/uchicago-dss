import Image from "next/image";

interface ProfileCardNoPhotoProps {
  name: string;
  role: string;
}

const ProfileCardNoPhoto: React.FC<ProfileCardNoPhotoProps> = ({ name, role }) => {
  return (
    <div className="items-center bg-gray-50 rounded-xl shadow w-64 h-24 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-5">
        <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white font-anka-coder">
          <a href="#">{name}</a>
        </h3>
        <span className="text-md text-gray-500 dark:text-gray-400">{role}</span>
      </div>
    </div>
  );
};

export default ProfileCardNoPhoto;