import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-white font-semibold text-4xl">
          Welcome Login  or Singup <br /> to proceed!
        </h1>
        <div className="flex justify-center items-center relative gap-5">
          <Link href="/login">
            <Button
              className="text-white hover:bg-white hover:bg-opacity-20 font-medium w-28 hover:text-white bg-[#4461F2] mt-10 h-12"
              style={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
            >
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              className="text-white hover:bg-white hover:bg-opacity-20 font-medium  w-28 hover:text-white bg-[#4461F2] mt-10 h-12"
              style={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
            >
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
