import React from 'react';
import { heroInfos } from '../../data/data';
import CardHero from './card/CardHero';

const Hero = () => {
  const [infos, setInfos] = React.useState([]);
  React.useEffect(() => {
    setInfos(heroInfos);
  }, []);
  return (
    <section className="w-full z-[1] mt-3">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="w-full relative">
            {/* overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 p-10">
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold flex items-center gap-3 mt-[10%]">
                    The 
                    <span className="text-orange-600">
                        Best
                    </span>
                </h1>
                <h1 className="text-3xl md:text-5xl lg:text-6xl text-white font-bold md:mt-5 flex items-center gap-3">
                    Foods
                    <span className="text-orange-600">
                        Delivered
                    </span>
                </h1>
            </div>
            <div className="w-full">
                <img 
                    src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Hero Image"
                    title="Hero Image"
                    className="object-cover w-full max-h-[700px]"
                /> {/* max-h-[]  é responsivo para imagens */} {/* hero com img, ajustar o tamanho apenas da img */}
            </div>
            {/* cards */}
            <div className="w-full max-w-[80%] absolute bottom-16 left-6 lg:left-24 p-2 lg:p-2 bg-white rounded-md hidden lg:block">
              <div className="mb-0 lg:mb-5">
                <h3 className="text-slate-800 text-center text-lg">        
                  Our app is
                  <span className="font-bold mx-2">globally+</span>
                  recognized for its excellence.
                </h3>
              </div>
              <div className="hidden lg:flex w-full mx-auto items-center justify-between gap- ">
                {infos.map((info) => (
                  <CardHero key={info.id * Math.random()} {...info} />
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;