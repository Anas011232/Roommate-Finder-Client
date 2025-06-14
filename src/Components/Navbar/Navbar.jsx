import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import { BiLogoFlutter } from 'react-icons/bi';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, signOutUser } = useContext(AuthContext);

    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [hoverOpen, setHoverOpen] = useState(false);
    let timeoutId = null;

    const handleSignOutUser = () => {
        signOutUser();
        navigate("/login");
    };

    const handleRoommate = (e) => {
        e.preventDefault();
        if (user) {
            navigate("/findRoommate");
        } else {
            navigate("/login");
        }
    };

    const handleMouseEnter = () => {
        clearTimeout(timeoutId);
        setHoverOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutId = setTimeout(() => setHoverOpen(false), 200);
    };

    const links = (
        <>
            <NavLink to="/" className="text-white hover:bg-[#00ADB5] px-3 py-1 rounded-md block">
                Home
            </NavLink>
            <NavLink onClick={handleRoommate} to="/findRoommate" className="text-white hover:bg-[#00ADB5] px-3 py-1 rounded-md block">
                Add to Find Roommate
            </NavLink>
            <NavLink to="/browseList" className="text-white hover:bg-[#00ADB5] px-3 py-1 rounded-md block">
                Browse Listing
            </NavLink>
            <NavLink to="/myList" className="text-white hover:bg-[#00ADB5] px-3 py-1 rounded-md block">
                My Listings
            </NavLink>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] shadow-md px-4 relative">
            {/* Start */}
            <div className="navbar-start flex items-center gap-2 relative">
                <button
                    className="mr-3 lg:hidden text-white text-2xl"
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    aria-label="Toggle mobile menu"
                >
                    ☰
                </button>
                <BiLogoFlutter  className="text-white" size={28} />
                <span className="text-white font-bold text-xl">Roomies</span>

                {mobileNavOpen && (
                    <div className="absolute top-full left-0 mt-2 w-40 bg-[#222831] rounded-md shadow-lg z-50">
                        <nav className="flex flex-col p-2 space-y-1">
                            {links}
                        </nav>
                    </div>
                )}
            </div>

            {/* Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-6">{links}</ul>
            </div>

            {/* End */}
            <div className="navbar-end relative">
                {!user ? (
                    <>
                        <NavLink to="/register" className="btn bg-[#00ADB5] text-white border-0 mr-2">
                            Signup
                        </NavLink>
                        <Link to="/login" className="btn bg-[#00ADB5] text-white border-0">
                            Login
                        </Link>
                    </>
                ) : (
                    <div
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                            src={user.photoURL}
                            alt="User"
                            className="w-10 h-10 rounded-full cursor-pointer border-2 border-[#00ADB5]"
                        />

                        {hoverOpen && (
                            <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-lg z-50 overflow-hidden">
                                <div className="flex items-center gap-3 px-4 py-3 border-b">
                                    <img
                                        src={user.photoURL}
                                        alt="User"
                                        className="w-10 h-10 rounded-full border border-[#00ADB5]"
                                    />
                                    <div>
                                        <p className="font-semibold text-[#222831]">{user.displayName || 'User'}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                </div>
                                <button
                                    className="w-full text-left px-4 py-3 text-red-600 hover:bg-gray-100"
                                    onClick={handleSignOutUser}
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
