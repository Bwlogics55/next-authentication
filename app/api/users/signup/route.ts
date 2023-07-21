import connect from "@/db/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, passowrd } = reqBody;
    console.log(reqBody);
    //check if user exist
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User Already Exits" },
        { status: 400 }
      );
    }
    // hash Password
    const salt = await bcryptjs.genSalt(10);
    const hashPassowrd = await bcryptjs.hash(passowrd, salt);

    const newUser = new User({
      username,
      email,
      password: hashPassowrd,
    });

    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
