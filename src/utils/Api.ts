import axios from "axios";

type Config<T> = {
    url: string;
    body?: T;
    params?: any;
};

type Resp<T> = {
    status: number;
    data: T;
}

export function client<T = {}, G extends object = {}>({ url, ...rest }: Config<G>): Promise<Resp<T>> {
    if (rest.body) {
        return axios.post(url, { ...rest });
    }

    return axios.get(url, { ...rest });
}
