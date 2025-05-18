import React, { useRef, useState, useEffect } from 'react'

const Registration = () => {
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const [password, satPassword] = useState("")
    const [registeredId, satId] = useState("")
    const [phone, satphone] = useState("")

    const [data, setData] = useState(JSON.parse( localStorage.getItem("data"))|| [])

    useEffect(() => {
        localStorage.setItem("data",JSON.stringify(data))
    },[data])

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            id: new Date().getTime(),
            fullname: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            confirmPassword: password,
            registeredId: registeredId,
            phone,

        };
        setData([...data, user])
        console.log(user);

        nameRef.current.value = ""
        emailRef.current.value = ""
        passwordRef.current.value = ""
        satPassword("")
        satId("")
        satphone("")

    }

    const  handleclick = (id) => {
        console.log(id);
        setData(data.filter((user) => user.id !== id))
        
    }
    return (
        <>
            <div className="min-h-[100vh] flex items-center justify-center flex-col  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
                    <h2 className="text-2xl font-bold text-center mb-6">Registration</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 max-[768px]:grid-cols-1 gap-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block font-semibold mb-1">Full Name</label>
                                    <input required ref={nameRef} type="text" placeholder='Enter your name' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Email</label>
                                    <input required ref={emailRef} type="email" placeholder='Enter your email' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Password</label>
                                    <input required ref={passwordRef} type="password" placeholder='Enter your password' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block font-semibold mb-1">Registered ID</label>
                                    <input required value={registeredId} onChange={(e) => satId(e.target.value)} type="text" placeholder='Enter your id' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Phone Number</label>
                                    <input required value={phone} onChange={(e) => satphone(e.target.value)} type="tel" placeholder='Enter your number' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                </div>
                                <div>
                                    <label className="block font-semibold mb-1">Confirm Password</label>
                                    <input required value={password} onChange={(e) => satPassword(e.target.value)} type="password" placeholder='confirm your password' className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
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

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg font-semibold transition duration-300">
                            Register
                        </button>
                    </form>
                </div>
            </div>

            <div className="min-h-[100vh]  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
                <div className=" container mx-auto flex flex-wrap gap-8">
                    {
                        data?.map((user) => (

                            <div className="bg-white rounded-2xl  p-8 w-full max-w-sm " key={user.id}>
                                <div className="flex items-center gap-4 mb-6">
                                    <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" className="w-20 h-20 rounded-full border-4 border-blue-500 shadow-md"
                                    />
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800">{user.fullname}</h2>
                                        <p className="text-gray-500 text-sm">Registered ID: <span className="font-medium">{user.registeredId}</span></p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-y-3 text-gray-700 text-base">
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Email</p>
                                        <p className="bg-gray-100 rounded px-3 py-2">{user.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Phone</p>
                                        <p className="bg-gray-100 rounded px-3 py-2">{user.phone}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Gender</p>
                                        <p className="bg-gray-100 rounded px-3 py-2">male</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 font-semibold mb-1">Password</p>
                                        <p className="bg-gray-100 rounded px-3 py-2">{user.password}</p>
                                    </div>
                                </div>
                                <div className="mt-6 text-center">
                                    <button onClick={()=> handleclick((user.id))} className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition">
                                       delate
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Registration