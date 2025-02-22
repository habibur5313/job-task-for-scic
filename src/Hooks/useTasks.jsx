import React, { useContext } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useTasks = () => {
                    const axiosPublic = useAxiosPublic();
                    const {user} = useContext(AuthContext)
                    const { data: task = [], refetch } = useQuery({
                      queryKey: ["tasks",user?.email],
                      queryFn: async () => {
                        const res = await axiosPublic.get(`/tasks/${user?.email}`);
                        return res.data;
                      },
                    });
                    return [task,refetch]
};

export default useTasks;