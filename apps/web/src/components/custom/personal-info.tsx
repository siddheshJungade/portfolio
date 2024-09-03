import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
} from "lucide-react";
import { Card, CardContent, CardTitle } from "../ui/card";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Siddhesh Jungade",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+91 7020276567",
  },
  {
    icon: <MailIcon size={20} />,
    text: "siddheshjungade@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 13th Sep , 1999",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "B.Tech Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Pune, Maharashtra , India ",
  },
];

export const PersonalInfo = () => {
  return (
    <Card className="w-full mb-10 h-full mx-auto bg-slate-200 rounded-3xl">
      <CardTitle className="m-5 ">
        Unmatched Service Quality for Over 2 years
      </CardTitle>

      <CardContent className="">
        I specialize in crafting intuitive websites with cutting-edge
        technology, delivering dynamic and engaging user experiences
      </CardContent>
      <CardContent className="grid md:grid-cols-2 gap-4">
        {infoData.map((item, index) => {
          return (
            <div className="flex gap-x-4" key={index}>
              <div className="">{item.icon}</div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </CardContent>

      <CardContent className="">
        <CardContent className="">Languages Skill</CardContent>
        <CardContent className="">
          English, Hindi , Marathi
        </CardContent>
        <br className="white"/>
      </CardContent>
    </Card>
  );
};
