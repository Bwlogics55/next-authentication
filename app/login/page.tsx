"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane, FaArrowLeft } from "react-icons/fa";

const mapButton = [
  {
    id: 1,
    src: "/google-logo.png",
    alt: "google-img",
  },
  {
    id: 2,
    src: "/apple-logo.png",
    alt: "apple-img",
  },
  {
    id: 3,
    src: "/facebook-logo.png",
    alt: "facebook-img",
  },
];



const Login = () => {
  return (
    <>
      <section className="min-h-screen w-full flex justify-center items-center relative">
        <Link href="/">
          <Button className="absolute top-5 left-5 border-[1.5px] border-white rounded-full hover:bg-gray-800 w-12 h-12">
            <FaArrowLeft />
          </Button>
        </Link>

        <div className="container xl:max-w-screen-xl mx-auto px-4 py-28">
          <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex justify-start items-center gap-6 lg:flex-nowrap flex-wrap">
              <div className="flex justify-start items-center gap-6 relative w-max">
                <div className="absolute -top-20 left-0 bg-[#DDA82A] rounded-full w-64 h-64 opacity-50 blur-[100px]"></div>
                <div className="absolute -bottom-20 right-0 bg-[#4461F2] rounded-full w-64 h-64 opacity-50 blur-[100px]"></div>
                <div className="space-y-10 relative">
                  <h1 className="text-3xl md:text-5xl font-semibold lg:leading-normal text-white">
                    Sign In to <br />
                    Recharge Direct
                  </h1>
                  <p className="text-white text-xl">
                    if you don’t an account <br />
                    you can{" "}
                    <Link href="/signup">
                      {" "}
                      <span className="text-[#4461F2] font-medium ">
                        {" "}
                        Register here!{" "}
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/person-floating.png"
                  alt="person-float"
                  width={500} // Set a default width (this will be the maximum width if screen size is smaller)
                  height={300} // Set a default height (this will be the maximum height if screen size is smaller)
                  // layout="responsive"
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="w-full">
                <form>
                  <div className="space-y-3 text-right">
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-[48px] md:max-w-[400px] "
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="h-[48px] md:max-w-[400px]"
                    />
                    <Button
                      variant="ghost"
                      className="text-white hover:bg-white hover:bg-opacity-20 hover:text-white"
                    >
                      Recover Password ?
                    </Button>
                  </div>
                  <Button
                    className="text-white hover:bg-white hover:bg-opacity-20 font-medium flex justify-center items-center gap-2 text-lg hover:text-white bg-[#4461F2] w-full mt-10 h-14 "
                   
                    style={{
                      boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)",
                    }}
                  >
                    Sign In <FaTelegramPlane className="text-lg" />
                  </Button>
                </form>
                <div className="">
                  <div className="my-14 bg-white h-0.5 relative w-full">
                    <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                      <h1 className="text-white bg-[#14162E] px-4 w-max ">
                        Or continue with
                      </h1>
                    </div>
                  </div>

                  <div className="flex justify-between items-center gap-5 mt-6">
                    {mapButton.map((item, index) => (
                      <Button key={index} className="bg-white hover:bg-white hover:bg-opacity-20 h-14 max-w-[117px] w-full">
                        <Image
                          src={item.src}
                          width={26}
                          height={26}
                          alt={item.alt}
                          className="object-contain rounded-full"
                        />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
