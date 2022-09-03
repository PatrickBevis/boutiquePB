import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';


const HomeScreen = () => {


    const categoriesInit = [
        { id: "1", title: "hommes", desc: "La mode pour lui", image: "https://picsum.photos/id/100/400/200" },
        { id: "2", title: "femmes", desc: "La mode pour elle", image: "https://picsum.photos/id/101/400/200" },
        { id: "3", title: "enfants", desc: "La mode pour eux", image: "https://picsum.photos/id/102/400/200" },
        { id: "4", title: "bébé", desc: "La mode pour eux aussi", image: "https://picsum.photos/id/103/400/200" }

    ]

    const categoryElements = categoriesInit.map(category =>
        <div className='d-flex col-lg-3 col-12 d-flex justify-content-center' key={category.id}>
            <CategoryCard title={category.title} desc={category.desc} image={category.image} />
        </div>

    );
    return (
        <>
            <h1 className='mb-5'>La boutique de Patrick Bévis</h1>
            <div className="row">{categoryElements}
            </div>


        </>
    );
};

export default HomeScreen;