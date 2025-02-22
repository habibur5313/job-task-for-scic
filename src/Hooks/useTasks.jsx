import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
                    const axiosPublic = useAxiosPublic();
                    const { data: task = [], refetch } = useQuery({
                      queryKey: ["tasks"],
                      queryFn: async () => {
                        const res = await axiosPublic.get("/tasks");
                        return res.data;
                      },
                    });
                    return [task,refetch]
};

export default useTasks;