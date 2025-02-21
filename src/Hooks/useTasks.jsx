import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {
                    const axiosPublic = useAxiosPublic();
                    const { data: tasks = [], refetch } = useQuery({
                      queryKey: ["tasks"],
                      queryFn: async () => {
                        const res = await axiosPublic.get("/tasks");
                        return res.data;
                      },
                    });
                    return [tasks,refetch]
};

export default useTasks;