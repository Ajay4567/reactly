import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess, loginFailure } from '../../slices';
import authService from '../../services/authService';

const SignInModal = ({ isOpen, onClose }) => {
  // if (!isOpen) return null; // Don't render if modal is not open

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, error } = useSelector((state) => state.auth);
  const [mobileOrEmail, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otpError, setOtpError] = useState(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home'); // Redirect to products page if already authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      await authService.sendOtp(mobileOrEmail);
      setIsOtpSent(true);
      setOtpError(null);
    } catch (err) {
      setOtpError(err.message || 'Failed to send OTP');
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const { token } = await authService.verifyOtp(mobileOrEmail, otp);
      dispatch(loginSuccess(token));
    } catch (err) {
      dispatch(loginFailure(err.message || 'Invalid OTP'));
    }
  };

  return (
    <div className="bg-[#000000d9] p-5 rounded-xl flex justify-between items-center z-50 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="me-5 w-7/12">
        <h1 className="text-2xl text-center text-white">Dogs and Pets</h1>
        <p className="text-center mt-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ea
          inventore sequi beatae. Vel animi est, porro nulla nemo laudantium
          explicabo unde. Enim, numquam iste? Blanditiis accusamus non mollitia
          praesentium!
        </p>
      </div>
      <div className="bg-white pb-5 pt-0 px-5 rounded-md shadow-2xl w-5/12">
        <div className="modal-content">
          <div className="flex justify-end">
            <button
              className="text-2xl bg-transparent text-black hover:bg-transparent rounded-md leading-0"
              onClick={onClose}
            >
              x
            </button>
          </div>
          <h2 className="text-center text-xl font-bold">Login / Sign Up</h2>
          <p className="text-center text-[#667085] text-sm mt-2">
            {/* Enter Mobile Number */}
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {otpError && <p className="text-red-500 mb-4">{otpError}</p>}
          {!isOtpSent ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
                <input
                  type="tel"
                  value={mobileOrEmail}
                  onChange={(e) => setMobile(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="+1234567890"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  placeholder="123456"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInModal;
