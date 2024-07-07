import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Government Collage Of Engineering, Yavatmal",
        qualification: "B.Tech (Computer Engineering)",
        years: "2018 - 2022",
      },
      {
        university: "AK National High School & Jr. Collage, Khamgaon",
        qualification: "H.S.C",
        years: "2018 - 2018",
      },
      {
        university: "Lions Dnyampith, Khamgaon",
        qualification: "SSC",
        years: "2016-2016",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "DigitalAPICraft Pvt. Ltd.",
        role: "Software Developer",
        years: "Dec 2022 - Present",
      },

      {
        company: "Hexaware Technologies",
        role: "Graduate Engineer Trainee",
        years: "Jun 2022 - Dec 2022 ",
      }
    ],
  },
];
export const Qualification = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <div className="w-full">
      {/* experience and education wrapper  */}
      <div className="grid md:grid-cols-2 justify-start justify-start  gap-y-8">
        {/* experience  */}
        <div className="flex flex-col items-start gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <Briefcase />
            <h4 className="capitalize font-medium">
              {getData(qualificationData, "experience").title}
            </h4>
          </div>
          {/* list  */}
          <div className="flex flex-col gap-y-8">
            {getData(qualificationData, "experience").data.map(
              (item: any, index: number) => {
                const { company, role, years } = item;
                return (
                  <div className="flex gap-x-8 group" key={index}>
                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                    </div>
                    <div>
                      <div className=" font-semibold text-xl leading-none mb-2">
                        {company}
                      </div>
                      <div className="text-lg leading-none text-muted-foreground mb-4">
                        {role}
                      </div>
                      <div className="text-base font-medium">{years}</div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
        {/* education  */}
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4 items-center text-[22px] text-primary">
            <GraduationCap size={28} />
            <h4 className="capitalize font-medium">
              {getData(qualificationData, "education").title}
            </h4>
          </div>
          {/* list  */}
          <div className="flex flex-col gap-y-8">
            {getData(qualificationData, "education").data.map(
              (item: any, index: number) => {
                const { university, qualification, years } = item;
                return (
                  <div className="flex gap-x-8 group" key={index}>
                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                    </div>
                    <div>
                      <div className=" font-semibold text-xl leading-none mb-2">
                        {university}
                      </div>
                      <div className="text-lg leading-none text-muted-foreground mb-4">
                        {qualification}
                      </div>
                      <div className="text-base font-medium">{years}</div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
