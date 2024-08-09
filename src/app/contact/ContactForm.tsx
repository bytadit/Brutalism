"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";
import { useToast } from "@/components/ui/use-toast";
import Spinner from "./../../components/spinner";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from "axios";
import GoogleCaptchaWrapper from "@/app/google-captcha-wrapper";
import { IoIosSend } from "react-icons/io";

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface PostData {
  gRecaptchaToken: string;
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: FC = () => {
  const [isSending, setIsSending] = useState(false); // Step 1: State variable to track sending status
  const [isVerifying, setIsVerifying] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();
  const { toast } = useToast();
  const { executeRecaptcha } = useGoogleReCaptcha();

  function handleSubmitForm(formData: FormData) {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not available yet");
      toast({
        variant: "destructive",
        title: "Failed",
        description:
          "Execute recaptcha not available yet likely meaning key not recaptcha key not set",
      });
      return;
    }
    executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken: string) => {
      submitEnquiryForm(gReCaptchaToken, formData);
    });
  }

  const submitEnquiryForm = (gReCaptchaToken: string, formData: FormData) => {
    async function goAsync() {
      const postData: PostData = {
        gRecaptchaToken: gReCaptchaToken,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      };
      try {
        setIsVerifying(true);
        const response = await axios.post("/api/contactFormSubmit", postData, {
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        });

        if (response?.data?.success === true) {
          setIsVerifying(false);
          console.log(`Verifying Captcha Success with score: ${response?.data?.score}`);
          setIsSending(true);
          sendEmail(formData)
            .then(() => {
              reset();
              toast({
                variant: "success",
                title: "Success",
                description: "Email sent successfully :)",
              });
            })
            .catch((err) => {
              toast({
                variant: "destructive",
                title: "Failed",
                description: "Email failed to send :(",
              });
            })
            .finally(() => {
              setIsSending(false);
            });
        } else {
          console.log(`Verifying Captcha Failed with score: ${response?.data?.score}`);
          toast({
            variant: "destructive",
            title: "Failed",
            description: "Captcha Error",
          });
        }
      } catch (error) {
        console.error("Error sending email:", error);
        // Handle error here
      }
    }
    goAsync().then(() => {}); // suppress typescript error
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="w-full max-w-lg">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            type="text"
            placeholder="Name"
            id="name"
            {...register("name", { required: true })}
          ></Input>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Input
            type="email"
            placeholder="Email"
            id="email"
            {...register("email", { required: true })}
          ></Input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Input
            type="text"
            placeholder="Subject"
            id="subject"
            {...register("subject", { required: true })}
          ></Input>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Textarea
            placeholder="Message"
            rows={5}
            {...register("message", { required: true })}
          ></Textarea>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <Button
            type="submit"
            variant={"default"}
            bgColor={"theme"}
            className="w-full"
            disabled={isVerifying || isSending}
          >
            {isVerifying && !isSending ? (
              <span className="flex flex-row items-center gap-2">
                Verifying Captcha <Spinner />
              </span>
            ) : (
              ""
            )}
            {isSending && !isVerifying ? (
              <span className="flex flex-row items-center gap-2">
                Sending Message <Spinner />
              </span>
            ) : (
              ""
            )}
            {isVerifying !== isSending ? (
              <span className="flex flex-row items-center gap-2"></span>
            ): (
              <span className="flex flex-row items-center gap-2">Send <IoIosSend className="w-4 h-4 text-white"/></span>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
