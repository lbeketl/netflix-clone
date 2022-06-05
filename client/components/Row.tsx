import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, { useRef, useState } from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
    title: string
    movies: Movie[]
}

const Row = ({ title, movies }: Props) => {
    const rowRef = useRef<HTMLDivElement>(null)
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction: string) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div className="h-40 space-y-0.5 md:space-y-2">
            <h2
                className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5]
        transition duration-200 hover:text-white md:text-2xl"
            >
                {title}
            </h2>
            <div className="group relative md:-ml-2">
                <ChevronLeftIcon
                    className={`chevronIcon left-2 ${!isMoved && 'hidden'}`}
                    onClick={() => handleClick('left')}
                />
                <div
                    className="flex items-center scrollbar-hide space-x-0.5 overflow-scroll md:space-x-2.5
            md:p-2"
                    ref={rowRef}
                >
                    {movies.map((movie) => {
                        return <Thumbnail key={movie.id} movie={movie} />
                    })}
                </div>
                <ChevronRightIcon
                    className="chevronIcon right-2"
                    onClick={() => handleClick('right')}
                />
            </div>
        </div>
    )
}

export default Row