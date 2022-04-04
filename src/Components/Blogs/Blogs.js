import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border border-3 border-slate-500 m-20 p-20'>
                <h1 className='text-2xl font-bold'>What is context API ?</h1>
                <p className='font-mono text-lg text-slate-600'>In a React app, a data passed from parent to child with the help of props, but sometime is hard to send the data to others many components by the props .But the Context api provide a way to share a data to the components without having a explicitly pass a prop through every level of the tree.</p>
            </div>
            <div  className='border border-3 border-slate-500 m-20 p-20'>
                <h1 className='text-2xl font-bold'>What is Semantic Tag ?</h1>
                <p className='font-mono text-lg text-slate-600'>The Semantic elements help to describe their meaning in a machine and humane readable way.Developer can easily know what this elements used for. For an example header tag use in header section anyone can understand this tag contains all the header elements.Their are many types of semantic elements on html.</p>
            </div>

        </div>
    );
};

export default Blogs;