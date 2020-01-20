import React from 'react'
import '../../styles/CourseCard.scss'

export default function CourseCard({title, author, price, credits, stars}) {
    return (
        <div className = "card-bg">
            <div className = "card-header">
                <span className="credits">{credits > 1 ? (`${credits} CREDITS`) : (`${credits} CREDIT`)}</span>
            </div>
            <div className = "card-body">
                <h3>{title}</h3>
                <h5>{author}</h5>
            </div>
            <div className = "card-footer">
                <div className = "price-color">{price > 0 ? (`$ ${price}`):("FREE")}</div>
                <div>{stars} Stars</div>
            </div>    
        </div>
    )
}
