
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../Context/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const data = useLoaderData();
    const navigate=useNavigate()
   
    const { _id, title, location, availability, contact, description, lifestyle, roomType, Amount, name, email } = data;

    const handleUpdateUser = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const newUser = Object.fromEntries(formData.entries());

        fetch(`https://a10-server-alpha.vercel.app/updateUser/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    navigate('/myList')
                    Swal.fire({
                        title: "Successfully Updated!",
                        text: "Your listing has been updated.",
                        icon: "success",
                        confirmButtonText: "OK"
                        

                    });
                    
                    
                }
            })

    }
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="max-w-2xl mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-[#00ADB5]">🔄 Update Your Listing</h2>
                <form onSubmit={handleUpdateUser} className="space-y-5">
                    {/* Title */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Title</label>
                        <input type="text" defaultValue={title} name='title' className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Location</label>
                        <input type="text" defaultValue={location} name='location' className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" />
                    </div>

                    {/* Rent Amount */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Rent Amount (Tk)</label>
                        <input type="number" name='Amount' defaultValue={Amount} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" />
                    </div>

                    {/* Room Type */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Room Type</label>
                        <select name="roomType" defaultValue={roomType} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]">
                            <option value="">Select</option>
                            <option value="single">Single</option>
                            <option value="shared">Shared</option>
                        </select>
                    </div>

                    {/* Lifestyle Preferences */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Lifestyle Preferences</label>
                        <input type="text" name="lifestyle" defaultValue={lifestyle} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Description</label>
                        <textarea name="description" rows="4" defaultValue={description} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"></textarea>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Contact Info</label>
                        <input name="contact" type="text" defaultValue={contact} required className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]" />
                    </div>

                    {/* Availability */}
                    <div>
                        <label className="block font-medium text-gray-700 mb-1">Availability</label>
                        <select name="availability" defaultValue={availability} className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00ADB5]">
                            <option value="available">Available</option>
                            <option value="not-available">Not Available</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Your Email</label>
                            <input name="email" type="email" defaultValue={email} className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-lg" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Your Name</label>
                            <input name="name" type="text" defaultValue={name} className="w-full bg-gray-100 text-gray-500 px-4 py-2 rounded-lg" />
                        </div>
                    </div>


                    {/* Submit Button */}
                    <div className="text-center">
                        <button type="submit" className="bg-gradient-to-r from-[#00ADB5] to-[#00FFF0] hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-md">
                            🔄 Update Listing
                        </button>
                    </div>
                </form>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default UpdateUser;