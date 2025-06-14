import React, { useEffect, useState, useContext } from 'react';
import FancyMyListingCard from '../FancyMyListingCard/FancyMyListingCard';
import { AuthContext } from '../Context/AuthContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


const MyListings = () => {
    const { user } = useContext(AuthContext);

    const [myPosts, setMyPosts] = useState([]);

 useEffect(() => {
    if (user && user.email) {
        fetch(`https://a10-server-alpha.vercel.app/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                // extra security: client side e filter korei set koro
                const filtered = data.filter(post => post.email === user.email);
                setMyPosts(filtered);
            })
            .catch(err => console.error(err));
    } else {
        setMyPosts([]);
    }
}, [user]);

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div>
                <div className="min-h-screen bg-[#f2f4f8] py-10 px-4">
                    <h1 className="text-3xl font-bold text-center text-[#00adb5] mb-8">📋 My Roommate Listings</h1>
                    {
                        myPosts.length > 0 ? (
                            myPosts.map(post => (
                                <FancyMyListingCard key={post._id} post={post} />
                            ))
                        ) : (
                            <p className="text-center text-gray-600">No listings found.</p>
                        )
                    }
                </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MyListings;
