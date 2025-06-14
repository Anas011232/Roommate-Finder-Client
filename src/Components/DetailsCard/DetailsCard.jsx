import React, { useState } from 'react';

import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const DetailsCard = () => {
    
   

    const post = useLoaderData();
    



    const [likeCount, setLikeCount] = useState(0);
    const [contactVisible, setContactVisible] = useState(false);
    const [likedUsers, setLikedUsers] = useState([]);



    const handleLike = () => {
        if (!post) return;

        const currentUser = 'currentUserId'; // Replace with actual user ID logic
        if (post.userId === currentUser) {
            alert("You cannot like your own post.");
            return;
        }

        if (likedUsers.includes(currentUser)) {
            alert("You have already liked this post.");
            return;
        }

        setLikeCount(likeCount + 1);
        setLikedUsers([...likedUsers, currentUser]);
    };

    if (!post) {
        return <div className="py-20 text-center">Loading...</div>;
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <div className="mt-10 flex justify-center px-4">
                    <div className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-6 rounded-xl shadow-xl max-w-md w-full text-white space-y-4">
                        <h2 className="text-3xl font-bold">{post.title}</h2>
                        <p><strong>Location:</strong> {post.location}</p>
                        <p><strong>Rent:</strong> {post.Amount} Tk</p>
                        <p>
                            <strong>Availability:</strong>{' '}
                            <span className={post.availability === 'available' ? 'text-green-200 font-semibold' : 'text-red-200 font-semibold'}>
                                {post.availability}
                            </span>
                        </p>
                        <p><strong>Lifestyle:</strong> {post.
                            lifestyle
                        }</p>

                        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Description</h3>
                            <p>{post.description}</p>
                        </div>

                        <p><strong>Contact:</strong> {contactVisible ? post.contactInfo : 'Click "Like" to view contact info'}</p>

                        <p><strong>Posted by:</strong> {post.name} ({post.email})</p>

                        <div className="flex items-center justify-between">
                            <p className="text-sm text-gray-300">{likeCount} people interested in</p>
                            <button
                                className="bg-white bg-opacity-90 text-indigo-600 font-semibold py-2 px-4 rounded shadow hover:bg-opacity-100 transition"
                                onClick={() => {
                                    handleLike();
                                    setContactVisible(true);
                                }}
                            >
                                <AiFillLike className="inline-block mr-2" />
                                Like
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DetailsCard;
