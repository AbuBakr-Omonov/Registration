import React from 'react'

const Registration = () => {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
                    <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-semibold mb-1">Full Name</label>
                                    <input type="text" placeholder='Enter your name' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Email</label>
                                    <input type="email"  placeholder='Enter your email'  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Password</label>
                                    <input type="password"  placeholder='Enter your password'  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block font-semibold mb-1">Registered ID</label>
                                    <input type="text"  placeholder='Enter your id'  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Phone Number</label>
                                    <input  type="tel"  placeholder='Enter your number'  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Confirm Password</label>
                                    <input type="password"  placeholder='confirm your password'  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold mb-2">Gender</label>
                            <div className="flex gap-4">
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="male" className="mr-2" />
                                    Male
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="female" className="mr-2" />
                                    Female
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="gender" value="other" className="mr-2" />
                                    Other
                                </label>
                            </div>
                        </div>

                        <button  type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300">
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration