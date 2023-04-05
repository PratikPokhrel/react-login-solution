import { api } from '@network/apis';
import axios from 'axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth, auth } = useAuth();

    const refresh = async () => {
        const response = await axios.post(api.auth.refresh, { token: auth?.accessToken, refreshToken: auth?.accessToken }, {
            withCredentials: true
        });
      
        setAuth((prev: any) => ({
            ...prev,
            user: { name: new Date().toDateString() }, 
            accessToken: response.data.data.token, roles: ['Admin']
        }))
        // setAuth((prev: any) => {return { user: {name:'PRATIK POKHAREL'}, accessToken: response.data.data.token,  roles:['Admin'] }});
        return response.data.data.token;
    }
    return refresh;
};

export default useRefreshToken;
