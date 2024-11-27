import { useAppSelector } from "@/app/hooks"

import MenuCard from './MenuCard'

function MenuList() {

    const menus = useAppSelector((state) => state.menu)

  return (
    <>
        { 
            menus.menu.length > 0 &&
            <div className="flex gap-4 pb-3 mb-3
                overflow-x-auto scrollbar-hide
                [&::-webkit-scrollbar]:h-1
                [&::-webkit-scrollbar-track]:bg-[#313131]
                [&::-webkit-scrollbar-thumb]:bg-[#515151]
                [&::-webkit-scrollbar-thumb]:rounded-full"
            >
                {
                    menus.menu.map((menu) => (
                        <MenuCard menu={menu} key={menu.id} category={menus.category}/>
                    ))
                }
            </div>
        }
    </>
  )
}

export default MenuList