// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'; // Ensure axios is installed

// const EditProfile = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   const [profile, setProfile] = useState({
//     photo: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     country: '',
//     city: '',
//     postalCode: '',
//     taxId: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setProfile({ ...profile, [e.target.name]: e.target.value });
//   };

//   const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfile({ ...profile, photo: imageUrl });
//     }
//   };

//   const updateProfile = async () => {
//     setLoading(true);
//     try {
//       // Replace with your actual API endpoint
//       const response = await axios.put('/api/profile/update', profile);
//       console.log('Profile updated:', response.data);
//       // Optionally navigate or show success toast
//     } catch (error) {
//       console.error('Failed to update profile:', error);
//       // Optionally show error toast
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center items-start">
//       <div className="w-full max-w-4xl ">
//         {/* Header */}
//         <div className="flex items-center gap-2 mb-6">
//           <button
//             onClick={() => navigate('/admin/profile')}
//             className="text-green-700 hover:text-green-800"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>
//           <h1 className="text-xl font-bold text-green-800">Edit</h1>
//         </div>

//         {/* Profile Picture */}
//         <div className="flex justify-center mb-8">
//           <div className="relative">
//             <div className="w-28 h-28 rounded-full overflow-hidden bg-pink-300 flex items-center justify-center">
//               <img
//                 src={
//                   profile.photo ||
//                   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
//                 }
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Hidden File Input */}
//             <input
//               type="file"
//               id="photoInput"
//               accept="image/*"
//               className="hidden"
//               onChange={handlePhotoChange}
//             />

//             {/* Edit Icon */}
//             <label
//               htmlFor="photoInput"
//               className="absolute bottom-2 right-2 bg-green-600 text-white p-1.5 rounded-full cursor-pointer hover:bg-green-700 transition"
//               title="Change photo"
//             >
//               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                 />
//               </svg>
//             </label>
//           </div>
//         </div>

//         {/* Title */}
//         <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">Edit Profile</h2>

//         {/* Form Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
//           {[
//             'firstName', 'lastName', 'email', 'phone',
//             'country', 'city', 'postalCode', 'taxId'
//           ].map((field) => (
//             <input
//               key={field}
//               name={field}
//               value={(profile as any)[field]}
//               onChange={handleChange}
//               placeholder={field.replace(/([A-Z])/g, ' $1')}
//               type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
//               className="px-4 py-3 rounded-xl shadow-sm bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           ))}
//         </div>

//         {/* Save Button */}
//         <div className="flex justify-center">
//           <button
//             onClick={updateProfile}
//             disabled={loading}
//             className="bg-green-700 text-white px-12 py-3 rounded-full font-medium hover:bg-green-800 disabled:bg-green-500 disabled:cursor-not-allowed transition"
//           >
//             {loading ? 'Saving...' : 'Save'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditProfile;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    postalCode: '',
    taxId: '',
    photo: '',
  });

  const [loading, setLoading] = useState(false);

  // Load profile from localStorage on component mount
  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle photo upload
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(prev => ({
          ...prev,
          photo: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Save updated profile to localStorage
  const updateProfile = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    localStorage.setItem('userProfile', JSON.stringify(profile));

    alert('Profile updated successfully!');
    setLoading(false);
    navigate('/admin/profile'); // redirect after update
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6">
      <div className="min-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={() => navigate('/admin/profile')}
            className="text-green-700 hover:text-green-800"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h1 className="text-lg font-semibold text-gray-800">Edit</h1>
        </div>

        {/* Profile Picture */}
        <div className="flex mb-8">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 flex items-center justify-center overflow-hidden">
              <img
                src={
                  profile.photo ||
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
                }
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Hidden File Input */}
            <input
              type="file"
              id="photoInput"
              accept="image/*"
              className="hidden"
              onChange={handlePhotoChange}
            />

            {/* Clickable Label (icon) */}
            <label
              htmlFor="photoInput"
              className="absolute bottom-2 right-2 bg-green-600 text-white p-2 rounded-full cursor-pointer hover:bg-green-700 transition"
              title="Change photo"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </label>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Edit Profile</h2>

        {/* Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {['firstName', 'lastName', 'email', 'phone', 'country', 'city', 'postalCode', 'taxId'].map(field => (
            <input
              key={field}
              name={field}
              value={(profile as any)[field]}
              onChange={handleChange}
              placeholder={field.replace(/([A-Z])/g, ' $1')}
              className="px-4 py-3 rounded-xl shadow-md bg-white placeholder-gray-500 border-0 focus:outline-none"
              type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
            />
          ))}
        </div>

        {/* Save Button */}
        <div className="flex justify-center">
          <button
            onClick={updateProfile}
            disabled={loading}
            className="bg-green-700 text-white px-12 py-4 rounded-full font-medium hover:bg-green-800 disabled:bg-green-600 disabled:cursor-not-allowed transition-colors min-w-[120px]"
          >
            {loading ? 'Saving...' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

