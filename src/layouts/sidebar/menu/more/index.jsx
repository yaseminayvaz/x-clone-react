import React from 'react'
import { Popover, Disclosure,DisclosureButton,DisclosurePanel } from '@headlessui/react'
function More() {
  return (
    <Popover className='relative'>
        <Popover.Button  className='py-[3px] block group outline-none'>
      
        <div className='gap-5 p-3 rounded-full inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a]'>
            <svg viewBox="0 0 24 24" aria-hidden="true"width={26.25} height={26.25} className='block'><path fill="#e7e9ea"d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"/></svg>
            <div className='pr-4 text-xl'>
                Daha Fazla
            </div>
        </div>
   
        </Popover.Button>
        <Popover.Panel className=' w-[318px]  absolute bottom-0 left-0 bg-black shadow-lg shadow-box rounded-xl'>
            <button  className='py-[3px] block group outline-none'>
                <div className='gap-5 p-3 rounded-full inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a] transition-colors'>
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className='block' aria-hidden="true" data-testid="icon"><path fill="#e7e9ea" d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"/></svg>
                        <div className='pr-4 text-m'>
                            Para kazanma
                        </div>
                </div>
            </button>
            <button  className='py-[3px] block group outline-none'>
                <div className='gap-5 p-3 rounded-full inline-flex items-center text-xl pr-4 group-hover:bg-[#eff3f41a]'>
                        <svg viewBox="0 0 24 24" width={26.25} height={26.25} className='block' aria-hidden="true" data-testid="icon"><path fill="#e7e9ea" d="M1.996 5.5c0-1.38 1.119-2.5 2.5-2.5h15c1.38 0 2.5 1.12 2.5 2.5v13c0 1.38-1.12 2.5-2.5 2.5h-15c-1.381 0-2.5-1.12-2.5-2.5v-13zm2.5-.5c-.277 0-.5.22-.5.5v13c0 .28.223.5.5.5h15c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-15zm8.085 5H8.996V8h7v7h-2v-3.59l-5.293 5.3-1.415-1.42L12.581 10z"/></svg>
                        <div className='pr-4 text-m'>
                          Reklamlar
                        </div>
                </div>
            </button>
            <Disclosure >
                <DisclosureButton className="py-2 px-4 font-bold hover:bg-[#eff3f41a] transition-colors w-full flex justify-start">içerik Üretici Stüdyosu</DisclosureButton>
                <DisclosurePanel className="text-gray-500 px-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, aut!
                </DisclosurePanel>
           </Disclosure>
           <Disclosure >
                <DisclosureButton className="py-2 px-4 font-bold hover:bg-[#eff3f41a] transition-colors w-full flex justify-start">Profosyonel Araçlar</DisclosureButton>
                <DisclosurePanel className="text-gray-500 px-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, aut!
                </DisclosurePanel>
           </Disclosure>
           <Disclosure >
                <DisclosureButton className="py-2 px-4 font-bold hover:bg-[#eff3f41a] transition-colors w-full flex justify-start">Ayarlar ve Destek</DisclosureButton>
                <DisclosurePanel className="text-gray-500 px-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, aut!
                </DisclosurePanel>
           </Disclosure>
           
        </Popover.Panel>
    </Popover>
   
  )
}

export default More