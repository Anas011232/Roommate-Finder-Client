import { useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { FaLocationDot } from 'react-icons/fa6';
import { GiLifeBar } from 'react-icons/gi';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { MdOutlineBedroomParent } from 'react-icons/md';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const FancyMyListingCard = ({ post }) => {
    const [visible, setVisible] = useState(true);

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Confirm Deletion",
            text: "Do you really want to delete this listing? This action cannot be undone.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#00adb5",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://a10-server-alpha.vercel.app/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your roommate listing has been removed successfully.",
                                icon: "success"
                            });
                            setVisible(false); 
                        }
                    });
            }
        });
    };

    if (!visible) return null;

    return (
        <div className="bg-white shadow-2xl rounded-3xl p-6 max-w-3xl mx-auto mt-10 transition-transform hover:scale-[1.01] hover:shadow-[#00adb5]/40 duration-300 border-l-4 border-[#00adb5]">
           
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex-1 space-y-2">
                    <h2 className="text-2xl font-bold text-[#00adb5]">{post.title}</h2>
                    <p className="text-gray-600 flex items-center gap-2"><FaLocationDot className="text-[#00adb5]" /> {post.location}</p>
                    <p className="text-gray-600 flex items-center gap-2"><PiCurrencyCircleDollarFill className="text-[#00adb5]" /> Rent: {post.Amount} Tk</p>
                    <p className="text-gray-600 flex items-center gap-2"><MdOutlineBedroomParent className="text-[#00adb5]" /> Room Type: {post.roomType}</p>
                    <p className="text-gray-600 flex items-center gap-2"><GiLifeBar /> Lifestyle Preferences: {post.lifestyle}</p>
                    <p className="text-gray-600 flex items-center gap-2">
                        <BsFillPatchCheckFill className="text-[#00adb5]" /> Availability:
                        <span className={`${post.availability === 'available' ? 'text-green-600' : 'text-red-600'}`}>
                            {post.availability}
                        </span>
                    </p>
                </div>

                <div className="flex flex-col items-start sm:items-end space-y-2 text-right">
                    <p className="text-sm text-gray-500 flex items-center gap-2"><IoPersonCircleOutline className="text-[#00adb5]" /> {post.name}</p>
                    <p className="text-sm text-gray-500">{post.email}</p>

                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-xl text-sm mt-2">
                        Contact: {post.contact}
                    </div>

                    <div className="mt-4 space-y-3">
                        <div>
                            <Link to={`/updateUser/${post._id}`}><button className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-2 rounded-full shadow-md">
                            Update
                        </button></Link>
                        </div>
                        <div>
                            <button
                            onClick={() => handleDeleteUser(post._id)}
                            className="bg-gradient-to-r from-red-400 to-red-600 text-white px-4 py-2 rounded-full shadow-md"
                        >
                            Delete
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 border-t pt-4 text-gray-700 text-sm leading-relaxed">
                <strong className="text-[#00adb5]">Description:</strong><br />
                {post.description}
            </div>
        </div>
    );
};

export default FancyMyListingCard;
