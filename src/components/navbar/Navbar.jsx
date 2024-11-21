import React from 'react';
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import MobileMenu from '../mobile/mobile-menu/MobileMenu';

const Navbar = () => {
  const style = {
    option: {
        active: "p-2 w-[100px] text-white bg-orange-600 rounded-full duration-200",
        notActive: "p-2 w-[100px] text-black bg-neutral-300 rounded-full duration-200"
    },
    inputSearch: {
        active: "flex items-center gap-5 rounded-full w-[200px] lg:w-[500px] px-4 bg-neutral-100 border-2 border-sky-400 p-1",
        notActive: "flex items-center gap-5 rounded-full w-[200px] lg:w-[500px] px-4 bg-neutral-100 border-2 border-neutral-300 p-1"
    },
    input: {
        active: "w-full outline-none placeholder:text-neutral-950 bg-transparent",
        notActive: "w-full outline-none placeholder:text-neutral-600 bg-transparent"
    },
    overlay: {
        active: "w-full h-screen fixed top-0 left-0 bg-black/80 z-[50]"
    }
  }
  const [option, setOption] = React.useState({
    delivery: true,
  });
  const [focusSearch, setFocusSearch] = React.useState(false);
  const [menu, setMenu] = React.useState(false);

  const handleOption = ({ target }) => {
    const type = target.innerText.toLowerCase();
    if(!option[type]) {
        setOption({
            [type]: !option[type]
        });
    }
  }
  const handleFocusSearch = ({ target }) => {
    if(target.ariaLabel) {
        setFocusSearch(true);
    }
    else {
        setFocusSearch(false);
    }
  }
  const handleMenu = () => {
    setMenu(e => !e);
  }
  React.useEffect(() => {
    window.addEventListener("click", handleFocusSearch);
    return () => {
        window.removeEventListener("click", handleFocusSearch);
    }
  }, []);
  /* pra deixar o overlay do menu mobile sobrepondo o conteúdo do body, é necessário aplicar um z-index maior no overlay, e outro maior no aside (pois o aside ainda se sobrepoem ao overlay) */
  return (
    <header 
        className="w-full py-3" 
    >
      <nav className="w-full max-w-[1200px] mx-auto px-5 py-2">
        {/* navbar */}
        <div className="w-full flex justify-between items-center gap-5 lg:gap-0">
            {/* left items */}
            <div className="text-neutral-800 flex items-center gap-4">
                <IoMenuSharp 
                    size={35} 
                    className="cursor-pointer hover:text-orange-500 duration-150"
                    onClick={handleMenu}
                />
                <a 
                    href="#" 
                    rel="noopener noreferrer" 
                    className="text-2xl md:text-3xl"
                >
                    <span className="font-bold">
                        Delivery
                    </span> 
                    BR
                </a>
                <div className="hidden lg:flex items-center bg-neutral-300 rounded-full">
                    <button 
                        onClick={handleOption} 
                        className={option.delivery ? style.option.active : style.option.notActive}
                    >
                        Delivery
                    </button>
                    <button 
                        onClick={handleOption} 
                        className={option.retire ? style.option.active : style.option.notActive}
                    >
                        Retire
                    </button>
                </div>
            </div>
            {/* search input */}
            <div 
                aria-label="search" 
                className={focusSearch ? style.inputSearch.active : style.inputSearch.notActive}
            >
                <FaSearch 
                    aria-label="search" 
                    size={20}
                    className="text-orange-600"
                />
                <input 
                    type="text" 
                    className={focusSearch ? style.input.active : style.input.notActive}
                    placeholder="Search"
                    aria-label="search"
                />
            </div>
            {/* button */}
            <button className="hidden lg:flex items-center gap-2 bg-orange-600 text-white rounded-md font-medium py-2 px-4
            hover:bg-white hover:text-orange-600 duration-150 border border-orange-600">
                <FaCartArrowDown size={23} />
                Cart
            </button>
        </div>
        {/* mobile nav */}
        <MobileMenu onClick={handleMenu} state={menu} />
        {/* overlay */}
        {
            menu && <div className={style.overlay.active} />
        }
        {/* se for fazer um menu com aside e overlay, para aplicar efeito de entrada e saida apenas no menu é necessário desacoplar */}
      </nav>
    </header>
  )
}

export default Navbar;