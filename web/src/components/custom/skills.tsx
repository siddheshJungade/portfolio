const skillList = [
  {
    type: "Language",
    values: ["JavaScript", "TypeScript", "Java", "Python", "C/C++", "HTML5"],
    backgroundColor: "",
  },
  {
    type: "Technologies",
    values: [
      "Node.js",
      "Express",
      "Rest API",
      "AWS",
      "Nest.JS",
      "Docker",
      "Next.js",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Appsmith",
      "GitHub Action",
    ],
    backgroundColor: "",
  },
  {
    type: "Concepts",
    values: [
      "OOPS",
      "Backend Design Patterns",
      "DBMS",
      "Computer Networks",
      "Low Level Design",
      "High Level Design",
      "Data Structure & Algorithm",
      "Cloud",
    ],
    backgroundColor: "",
  },
  {
    type: "Tools",
    values: [
      "VS Code",
      "Postman",
      "Github",
      "Terminal",
      "Mac",
      "Linux",
      "Windows",
      "WSL",
    ],
    backgroundColor: "",
  },
];

export const Skills = () => {
  return (
    <>
      <div className="w-full mt-6 flex flex-col sm:flex-row gap-2 justify-center">
        {skillList.map((skillItem: any, idx: any) => {
          return (
            <>
              <div className="w-1/2 sm:w-1/4 bg-slate-400 p-3 mx-auto rounded-3xl">
                <h1 className="font-bold py-3 mt-2 text-lg ml-2 ">{skillItem.type}</h1>

                <ul className="grid  grid-flow-rows gap-2">
                  {skillItem?.values.map((item: any, _idx: number) => (
                    <li key={_idx} className="p-2 rounded-full bg-slate-300 ">
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
