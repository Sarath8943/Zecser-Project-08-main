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

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value,
    }));
  };

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

  const updateProfile = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));

    localStorage.setItem('userProfile', JSON.stringify(profile));

    alert('Profile updated successfully!');
    setLoading(false);
    navigate('/admin/profile');
  };
return (
  <div className="min-h-screen bg-gray-50 px-4 py-6 flex justify-center">
    <div className="w-full max-w-4xl">
      {/* Header */}
      
      <div className="flex max-w-1.5 -ml-51 gap-1 mb-4">
        <button
          onClick={() => navigate('/admin/profile')}
          className="text-green-700 hover:text-green-800"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-green-800">Edit</h1>
      </div>
   
      

      {/* Profile Picture */}
      <div className="flex  mb-8">
        <div className="relative">
          <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 flex items-center justify-center overflow-hidden">
            <img
              src={
                profile.photo ||
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face'
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <input
            type="file"
            id="photoInput"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoChange}
          />

          {/* Edit Icon at Top Right */}
          <label
            htmlFor="photoInput"
            className="absolute -top-2 -right-2 p-5 cursor-pointer hover:scale-105 transition"
            title="Change photo"
          >
            <div className="bg-green-600  flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
          </label>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center sm:text-left">Edit Profile</h2>

      {/* Form */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {['firstName', 'lastName', 'email', 'phone', 'country', 'city', 'postalCode', 'taxId'].map(field => (
          <input
            key={field}
            name={field}
            value={(profile as any)[field]}
            onChange={handleChange}
            placeholder={field.replace(/([A-Z])/g, ' $1')}
            className="px-4 py-3 rounded-xl shadow-md bg-white placeholder-gray-500 border border-gray-200 focus:border-green-500 focus:ring-1 focus:ring-green-500 focus:outline-none w-full"
            type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
          />
        ))}
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={updateProfile}
          disabled={loading}
          className="bg-green-700 text-white px-10 py-3 rounded-full font-medium hover:bg-green-800 disabled:bg-green-600 disabled:cursor-not-allowed transition-colors w-full sm:w-auto"
        >
          {loading ? 'Saving...' : 'Save'}
        </button>
      </div>
    </div>
  </div>
);}


