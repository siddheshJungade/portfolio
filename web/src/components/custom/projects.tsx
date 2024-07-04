"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { LOADER } from "./loader";

const Projects = () => {
  const [projects, setProjects] = useState<any>(null);
  const [count, setCount] = useState(7);
  const fetchProjects = async () => {
    const response = await fetch(
      "https://api.github.com/search/repositories?q=user:siddheshJungade+topic:project",
      {
        method: "Get",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const ApiResponse = await response.json();
    setProjects(ApiResponse);
    console.log(ApiResponse);
  };
  useEffect(() => {
    fetchProjects();
  }, []);

  return projects? (
    <div className="w-full justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2  mt-12">
      {projects?.items?.map((project: any, _idx: number) => {
        return (
          <Card className=" grid w-full" key={_idx}>
            <CardHeader color="" className=" font-bold text-lg">
              {project.name}
            </CardHeader>
            <CardContent>
              <h5 className=" mb-2">{project.description}</h5>
            </CardContent>
            <CardFooter className="flex w-full pt-0 gap-x-2">
              <Button
                className="gap-x-2 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
                onClick={() =>
                  window.open(project.html_url, "_blank", "noopener")
                }
              >
                <i className="fa fa-brands fa-github"></i>
                Repository
              </Button>
              <Button
                className="gap-x-2 bg-transparent text-gray-800 border-gray-400 border hover:bg-gray-100 rounded-lg"
                onClick={() => {
                  window.open(project.homepage, "_blank", "noopener");
                }}
              >
                <i className="fa fa-globe"></i>
                Live
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  ) : (
    <LOADER />
  );
};

export default Projects;
