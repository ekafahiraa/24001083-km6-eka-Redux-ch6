import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import backgroundImage from "./bguser.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { fetchAuthUser } from "./redux/actions/authActions";

export default function AuthUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user); // Mengambil data user dari Reducers menggunakan useSelector

  // Mengambil data pengguna
  useEffect(() => {
    dispatch(fetchAuthUser());
  }, [dispatch]);

  return (
    <div
      style={{
        fontFamily: "sans-serif",
      }}
    >
      <div>
        <Navbar />
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "20px",
        }}
      >
        <div className="border-4 border-[#B22222] max-w-[400px] w-full rounded-xl mt-10 mb-10 py-2 px-2 pb-5 pt-3 mr-14">
          <div className="max-w-[450px] mx-auto flex flex-col justify-center items-center">
            <p className="text-3xl text-white font-semibold mt-10 mb-5 text-center">
              Welcome Back.
            </p>
            {user && (
              <>
                <p className="text-2xl text-white font-bold mb-10">
                  Hello, {user.name}!
                </p>

                <div className="text-left text-white mt-7 mb-10">
                  <p className="font-medium">
                    <span className="mr-2">Name:</span>
                    {user.name}
                  </p>
                  <p className="font-medium">
                    <span className="mr-2">Email:</span>
                    {user.email}
                  </p>
                  <p className="font-medium">
                    <span className="mr-2">Joined:</span>
                    {user.createdAt}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
