"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const ForgetPasswordComponent = ({}) => {
  const router = useRouter();
  const handleEmailInput = (data) => {
    setEmail(data);
  };
  const onForgetSubmit = async () => {
    try {
      const data = {
        email: email,
      };
      const apiUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL + "/user/forgetpassword";
      axios
        .post(apiUrl, data)
        .then((response) => {
          console.log("111", response);
          if (response.data.status == 200) {
            toast.success("Check you email!", { position: "top-right" });
            router.push("/resetpassword");
          } else {
            console.log(response.data.data.message);
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
          toast.error("Submit Failure", { position: "top-right" });
          // Handle the error
        });
      // Sending a POST request to the backend
    } catch (error) {
      console.error("sdfsd", error);
    }
  };
  const [email, setEmail] = useState("");

  return (
    <>
      <section className="relative z-10 overflow-hidden pt-36 pb-16 md:pb-20 lg:pt-[180px] lg:pb-28">
        <div className="container">
          <ToastContainer />
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[500px] rounded-md bg-primary bg-opacity-5 py-10 px-6 dark:bg-dark sm:p-[60px]">
                <h3 className="mb-8 text-center text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Forget Password
                </h3>
                <div className="mb-8">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full rounded-md border border-transparent py-3 px-6 text-base text-black placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:text-white dark:shadow-signUp"
                    onChange={(email) => {
                      handleEmailInput(email.currentTarget.value);
                    }}
                  />
                </div>
                <div className="mb-6">
                  <button
                    className="flex w-full items-center justify-center rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
                    onClick={() => {
                      onForgetSubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>
                {/* </form> */}
                <p className="text-center text-base font-medium text-black dark:text-white">
                  <Link href="/signin" className="text-primary hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 left-0 z-[-1]">
          <svg
            width="1440"
            height="969"
            viewBox="0 0 1440 969"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_95:1005"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="1440"
              height="969"
            >
              <rect width="1440" height="969" fill="#090E34" />
            </mask>
            <g mask="url(#mask0_95:1005)">
              <path
                opacity="0.1"
                d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                fill="url(#paint0_linear_95:1005)"
              />
              <path
                opacity="0.1"
                d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                fill="url(#paint1_linear_95:1005)"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_95:1005"
                x1="1178.4"
                y1="151.853"
                x2="780.959"
                y2="453.581"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_95:1005"
                x1="160.5"
                y1="220"
                x2="1099.45"
                y2="1192.04"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default ForgetPasswordComponent;
