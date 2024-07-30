"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { PaginationGroup } from "./pagination";
import { LOADER } from "./loader";


const Blog = () => {
  const [apiResponse, setAPIResponse] = useState<any>(null);
  const [pageCount, setPageCount] = useState<number>(1);

  const fetchPosts = async (pageNo: number) => {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        query: `{
        user(username: "siddheshjungade") {
        username
        posts(pageSize: 8, page: ${pageNo} ,sortBy:DATE_PUBLISHED_DESC ) {
            totalDocuments
            nodes {
                id
                title
                url
                coverImage {
                  url
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                previousPage
                nextPage
            }
        }
    }
}`,
      }),
    });
    const ApiResponse = await response.json();
    setAPIResponse(ApiResponse.data.user);
  };
  useEffect(() => {
    fetchPosts(pageCount);
  }, [pageCount]);

  return apiResponse ? (
    <div className="w-full grid gap-y-7">
      <div className="w-full justify-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mt-6">
        {apiResponse &&
          apiResponse.posts.nodes.map((post: any, _idx: number) => {
            return (
              <Card className="mt-6 grid w-full" key={_idx}>
                <CardHeader color="" className="relative h-50">
                  <Image
                    src={post.coverImage.url}
                    width={500}
                    height={500}
                    alt="card-image"
                  />
                </CardHeader>
                <CardContent>
                  <h5 className="font-bold mb-2">{post.title}</h5>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button
                    className="gap-x-2  border  rounded-lg"
                    onClick={() => window.open(post.url, "_blank", "noopener")}
                  >
                    <i className="fa fa-thin fa-book"></i>
                    Read More
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </div>
      <PaginationGroup
        onClickPrevious={() => {
          const count = pageCount;
          return (
            (apiResponse.posts.pageInfo.hasPreviousPage && setPageCount(count - 1)));
        }}
        onClickNext={() => {
          const count = pageCount;
          return apiResponse.posts.pageInfo.hasNextPage && setPageCount(count + 1);
        }}
      />
    </div>
  ) : (
    <div className="mt-6">  
      <LOADER />
    </div>   
  );
};

export default Blog;
