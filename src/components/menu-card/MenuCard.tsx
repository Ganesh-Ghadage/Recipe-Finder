import { Menu } from '@/modal/Menu';
import { useNavigate } from 'react-router-dom';
import spoonacularAPIServices from '@/services/spoonacularAPIServices';
import { useAppDispatch } from '@/app/hooks';
import { setRecipe } from '@/features/recipe/recipeSlice';
import { setError } from '@/features/error/errorSlice';
import { setLoading } from '@/features/loading/loadingSlice';
import { Recipe } from '@/modal/Recipe';
import { getFromCache, saveToCache } from '@/services/localStorageServces';
import useAbortController from '@/custom-hooks/useAbortController';

interface Props {
  menu: Menu;
  category: string;
}

function MenuCard({ menu, category }: Props) {
  const [, createAbortController] = useAbortController()
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // Map categories to service methods
  const categoryAPIMethods: Record<string, (param: string, signal?: AbortSignal) => Promise<Recipe[]>> = {
    Cuisine: spoonacularAPIServices.searchCuisine,
    'Meal Type': spoonacularAPIServices.searchMealType,
    Intolerances: spoonacularAPIServices.searchIntolerances,
  };

  const handleMenuClick = async (menuName: string): Promise<void> => {
    const controller = createAbortController()

    const key = `${menuName}-${category}`;
    const cachedData = getFromCache(key);

    if (cachedData) {
      dispatch(setRecipe(cachedData));
      navigate(`/category/${category}/${menuName}`);
      return;
    }

    // console.log(category);
    
    const apiMethod = categoryAPIMethods[category];
    if (!apiMethod) {
      return;
    }

    dispatch(setLoading(true));

    try {
      const recipes = await apiMethod(menuName, controller.signal);
      saveToCache(key, recipes);
      dispatch(setRecipe(recipes));
      navigate(`/category/${category}/${menuName}`);
    } catch (error: any) {
      if (error.name !== 'CanceledError') {
        dispatch(setError(error.message));
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="px-4 mx-auto">
      <button
        className="w-[50px] flex flex-col items-center cursor-pointer justify-between"
        onClick={() => handleMenuClick(menu.name)}
      >
        <img src={menu.image} className="rounded-full object-fit w-[50px] h-[50px]" alt={menu.name} />
        <h2 className="text-wrap text-center">{menu.name}</h2>
      </button>
    </div>
  );
}

export default MenuCard;
