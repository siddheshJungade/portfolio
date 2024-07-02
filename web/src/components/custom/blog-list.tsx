"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { PaginationGroup } from "./pagination";
import { LOADER } from "./loader";
const Blog = () => {
  const [posts, setPosts] = useState<null | { publication: any }>(null);
  const [previousCourser, setPreviousCourser] = useState<string>("");
  const fetchPosts = async (endCourser: string) => {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        query: `{
        publication(host: "blog.siddheshjungade.dev") {
          title
          posts(first: 8, after: "${endCourser}") {
            pageInfo{
              hasNextPage
              endCursor
            }
            edges {
              node {
                url    
                title     
                coverImage {
                  url
                }
                publishedAt
              }
            }
          }
        }
      }`,
      }),
    });
    const ApiResponse = await response.json();
    setPosts(ApiResponse.data);
  };
  useEffect(() => {
    fetchPosts("");
  }, [previousCourser]);

  return posts ? (
    <div className="w-full grid gap-y-7">
      <div className="technology w-full justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mt-6">
        {posts &&
          posts?.publication?.posts.edges.map((post: any, _idx: number) => {
            return (
              <Card className="mt-6 grid w-full" key={_idx}>
                <CardHeader color="" className="relative h-50">
                  <Image
                    src={post.node.coverImage.url}
                    width={500}
                    height={500}
                    alt="card-image"
                  />
                </CardHeader>
                <CardContent>
                  <h5 className="font-bold mb-2">{post.node.title}</h5>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    className="gap-x-2  border  rounded-lg"
                    onClick={() =>
                      window.open(post.node.url, "_blank", "noopener")
                    }
                  >
                    <i className="fa fa-thin fa-book"></i>
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </div>
      <PaginationGroup onClickPrevious={() => {}} onClickNext={() => {}} />
    </div>
  ) : (
    <LOADER />
  );
};

export default Blog;
