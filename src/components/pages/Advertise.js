import Navbar from "../Navbar";
import { FaBullhorn, FaChartLine, FaGlobe, FaSearch, FaUsers } from 'react-icons/fa';

export default function Advertise() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold underline flex justify-center  text-white py-8">
                    Advertise
                </h1>
                <section className="px-4 py-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Welcome to WITS, your premier partner in the advertising and marketing field of the IT industry. At WITS Solutions, we specialize in crafting innovative and impactful marketing strategies tailored to meet the unique needs of IT companies.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaBullhorn className="text-yellow-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Digital Marketing</h3>
                                    <p className="text-sm font-light">Boost your online presence with targeted digital marketing strategies.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaChartLine className="text-green-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">SEO Optimization</h3>
                                    <p className="text-sm font-light">Enhance your search engine ranking and visibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Our expert team combines cutting-edge technology with creative ingenuity to boost your brand's visibility, drive engagement, and generate leads.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaGlobe className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Social Media Campaigns</h3>
                                    <p className="text-sm font-light">Engage your audience with strategic social media campaigns.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaSearch className="text-purple-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Targeted Advertising</h3>
                                    <p className="text-sm font-light">Reach the right audience with precise targeted ads.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <p className="text-lg font-light">
                            Whether you're looking to enhance your online presence, launch a product, or reach new audiences, TechAd Solutions offers a comprehensive suite of services including digital marketing, social media campaigns, SEO optimization, and targeted advertising.
                        </p>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center mt-4">
                            <FaUsers className="text-teal-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold">Customer Engagement</h3>
                                <p className="text-sm font-light">Build strong relationships with your customers through effective engagement strategies.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
