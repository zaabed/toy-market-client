
const Blog = () => {
    return (
        <div className=' mt-10 p-5'>
            <div className="collapse collapse-plus bg-purple-50">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p> The access token allows for access to different APIs and protected resources. The refresh token lets you mint new access tokens. You Can Store Refresh Token In Local Storage

                        Storing tokens in browser local storage provides persistence across page refreshes and browser tabs; however, if malicious users managed to run JavaScript in the SPA using a cross-site scripting (XSS) attack, they could retrieve the tokens stored in local storage.Auth0 recommends storing tokens in browser memory as the most secure option. Using Web Workers to handle the transmission and storage of tokens is the best way to protect the tokens, as Web Workers run in a separate global scope than the rest of the application.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-purple-50 mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    how to validate react props using propTypes?
                </div>
                <div className="collapse-content">
                    <p>In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the aggregate function of SQL.
                        When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline. Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.

                        Before we dive into the code, let's understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a "stage." For each stage that's defined, MongoDB executes them one after another in order to give a finalized output you're able to use.
                    </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-purple-50 mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are relational, and NoSQL databases are non-relational. SQL databases define and manipulate data-based structured query language (SQL).A NoSQL database has a dynamic schema for unstructured data.In almost all situations SQL databases are vertically scalable. This means that you can increase the load on a single server by increasing things like RAM, CPU, or SSD. But on the other hand, NoSQL databases are horizontally scalable. This means that you handle more traffic by sharding, or adding more servers in your NoSQL database. It is similar to adding more floors to the same building versus adding more buildings to the neighborhood. Thus NoSQL can ultimately become larger and more powerful, making these databases the preferred choice for large or ever-changing data sets.SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases, or wide-column stores. This makes relational SQL databases a better option for applications that require multi-row transactions such as an accounting system or for legacy systems that were built for a relational structure. </p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-purple-50 mt-2">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p><span><b>Express JS:</b> </span> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
                        Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks.

                        <span><b>Nest JS: </b></span> Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;