import { useMutation } from "@tanstack/react-query";
import { testApiPost } from "../api/uc/hrs-users.api";

export const usePostQuery = () => {
  return useMutation({
    mutationFn: testApiPost,
    onSuccess: (data) => {
      console.log("data from onSuccess", data);
    },
    onError: (error) => {
      console.log("error from onError", error);
    },
  });
};
