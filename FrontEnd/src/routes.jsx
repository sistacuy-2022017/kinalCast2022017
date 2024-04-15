import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth/AuthPage";

const routes = [
    {path: '/auth', element: <AuthPage/>},
    {path: '/*', element: <DashboardPage/>}

]

export default routes