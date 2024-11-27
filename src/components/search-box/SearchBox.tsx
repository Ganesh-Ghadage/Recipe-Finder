import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();
  
  const handleSearch = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setSearchQuery('');
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div className='flex w-full justify-center mt-2'>
      <form onSubmit={handleSearch} className='flex'>
        <input
          type='text'
          placeholder='Search your Meal'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='md:w-96 mr-4 px-4 py-2 rounded-3xl text-black'
        />
        <button
          type="submit"
          className='bg-primary-color px-4 py-2 rounded-3xl font-bold text-[#e4f4f1] hover:bg-[#e4f4f1] hover:text-primary-color'>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
