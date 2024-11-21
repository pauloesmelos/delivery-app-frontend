import React from 'react';
import { headlineItems } from '../../data/data';
import CardHeadline from './card/CardHeadline';

const Headline = () => {
  const [headline, setHeadline] = React.useState([]);
  React.useEffect(() => {
    setHeadline(headlineItems);
  }, []);

  return (
    <section className="w-full py-24">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-800">
                Know our
                <span className="font-bold ml-2">
                    restaurants
                </span>
            </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {headline.map((item) => (
                <CardHeadline key={item.id * Math.random()} {...item} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Headline;