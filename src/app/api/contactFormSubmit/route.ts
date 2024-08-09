import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: Request, response: Response) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const postData = await request.json();
  const { gRecaptchaToken, name, email, subject, message } = postData;

  console.log(
    "gRecaptchaToken, name, email, subject, message:",
    gRecaptchaToken?.slice(0, 10) + "...",
    name,
    email,
    subject,
    message
  );

  let res: any;
  const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

  try {
    res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (e) {
    console.log("recaptcha error:", e);
    return NextResponse.error();
  }

  if (res && res.data?.success && res.data?.score > 0.5) {
    // Save data to the database from here
    console.log("Saving data to the database:", name, email, subject, message);
    console.log("res.data?.score:", res.data?.score);

    return NextResponse.json({
      success: true,
      name,
      score: res.data?.score,
    });
  } else {
    console.log("fail: res.data?.score:", res.data?.score);
    return NextResponse.json({ success: false, name, score: res.data?.score });
  }
}
