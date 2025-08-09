// import { useNavigate } from 'react-router-dom';

// const Profile = () => {
//   const navigate = useNavigate();

//   const handleLogOut = () => {
//     // Do logout logic if needed
//     navigate('/login');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
//     <div className="w-full max-w-6xl">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-12">
//         <h1 className="text-2xl font-bold text-green-800">Profile</h1>
//         <div className="flex items-center gap-2">
//           <span className="text-lg font-medium text-gray-800">David</span>
//           <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
//             <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
//             </svg>
//           </div>
//         </div>
//       </div>

//         <div className="flex flex-col lg:flex-row gap-12">
//           {/* Left - Profile Info */}
//           <div className="flex-1">
//             <div className="flex items-center gap-4 mb-10">
//               <div className="w-20 h-20 rounded-full overflow-hidden bg-pink-300">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/32.jpg"
//                   alt="Profile"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold text-gray-900 mb-1">dataname.David Spencer</h2>
//                 <p className="text-gray-600"> Ceo</p>
//               </div>
//             </div>

//             <h3 className="text-lg font-semibold mb-6 text-gray-900">dataname.Personal Information</h3>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">First Name</div>
//                 <div className="font-medium text-gray-900">David</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Last Name</div>
//                 <div className="font-medium text-gray-900">Spencer</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Email</div>
//                 <div className="font-medium text-gray-900">davidbbba@gmail.com</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Phone</div>
//                 <div className="font-medium text-gray-900">0987775543</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Country</div>
//                 <div className="font-medium text-gray-900">United Kingdom</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">City</div>
//                 <div className="font-medium text-gray-900">Amsterdam</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Postal Code</div>
//                 <div className="font-medium text-gray-900">067845</div>
//               </div>
//               <div>
//                 <div className="text-sm text-gray-500 mb-1">Tax Id</div>
//                 <div className="font-medium text-gray-900">56100</div>
//               </div>
//             </div>
//           </div>

//           <div className="lg:w-72 w-full flex flex-col justify-start lg:justify-center gap-4">
//   <button
//     className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition duration-200"
//     onClick={() => navigate('/admin/profile/edit')}
//   >
//     Edit Profile
//   </button>

//   <button
//     className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition duration-200"
//     onClick={() => navigate('/admin/profile/reset-password')}
//   >
//     Reset Password
//   </button>

//   <button
//     className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover: transition duration-200"
//     onClick={handleLogOut}
//   >
//     Log Out
//   </button>
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Profile = () => {
  const navigate = useNavigate();

  // Local state for user data
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    postalCode: "",
    taxId: "",
    role: "",
    profileImg: "",
  });

  // Load data from localStorage (simulating backend fetch)
  useEffect(() => {
    const storedData = localStorage.getItem("userProfile");
    if (storedData) {
      setUser(JSON.parse(storedData));
    } else {
      // Default data (mock)
      const defaultData = {
        firstName: "David",
        lastName: "Spencer",
        email: "davidbbba@gmail.com",
        phone: "0987775543",
        country: "United Kingdom",
        city: "Amsterdam",
        postalCode: "067845",
        taxId: "56100",
        role: "CEO",
        profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
      };
      setUser(defaultData);
      localStorage.setItem("userProfile", JSON.stringify(defaultData));
    }
  }, []);

  // Handle logout
  const handleLogOut = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("token"); // if auth token stored
    navigate("/login");
  };

  // Navigate to edit profile page
  const handleEditProfile = () => {
    navigate("/admin/profile/edit", { state: { user } });
  };

  // Navigate to reset password page
  const handleResetPassword = () => {
    navigate("/admin/profile/reset-password");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-2xl font-bold text-green-800">Profile</h1>
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium text-gray-800">
              {user.firstName}
            </span>
            <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                1.79-4 4 1.79 4 4 4zm0 2c-2.67 
                0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Profile Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-pink-300">
                <img
                  src={user.profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-gray-600">{user.role}</p>
              </div>
            </div>

            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">First Name</div>
                <div className="font-medium text-gray-900">
                  {user.firstName}
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Last Name</div>
                <div className="font-medium text-gray-900">{user.lastName}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Email</div>
                <div className="font-medium text-gray-900">{user.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Phone</div>
                <div className="font-medium text-gray-900">{user.phone}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Country</div>
                <div className="font-medium text-gray-900">{user.country}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">City</div>
                <div className="font-medium text-gray-900">{user.city}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Postal Code</div>
                <div className="font-medium text-gray-900"> {user.postalCode}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500 mb-1">Tax Id</div>
                <div className="font-medium text-gray-900">{user.taxId}</div>
              </div>
            </div>
          </div>

          {/* Right - Buttons */}
          <div className="lg:w-72 w-full flex flex-col justify-start lg:justify-center gap-4">
            <button
              className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition duration-200"
              onClick={handleEditProfile}
            >
              Edit Profile
            </button>

            <button
              className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition duration-200"
              onClick={handleResetPassword}
            >
              Reset Password
            </button>

            <button
              className="w-full py-3 px-6 rounded-xl bg-white text-green-800 font-semibold border-2 border-gray-200 shadow-sm hover:shadow-md transition duration-200"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
