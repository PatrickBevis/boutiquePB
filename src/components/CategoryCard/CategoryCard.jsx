import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React from 'react';

const CategoryCard = () => {
    return (
        <>
            <div className="card " >
                <img src="https://picsum.photos/id/100/200/300" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Category Example</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod delectus laboriosam similique culpa, inventore labore tenetur autem alias deserunt ullam magni natus, reiciendis, corporis esse eaque provident minus illo!</p>

                </div>
            </div>
 

        </>

    );
};

export default CategoryCard;