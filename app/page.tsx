import { Hero, SearchBar, CustomFilter } from '@/components';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
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
      </div>
    </main>
  )
}
