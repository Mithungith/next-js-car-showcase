"use client";
import { SearchManufactureProps } from '@/type';
import { Combobox, Transition } from '@headlessui/react';
import { useState, Fragment } from "react";
import Image from "next/image";
import { manufacturers } from "@/constants";

const SearchManufacture = ({ manufacture, setManufacture }: SearchManufactureProps) => {
    const [query, setQuery] = useState("");
    const filteredManufactures = query === "" ? manufacturers : manufacturers.filter((item) => item.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, "")))
    return (
        <div className="search-manufacture">
            <Combobox>
                <div className="relative w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car Logo"
                        />
                    </Combobox.Button>
                    <Combobox.Input className="search-manufacturer__input" placeholder="Volkswagen" displayValue={(manufacture: string) => manufacture} onChange={(e) => setQuery(e.target.value)} value={query}/>
                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <Combobox.Options>
                            {/* {filteredManufactures.length === 0 && query !== "" ? (
                                <Combobox.Option value={query} className="search-manufacturer__option">
                                    Create "{query}"
                                </Combobox.Option>
                            ):(
                                filteredManufactures.map((item)=>(
                                    <Combobox.Option key={item} className={({active}) => `
                                    relative search-manufacturer__option
                                    ${active ? 'bg-primary-blue text-white':'text-grey-900'}
                                    `} value={item}>
                                        {item}
                                    </Combobox.Option>
                                ))
                            )
                        } */}
                        {filteredManufactures.map((item)=>(
                            <Combobox.Option key={item} className={({active}) => `
                            relative search-manufacturer__option
                            ${active ? 'bg-primary-blue text-white':'text-grey-900'}
                            `} value={item}>
                                {item}
                            </Combobox.Option>
                        ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture
