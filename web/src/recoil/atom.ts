
import { atom } from "recoil";
import { PersistStorage, recoilPersist } from "recoil-persist";

const sessionStorage: PersistStorage | undefined = typeof window !== `undefined` ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({ key: 'resumeData', storage: sessionStorage });


export const resumeDataAtom = atom<any>({
    key: 'resumeDataState',
    default: {
        skillList: [
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
                    "serverless"
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
                value: ["VS Code", "Postman", "Github", "Terminal", "Mac", "Linux", "Windows", "WSL"],
                backgroundColor: "",
            }
        ]
    },
    effects_UNSTABLE: [persistAtom]
})


export const isAPIRunningAtom = atom<boolean>({
    key: 'isAPIRunning',
    default: false
})
