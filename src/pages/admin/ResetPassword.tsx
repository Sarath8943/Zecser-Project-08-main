import React, { useState } from 'react';
import AxiosInstance from '../../lib/api';

interface ApiResponse {
  success: boolean;
  message: string;
}

const ResetPassword: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const changePassword = async (
    currentPassword: string,
    newPassword: string
  ): Promise<ApiResponse> => {
    try {
      const token = localStorage.getItem('authToken') || '';
      const response = await AxiosInstance.post(
        '/auth/change-password',
        { currentPassword, newPassword },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      return {
        success: true,
        message: response.data.message || 'Password changed successfully',
      };
    } catch (error: any) {
      return {
        success: false,
        message:
          error.response?.data?.message ||
          error.message ||
          'Failed to change password',
      };
    }
  };

  const validatePassword = (password: string): boolean => password.length >= 10;

  const handleSubmit = async () => {
    setError('');
    setSuccess('');

    if (!currentPassword.trim()) {
      setError('Current password is required');
      return;
    }

    if (!newPassword.trim()) {
      setError('New password is required');
      return;
    }

    if (!validatePassword(newPassword)) {
      setError('Password must be at least 10 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    if (currentPassword === newPassword) {
      setError('New password must be different from current password');
      return;
    }

    setIsLoading(true);
    const response = await changePassword(currentPassword, newPassword);

    if (response.success) {
      setSuccess(response.message);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setTimeout(() => setSuccess(''), 5000);
    } else {
      setError(response.message);
    }

    setIsLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-[#f8f7fb]">
      <main className="flex-1 p-10">
        {/* Top-left "Reset Password" title */}
        <h2 className="text-2xl font-bold text-[#127056] mb-6">Reset Password</h2>

        {/* Centered form card */}
        <div className="bg-[#f8f7fb] rounded-3xl p-10 w-full max-w-xl mt-10">
          <h3 className="text-lg font-semibold mb-8">Change Password</h3>

          {error && (
            <div className="bg-red-100 border px-4 py-2 rounded-md mb-4">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-white border border-green-300 text-green-700 px-4 py-2 rounded-md mb-4">
              {success}
            </div>
          )}

          <div className="space-y-5">
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              disabled={isLoading}
              className="w-full p-3 rounded-md shadow-md outline-none placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isLoading}
              className="w-full p-3 rounded-md shadow-md outline-none placeholder-gray-400"
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
              className="w-full p-3 rounded-md shadow-md outline-none placeholder-gray-400"
            />

            {/* Centered button */}
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="mt-4 w-full sm:w-40 bg-[#0e644c] text-white py-3 rounded-full hover:bg-[#0c5741] transition disabled:bg-gray-400"
              >
                {isLoading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ResetPassword;
