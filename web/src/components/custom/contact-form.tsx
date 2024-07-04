"use client";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { toast, useToast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";
import { DevImg } from "./dev-img";
import Image from "next/image";
import { PersonalInfo } from "./personal-info";

const inputFieldList = [
  {
    name: "Name",
    type: "text",
    placeholder: "Full Name",
  },
  {
    name: "Email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "Mobile No",
    type: "text",
    pattern: "^d{5}(-d{4})?$",
    placeholder: "Mobile No",
  },
];

export const ContactForm = () => {
  // const { toast } = useToast();

  const username = process.env.NEXT_PUBLIC_CALENDLY_USERNAME;
  const showDetails: number =
    process.env.NEXT_PUBLIC_CALENDLY_SHOW_DETAILS == "false" ? 1 : 0;
  const showCookies: number =
    process.env.NEXT_PUBLIC_CALENDLY_SHOW_COOKIES == "false" ? 1 : 0;

  return (
    <>
      <div className="w-full mx-auto h-full flex mt-10 justify-center gap-10">
        <div className="hidden lg:block w-[600px] h-full">
          <PersonalInfo />
        </div>
        <form className="w-[90%] h-full md:w-[40em] mt-3 flex flex-col justify-stretch gap-4">
          <h1 className="font-bold text-4xl text-center"> Drop message </h1>
          {inputFieldList.map((field, idx) => (
            <Input
              key={field.name}
              type={field.type}
              placeholder={field.placeholder}
              pattern={field?.pattern}
            />
          ))}
          <Textarea
            className="h-[300px] xl:h-[120px] justify-self-stretch self-stretch"
            placeholder="Type your message here."
          />
          <Button
            className="w-full"
            onClick={() => {
              toast({
                title: "Thank you",
                description: "I will contact u shortly",
              });
            }}
          >
            Submit
          </Button>
        </form>
      </div>
      {/* <div
          className="calendly-inline-widget w-screen h-screen"
          data-url={`https://calendly.com/siddheshjungade/30min?hide_landing_page_details=${showDetails}&hide_gdpr_banner=${showCookies}`}
          style={{
            minWidth: "100%",
            height: "700px",
          }}
        ></div> */}
    </>
  );
};
