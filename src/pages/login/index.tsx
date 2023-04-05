import AppButton from "@components/button";
import { login } from "@store/actions/login";
import { AppDispatch, RootState } from "@store/store";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

const Login = () => {

    const { setAuth, auth } : any = useAuth();
    const loginLoading = useSelector((state: RootState) => state.login.loginLoading);

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [user, setUser] = useState({ email: '', password: '' });

    function onChange(e: any) {
        setUser(u => ({
            ...u, [e.target.name]: e.target.value
        }));
    }

    function onSubmit(e: any) {
        e.preventDefault();
        dispatch(login(user)).then((res) => {
            setAuth({ accessToken: res.payload.token, user: user , roles:['Admin']});
            navigate(from, { replace: true });
        })
    }

    return (
        <div style={{ width: '100%', height: '100vh', backgroundImage: `url("https://plus.unsplash.com/premium_photo-1676310601649-c0a78a17cc20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80)` }}>
            <div className="d-flex justify-content-around align-items-center">
                <Card style={{ width: '30%', marginTop: '10%' }}>
                    <Card.Body>
                        <form  onSubmit={onSubmit}>
                            <h3>Sign In</h3>
                            <div className="mb-3">
                                <label>Email address</label>
                                <input
                                    name="email"
                                    className="form-control"
                                    placeholder="Enter email"
                                    value={user.email}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    value={user.password}
                                    onChange={(e) => onChange(e)}
                                />
                            </div>
                            <div className="mb-3">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <label className="custom-control-label" htmlFor="customCheck1">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="d-grid">
                                <AppButton bg="primary" buttonHtmlType="submit"  title="Submit"  loading={loginLoading}/>
                            </div>
                            <p className="forgot-password text-right">
                                Forgot <a href="#">password?</a>
                            </p>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
export default Login;