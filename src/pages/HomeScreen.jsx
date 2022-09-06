import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';
import ContactForm from '../components/ContactForm/ContactForm';
import categoriesInit from '../Data/category.data';

const HomeScreen = ({isDark}) => {


 

    const categoryElements = categoriesInit.map(category =>
        <div className='d-flex col-lg-3 col-12 d-flex justify-content-center' key={category.id}>
            <CategoryCard title={category.title} desc={category.desc} image={category.image} />
        </div>

    );
    return (
        <>
        <div className={isDark ? 'bg-dark text-white' : 'bg-white text-dark'} >
            <h1 className='mb-5'>La boutique de Patrick Bévis</h1>
            <div className="row">{categoryElements}
            <ContactForm />
            </div></div>


        </>
    );
};

export default HomeScreen;