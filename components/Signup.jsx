import React, { useState } from "react";
import { useRouter } from "next/router";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-[25px] shadow-md overflow-hidden">
        <div className="py-8 px-6">
          <h2 className="text-center text-3xl font-montserrat text-gray-900">
            Бүртгүүлэх
          </h2>
          <form className="mt-8 space-y-6">
            <div>
              <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                <label className="text-black"> Нэр </label>
                <input
                  type="text"
                  id="firstName"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between"
                />
              </div>
              <div className="w-full px-2 py-3 flex justify-between items-center  border-b border-gray-400">
                <label className="text-black"> И-Мэйл хаяг </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between "
                  placeholder="И-Мэйл"
                />
              </div>

              <div className="w-full px-2 py-3 flex justify-between  items-center border-b border-gray-400 ">
                <label className="text-black"> Нууц үг </label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between"
                  placeholder="Нууц үг"
                />
                <span
                  className="icon-gray-500 absolute  ml-[22rem]"
                  style={{ color: show ? "#4299e1" : "#7f7f7f" }}
                  onClick={() => setShow(!show)}
                >
                  <HiFingerPrint size={20} />
                </span>
              </div>

              <div className="w-full px-2 py-3 flex justify-between items-center  ">
                <label className="text-black"> Нууц үг </label>
                <input
                  type={show1 ? "text" : "password"}
                  name="cpassword"
                  autoComplete="none"
                  className="w-3/5 px-5 py-1 border border-gray-600 placeholder-gray-500 rounded-lg justify-between"
                  placeholder="Нууц үг баталгаажуулах"
                />
                <span
                  className="icon-gray-500 absolute  ml-[22rem]"
                  style={{ color: show1  ? "#4299e1" : "#7f7f7f" }}
                  onClick={() => setShow1(!show1)}
                >
                  <HiFingerPrint size={20} />
                </span>
              </div>
            </div>
            <div className="px-8 mt-4">
              <button
                type="submit"
                className="w-full py-3 px-4 border-2 text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-red-300"
              >
                Бүртгүүлэх
              </button>
            </div>
          </form>
          <div className="px-8 mt-6 flex items-center justify-between">
            <div className="w-full h-px bg-gray-300"></div>
            <p className="text-sm text-gray-500">Эсвэл</p>
            <div className="w-full h-px bg-gray-300"></div>
          </div>

          <div className="px-8 mt-4">
            <button className="w-full py-3 px-4 border-2  text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-red-300">
              Gmail-ээр нэвтрэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
