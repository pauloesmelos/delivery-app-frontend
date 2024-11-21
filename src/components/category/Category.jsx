import React from 'react';
import { categories } from '../../data/data';
import CardCategory from './card-category/CardCategory';
const Category = () => {
  const [categoriesFood, setCategoriesFood] = React.useState([]);
  React.useEffect(() => {
    setCategoriesFood(categories);
  }, []); // simuling request API GET

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="w-full">
            <div className="w-full text-center">
                <h1 className="text-4xl text-orange-600 font-bold">
                    Top Categories
                </h1>
            </div>
            <div className="w-full max-w-[1000px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
                {categoriesFood.map((category) => (
                    <CardCategory key={category.id * Math.random()} {...category} />
                ))}
            </div>
        </div>
      </div>
    </section>
  )
}

export default Category;