import { useEffect } from 'react';
import { useAppDispatch } from '@/app/hooks';
import { setError } from '@/features/error/errorSlice';
import { useLocation, useNavigate } from 'react-router-dom';

function ErrorBox() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      dispatch(setError(null));
    }, 4000); 

    return () => {
      clearTimeout(timeoutID)
    }
  }, [dispatch, location]); 

  const handleErrorClick = () => {
    navigate('/'); 
    dispatch(setError(null));
  };

  return (
    <div className="text-center">
      <h1 className="text-red-600 text-2xl font-bold">Some Error Occurred</h1>
      <button
        className="items-center mt-4 cursor-pointer text-red-800 bg-red-300 py-2 px-4 rounded-full hover:bg-[#771515] hover:text-red-300"
        onClick={handleErrorClick}
      >
        Go to Home Page
      </button>
    </div>
  );
}

export default ErrorBox;
