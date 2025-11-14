import axiosClient from './axiosClient';
import { AxiosRequestConfig } from 'axios';

type methodType = "GET" | "DELETE" | "PUT" | "POST"

interface IHanldeApi extends AxiosRequestConfig {
    method: methodType;
    url: string
    data?: any;
    props?: any;
}

const handleApi = ({ method = "GET", url, data, ...props }: IHanldeApi & { responseType?: any }) => {
    return axiosClient({
        method,
        url,
        data,
         responseType: props?.responseType || "json",
        ...props
    })
}

export default handleApi