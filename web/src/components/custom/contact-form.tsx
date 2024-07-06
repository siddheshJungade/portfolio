"use client";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "../ui/textarea";
import { DevImg } from "./dev-img";
import Image from "next/image";
import { PersonalInfo } from "./personal-info";
import { FormEvent, useState } from "react";

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
    placeholder: "Mobile No",
  },
];

export const ContactForm = () => {
  const { toast } = useToast();
  const [contactObj, setContactObj] = useState<any>({});
  const contactFormHandler = async (e: FormEvent) => {
    try {
      e.preventDefault();
      console.log(contactObj)
      const body: any = {
        name: contactObj['Name'],
        email: contactObj["Email"],
        message: contactObj["message"],
        mobile: contactObj["Mobile No"],
        source: "portfolio"
      }
      console.log(body)
      const respone = await fetch(
        "https://api-goconsistent-tech.onrender.com/notion/contact",
        {
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(body),
        }
      );
      console.log(respone)
      if(respone.ok){
        toast({
          title: "Thank you for connecting",
          description: "I will get back to shortly",
        });
        setContactObj({});
      }
    } catch (e) {
      toast({
        variant: "destructive",
        title: "Error",
        description: JSON.stringify(e),
      });
    }
  };

  return (
    <>
      <div className="w-full mx-auto h-full flex mt-10 justify-center gap-10">
        <div className="hidden lg:block w-[600px] h-full">
          <PersonalInfo />
        </div>
        <form
          className="w-[90%] h-full md:w-[40em] mt-3 flex flex-col justify-stretch gap-4"
          onSubmit={(e: FormEvent) => contactFormHandler(e)}
        >
          <h1 className="font-bold text-4xl text-center"> Drop message </h1>
          {inputFieldList.map((field, idx) => (
            <Input
              key={field.name}
              type={field.type}
              value={contactObj[field.name] ? contactObj[field.name] : ""}
              placeholder={field.placeholder}
              onChange={(e) =>
                setContactObj({ ...contactObj, [field.name]: e.target.value })
              }
            />
          ))}
          <Textarea
            className="h-[300px] xl:h-[120px] justify-self-stretch self-stretch"
            placeholder="Type your message here."
            value={contactObj["message"] ? contactObj["message"] : ""}
            onChange={(e) =>
              setContactObj({ ...contactObj, message: e.target.value })
            }
          />
          <Button className="w-full">Submit</Button>
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
