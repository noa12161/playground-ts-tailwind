import { Iuser } from "./../api/uc/hrs-users.api";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import { testApiGet } from "../api/uc/hrs-users.api";

export const useGetQuery = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: testApiGet,
    // select: useCallback((data: Iuser) => data.id, []),
    select: (data) => data.data.id,
  });
};
