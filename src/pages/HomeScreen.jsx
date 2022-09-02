import React from 'react';
import CategoryCard from '../components/CategoryCard/CategoryCard';


const HomeScreen = () => {
    return (
        <>
            <h1 className='mb-5'>La boutique de Patrick Bévis</h1>
            <div className='d-flex'>
            <CategoryCard title= {'hommes'} desc = {'La mode pr les hommes'} image={"https://picsum.photos/id/200/100/100"}/>
            <CategoryCard title= {'femmes'} desc = {'La mode pr les femmes'} image={"https://picsum.photos/id/100/100/100"}/>
            </div>
        </>
    );
};

export default HomeScreen;