"use client";
import { CarProps } from '@/type';
import { Dialog,Transition } from '@headlessui/react';

interface CarDetailsProps{
    isOpen:boolean;
    closeModal:()=>void;
    car:CarProps;
}
const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen}  >
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0" enterTo="opacity-100" Leave="ease-in duration-200" LeaveFrom="opacity-100" leaveTo="opacity-0"/>
        </Dialog>
      </Transition>
    </>
  )
}

export default CarDetails;
