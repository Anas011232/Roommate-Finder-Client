import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const BrowseList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <div className="mt-10 max-w-7xl mx-auto px-4">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto bg-white shadow rounded-xl text-sm">
                            <thead className="bg-[#00adb5] text-white">
                                <tr>
                                    <th className="py-3 px-4 text-left">Title</th>
                                    <th className="py-3 px-4 text-left">Location</th>
                                    <th className="py-3 px-4 text-left">Rent</th>
                                    <th className="py-3 px-4 text-left">Availability</th>
                                    <th className="py-3 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {posts.map(post => (
                                    <tr key={post._id} className="border-b hover:bg-gray-100 transition">
                                        <td className="py-3 px-4 font-semibold">{post.title}</td>
                                        <td className="py-3 px-4">{post.location}</td>
                                        <td className="py-3 px-4">{post.Amount} Tk</td>
                                        <td className="py-3 px-4">
                                            <span className={`font-semibold ${post.availability === 'available' ? 'text-green-600' : 'text-red-600'}`}>
                                                {post.availability}
                                            </span>
                                        </td>
                                        <td className="py-3 px-4">
                                            <Link to={`/browseList/${post._id}`}>
                                                <button className="bg-gradient-to-r from-[#00adb5] to-[#00bcd4] text-white px-3 py-1 rounded-full text-xs shadow hover:scale-105 transition">
                                                    See Details
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {posts.length === 0 && (
                        <div className="text-center py-10 text-gray-500">
                            No listings found.
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BrowseList;
