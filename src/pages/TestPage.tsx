import { useQuery, useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";
import {
  hrsuserslistapi,
  Iuser,
  testApiGet,
  testApiPost,
} from "../api/uc/hrs-users.api";

import { Ihrsuserslistapires } from "../api/uc/hrs-users.api";
import { useGetQuery } from "../hooks/useGetQuery";
import { usePostQuery } from "../hooks/usePostQuery";

// const data = {
//   cmd: "1105",
//   bid: "a01.noa12161@ucware",
//   language: "ko",
// };

const TestPage = () => {
  // const { data, isError, isFetched, isFetching, isLoading } = useQuery({
  //   queryKey: ["test"],
  //   queryFn: testApiGet,
  //   onSuccess: (data) => {
  //     console.log("onSuccess from useQuery", data);
  //   },
  //   onError: (error) => {
  //     console.log("error from onError", error);
  //   },
  // });

  const { data, isError, isLoading, error } = useGetQuery();
  // const { data: tData, isLoading: tIsLoading, mutate } = usePostQuery();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // console.log({
  //   tData,
  //   tIsLoading,
  // });

  return <div className="bg-red-200 w-full h-full">TestPage</div>;
};

export default TestPage;
