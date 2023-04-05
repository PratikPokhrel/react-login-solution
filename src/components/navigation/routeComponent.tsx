
import React, { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import PersistLogin from "shared/contexts/persistLogin"
import RequireAuth from "shared/contexts/requireAuth"
import { routes } from "shared/routes"
import { Icons, Layout } from ".."

const Team = React.lazy(() => import('@pages/team'));
const BusinessTitle = React.lazy(() => import('@pages/business-title'));
const Dashboard = React.lazy(() => import('@pages/dashboard'));
const Login = React.lazy(() => import('@pages/login'));
const Missing = React.lazy(() => import('@pages/missing'));
const Unauthorized = React.lazy(() => import('@pages/unauathorized'));

interface ILinkType {
    path: string;
    allowedRoles: string[];
    element: JSX.Element;
}

const RouteComponent = () => {

    const links = [
        { path: routes.login, allowedRoles: [], element: <Login /> },
        { path: routes.redirector, allowedRoles: ['Admin'], element: <Dashboard /> },
        { path: routes.businessTitle, allowedRoles: ['Admin'], element: <BusinessTitle /> },
        { path: routes.team, allowedRoles: ['Admin'], element: <Team /> },
        { path: routes.missing, allowedRoles: ['Admin'], element: <Missing /> },
        { path: routes.unauthorized, allowedRoles: [], element: <Unauthorized /> },
    ];

    function _map(link: ILinkType, idx: number) {
        return (
            <React.Fragment key={idx}>
                {link.allowedRoles && link.allowedRoles.length > 0 ?
                    <Route element={<RequireAuth allowedRoles={link.allowedRoles} />}>
                        <Route path={link.path} element={link.element} />
                    </Route>
                    :
                    <Route path={link.path} element={link.element} />}
            </React.Fragment>
        )
    }

    return (
        <Suspense fallback={<Icons name="circle" spin />}>
            <Routes>
                <Route path={routes.redirector} element={<Layout />}>
                    <Route path={routes.login} element={<Login />} />
                    <Route path={routes.unauthorized} element={<Unauthorized />} />
                    <Route path={routes.missing} element={<Missing />} />
                    <Route element={<PersistLogin />}>
                        <Route element={<RequireAuth allowedRoles={['Admin']} />}>
                            <Route path={routes.redirector} element={<Dashboard />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={['Admin']} />}>
                            <Route path={routes.businessTitle} element={<BusinessTitle />} />
                        </Route>

                        <Route element={<RequireAuth allowedRoles={['Admin']} />}>
                            <Route path={routes.team} element={<Team />} />
                        </Route>

                    </Route>
                </Route>
            </Routes>
        </Suspense>
    )
}

export default RouteComponent;