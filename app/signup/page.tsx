"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaTelegramPlane, FaArrowLeft } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";



const SignUp = () => {

  const router = useRouter();
  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
    gender: '',
  })
  const [buttonDisabled, setButtonDisabled] = React.useState(false)

  const onSignup = async ()=> {
    console.log('')
  }
  
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
                    Sign Up Now <br />
                    Recharge Direct
                  </h1>
                  <p className="text-white text-xl">
                    if you already have an account <br />
                    you can{" "}
                    <Link href="/login">
                      {" "}
                      <span className="text-[#4461F2] font-medium ">
                        {" "}
                        Login here!{" "}
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
                      type="text"
                      placeholder="Username"
                      className="h-[48px] md:max-w-[400px] "
                      value={user.username}
                      onChange={(e)=> setUser({...user, username: e.target.value})}
                    />
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-[48px] md:max-w-[400px] "
                      value={user.email}
                      onChange={(e)=> setUser({...user, email: e.target.value})}
                    />
                    <Input
                      type="password"
                      placeholder="Password"
                      className="h-[48px] md:max-w-[400px] "
                      value={user.password}
                      onChange={(e)=> setUser({...user, password: e.target.value})}
                    />
                    <Select>
                      <SelectTrigger className="h-[48px] md:max-w-[400px] bg-white">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Select Gender</SelectLabel>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="Others">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button
                    className="text-white hover:bg-white hover:bg-opacity-20 font-medium flex justify-center items-center gap-2 text-lg hover:text-white bg-[#4461F2] w-full mt-10 h-14 "
                    style={{
                      boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)",
                    }}
                    onClick={onSignup}
                  >
                    Sign Up <FaTelegramPlane className="text-lg" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
