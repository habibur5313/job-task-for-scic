import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useCount = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasksCount = {}, refetch: recall } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get('/tasks');
      return res.data.total;
    },
  });
  
  return {tasksCount, recall}
};

export default useCount;
