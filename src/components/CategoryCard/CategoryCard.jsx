
import React from 'react';

const CategoryCard = ({title,desc,image }) => {
    return (
        <>
            <div className="card me-2" >
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>

                </div>
            </div>
 

        </>

    );
};

export default CategoryCard;