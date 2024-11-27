import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import { cuisines } from "@/sampleData/cuisines";
import { intolerances } from "@/sampleData/intolerances";
import { mealTypes } from "@/sampleData/mealTypes";

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleResponsive } from '../../features/responsive/responsiveSlice';
import { menuState, setMenu } from "@/features/menu/menuSlice";

const categories = [
  { name: "Cuisine", data: cuisines },
  { name: "Meal Type", data: mealTypes },
  { name: "Intolerances", data: intolerances }
];

function Header() {
  const isResponsive = useAppSelector((state) => state.responsive.isResponsive);
  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    dispatch(toggleResponsive());
  };

  const handleMenuClick = (category: string) => {
    const categoryData = categories.find(item => item.name === category);
    if (categoryData) {
      const menuPayload: menuState = {
        menu: categoryData.data,
        category: categoryData.name
      };
      dispatch(setMenu(menuPayload));
    }
  };

  return (
    <div className={`flex bg-[#515151] justify-between ${isResponsive ? '' : 'items-center'} px-4 py-2 w-full fixed top-0`}>
      <Link to={'/'}>
        <img src="/logo.svg" alt="logo" className="h-10 sm:h-12 hover:scale-110 drop-shadow-xl relative mt-0" />
      </Link>

      <div className={`text-xl font-semibold ${isResponsive ? 'flex flex-col gap-4' : 'flex flex-row'} items-center`}>
        <Link to={'/'}>
          <h1 className={`px-6 ${isResponsive ? 'flex' : 'hidden'} md:flex hover:scale-110 cursor-pointer md:border-none md:py-0 md:px-4 active:bg-green-600`}>
            Home
          </h1>
        </Link>
        
        {categories.map(({ name }) => (
          <h1
            key={name}
            className={`px-6 ${isResponsive ? 'flex' : 'hidden'} md:flex hover:scale-110 cursor-pointer md:border-none md:py-0 md:px-4 active:bg-green-600`}
            onClick={() => handleMenuClick(name)}
          >
            {name}
          </h1>
        ))}
        
        <button className="md:hidden py-4 text-3xl cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </button>
      </div>

      <Link to={'/whats-in-fridge'}>
        <div className="flex gap-2 items-center cursor-pointer bg-primary-color sm:px-2 rounded-full hover:bg-[#e4f4f1] hover:text-blue-400">
          <img src="/refrigerator-svgrepo-com.svg" alt="Ref Img" className="h-10 sm:h-12 drop-shadow-md shadow-black" />
          <h1 className="w-24 text-wrap text-lg font-semibold drop-shadow-2xl hidden sm:flex">
            What's In Fridge!
          </h1>
        </div>
      </Link>
    </div>
  );
}

export default Header;
