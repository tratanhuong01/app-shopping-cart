import React from 'react'

type ItemTestimonialsProps = {
    data: {
        id?: number,
        avatar: string,
        name: string,
        description: string
    }

}
const ItemTestimonials = ({ data }: ItemTestimonialsProps) => {
    return (
        <div className='testimonials'>
            <img src={data.avatar} alt="" />
            <span>{data.name}</span>
            <p>{data.description}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="11.934" height="6.885" viewBox="0 0 11.934 6.885">
                <path d="M2.835-18.9,1.35-12.015H4.266L7.047-18.9Zm6.21,0L7.587-12.015H10.53L13.284-18.9Z"
                    transform="translate(-1.35 18.9)" fill="#ff3000" />
            </svg>
        </div>
    )
}

export default ItemTestimonials