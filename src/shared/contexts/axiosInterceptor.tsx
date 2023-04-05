import { axiosPrivate } from "@network/service";
import { useEffect } from "react";
import useAuth from "shared/hooks/useAuth";
import useRefreshToken from "shared/hooks/useRefreshToken";

const AxiosInterceptor = ({ children }: any) => {
    const refresh = useRefreshToken();
    const { auth }: any = useAuth();

    useEffect(() => {
        debugger;
        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    console.log(config.headers)
                    config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    console.log('un authorized')
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    console.log('newAccessToken', newAccessToken)
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh]);
    return children;
}

export default AxiosInterceptor;