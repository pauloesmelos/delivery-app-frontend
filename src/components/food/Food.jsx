import React from 'react';
import { data } from '../../data/data';
import DisplayFood from './display-food/DisplayFood';
import Container from './modal/Container';

const Food = () => {
  const [openModalFood, setOpenModalFood] = React.useState(false);
  const [jsonFood, setJsonFood] = React.useState({});
  const [items, setItems] = React.useState([]);
  const [buttonActive, setButtonActive] = React.useState({
    type: "",
    price: ""
  });

  const filterType = ({ target }) => {
    const category = target.innerText.toLowerCase();
    setButtonActive({
      type: category,
      price: ""
    });
    if(category === "all") {
      setItems(data);
      setButtonActive({
        type: "all",
        price: ""
      })
    }
    else {
      const filterItems = data.filter((item) => item.category === category);
      setItems(filterItems);
    }
  }
  const filterPrice = ({ target }) => {
    const price = target.innerText.toLowerCase();
    let filterItems = [];
    setButtonActive({
      ...buttonActive, price: price
    }); // definindo qual botão de filtro está ativo
    if(buttonActive.type && !buttonActive.price) { // filtro por categoria
      filterItems = items.filter((item) => item.price === price);
    }
    else if(buttonActive.type && buttonActive.price) { // filtro por categoria e por preço
      filterItems = buttonActive.type === "all" ? data.filter((item) => item.price === price) : data.filter((item) => buttonActive.type === item.category && item.price === price);
    }
    else { // filtro por preço
      filterItems = data.filter((item) => item.price === price);
    }
    setItems(filterItems);
  }
  const handleOpenModal = (jsonFood) => {
    setJsonFood(jsonFood);
    setOpenModalFood(!openModalFood);
  }

  React.useEffect(() => {
    setItems(data);
  }, []);
  React.useEffect(() => {
    console.log(openModalFood);
  }, [openModalFood]);

  return (
    <section className="w-full">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="w-full">
          <div className="w-full md:text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-600 tracking-wide">
              Top Items Requested
            </h1>
          </div>
          {/* filter one */}
          <div className="w-full max-w-[800px]">
            <h4 className="text-lg md:text-xl text-slate-700 font-bold my-3">
              Filter Type
            </h4>
            <ul className="w-full flex md:justify-between items-center flex-wrap gap-5 md:gap-0"> {/* retirar o justify-between para telas mobile deixou ajustado e com melhores principios de UI/UX */}
              <li>
                <button onClick={filterType} className={buttonActive.type === "all" ? "btnFilterActive" : "btnFilter"}>
                  All
                </button>
              </li>
              <li>
                <button onClick={filterType} className={buttonActive.type === "burger" ? "btnFilterActive" : "btnFilter"}>
                  Burger
                </button>
              </li>
              <li>
                <button onClick={filterType} className={buttonActive.type === "pizza" ? "btnFilterActive" : "btnFilter"}>
                  Pizza
                </button>
              </li>
              <li>
                <button onClick={filterType} className={buttonActive.type === "salad" ? "btnFilterActive" : "btnFilter"}>
                  Salad
                </button>
              </li>
              <li>
                <button onClick={filterType} className={buttonActive.type === "chicken" ? "btnFilterActive" : "btnFilter"}>
                  Chicken
                </button>
              </li>
            </ul>
          </div>
          {/* filter two */}
          <div className="w-full max-w-[700px] mt-12 md:mt-0">
            <h4 className="text-lg md:text-xl text-slate-700 font-bold my-3">
              Filter Price
            </h4>
            <ul className="w-full flex md:justify-between items-center flex-wrap gap-5 md:gap-0">
              <li>
                <button onClick={filterPrice} className={buttonActive.price === "$" ? "btnFilterActive" : "btnFilter"}>
                  $
                </button>
              </li>
              <li>
                <button onClick={filterPrice} className={buttonActive.price === "$$" ? "btnFilterActive" : "btnFilter"}>
                  $$
                </button>
              </li>
              <li>
                <button onClick={filterPrice} className={buttonActive.price === "$$$" ? "btnFilterActive" : "btnFilter"}>
                  $$$
                </button>
              </li>
              <li>
                <button onClick={filterPrice} className={buttonActive.price === "$$$$" ? "btnFilterActive" : "btnFilter"}>
                  $$$$
                </button>
              </li>
            </ul>
          </div>
          {/* display with exibitions */}
          <DisplayFood handleOpenModal={handleOpenModal} items={items} />
        </div>
      </div>
      {/* modal view food */}
      { openModalFood && 
        <Container 
          state={openModalFood} 
          onClick={setOpenModalFood} 
          json={jsonFood}
        />
      }
    </section>
  )
}

export default Food;