
const Blog = () => {
    return (
        <div className=' mt-10 p-5'>
            <div className="collapse collapse-plus bg-amber-100">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Tell us the differences between uncontrolled and controlled components?
                </div>
                <div className="collapse-content">
                    <p>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.In React, a controlled component is a component that is controlled by React state, while an uncontrolled component is a component that maintains its own internal state.

                        A controlled component receives its current value and an update callback via props, and the parent component manages the state of the component. When the user interacts with the component, the parent component updates the state, which in turn updates the  value.

                        An uncontrolled component, maintains its own internal state, and when the user interacts with the component, it updates its own state, which in turn updates the  value.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-amber-100 mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    how to validate react props using propTypes?
                </div>
                <div className="collapse-content">
                    <p>PropTypes are simply a mechanism that ensures that the passed value is of the correct datatype. This makes sure that we receive an error at the very end of our app by the console which might not be easy to deal with.

                        I recommend using them in short apps like projects for self-practice but it's totally up to you. For larger projects like for a client,  often a wise choice and a good practice to use them.

                        There are many different types of PropTypes and all of them have their unique ES6 classes which we can use. We will discuss every type in this article.Below is an example that shows us how to use these PropTypes for type checking in our app. As we discussed already, they are defined as objects with a key and a value pair where the key is the name of the object while value contains the classes which will be used for type checking.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-amber-100 mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Tell us the difference between nodejs and express js?
                </div>
                <div className="collapse-content">
                    <p>Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser. You need to remember that NodeJS is not a framework and  not a programming language. Most of the people are confused and understand  a framework or a programming language. We often use Node.js for building back-end services like APIs like Web App or Mobile App.  used in production by large companies such as Paypal, Uber, Netflix, Walmart and so on.C, C++, JavaScript.Run-time platform or environment designed for server-side execution of JavaScript.Express is a small framework that sits on top of Node.web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your  functionality with middle ware and routing. It adds helpful utilities to Node.js's HTTP objects. It facilitates the rendering of dynamic HTTP objects. </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-amber-100 mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is a custom hook, and why will you create a custom hook?
                </div>
                <div className="collapse-content">
                    <p>Custom Hooks are typically used for local component state management and can handle specific functionality, such as form validation or API calls.Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which ensures clean code and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code. </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;