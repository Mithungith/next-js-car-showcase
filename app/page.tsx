import { Hero, SearchBar, CustomFilter } from '@/components';
import Image from 'next/image';
import {fetchCars} from "@/utils";
import CarCards from '@/components/CarCards';

export default async function Home() {

  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length<1 || !allCars;
  return (
    <main>
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Car Catalogue
            </h1>
            <p>Expolore the cars you might like</p>
          </div>

          <div className="home__filter">
              <SearchBar/>
              <div className="hame__filter-container">
                <CustomFilter title="fuel"/>
                <CustomFilter title="year"/>
              </div>
          </div>

          {!isDataEmpty ? (
            <section>
                <div className="home__cars-wrapper">
                {allCars.map((car,index)=>(
                  <CarCards car={car}/>
                ))}
                </div>
            </section>
          ):<div className="home__error-counter">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>}
      </div>
    </main>
  )
}
