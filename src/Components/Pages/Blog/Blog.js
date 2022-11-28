import React from 'react';


const Blogs = () => {

    return (
        <div className='mt-10 lg:m-10 pb-24'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook.

                        Global (UI) state – Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Server state – Data that comes from an external server that must be integrated with our UI state.
                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        URL state – Data that exists on our URLs, including the pathname and query parameters.
                        URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;