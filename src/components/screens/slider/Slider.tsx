'use client'
import { useState } from 'react'
import Image from 'next/image'
import { SLIDES } from './slides.data'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Slider() {

  const [activeSlideId, setActiveSlideId] = useState(1);
  console.log(activeSlideId);
  return (
    <div className='relative rounded-3xl overflow-hidden'>
      <div className='flex w-full transition-transform duration-500 ease-in-out' style={{ transform: `translateX(-${(activeSlideId - 1) * 100}%)`}}>
        {SLIDES.map(slide => (
          <div key={slide.id} className='min-w-full' onDrag={e => {e.preventDefault()}}>
            <Image src={slide.image} alt="lf" className='w-full h-full object_cover' width={1635} height={367} draggable={false}/>
          </div>
        ))}
    </div>

    <div className='absolute z-10 top-1/2 -translate-y-4 w-full flex justify-between px-2'>
      <button onClick={() => setActiveSlideId(activeSlideId === 1 ? SLIDES.length : activeSlideId - 1)} className="bg-white/50 transition hover:bg-white/75 text-black font-bold p-1.5 rounded-lg">
        <ChevronLeft size={21} />
      </button>
      <button onClick={() => setActiveSlideId(activeSlideId === SLIDES.length ? 1 : activeSlideId + 1)} className="bg-white/50 transition hover:bg-white/75 text-black font-bold p-1.5 rounded-lg">
        <ChevronRight size={21} />
      </button>
    </div>
  </div>)
} 