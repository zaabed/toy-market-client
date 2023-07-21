import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopeCategory = () => {
    return (
        <div className="mt-20">
            <h1 className='mt-3 font-bold text-center text-5xl'>FIND YOUR <span className='text-purple-500'>TOYS</span></h1>
            <Tabs className=' mt-10 grid justify-items-center'>
                <TabList className='text-purple-500 font-bold text-1xl'>
                    <Tab>Maple Landmark My Best Blocks</Tab>
                    <Tab>Magz Super 300 Magnetic Building Set</Tab>
                    <Tab>Blockaroo Magnetic Foam Building Blocks</Tab>
                </TabList>

                <TabPanel className='mt-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <div className="card w-96 glass">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-amber-300">View Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="card w-96 glass ">
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Life hack</h2>
                                <p>How to park your car at your garage?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-amber-300">Learn now!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopeCategory;