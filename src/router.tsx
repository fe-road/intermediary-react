import { createBrowserRouter } from 'react-router-dom';

import AppRoute from './routes/AppRoute.tsx';
import ErrorRoute from './routes/ErrorRoute.tsx';

import HomeRoute from './routes/HomeRoute.tsx';
import HooksRoute from './routes/HooksRoute.tsx';
import ContactsRoute from './routes/ContactsRoute.tsx';
import ContactItemRoute, { loader as contactItemLoader } from './routes/ContactItemRoute.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppRoute />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: 'home',
                element: <HomeRoute />
            },
            {
                path: 'contacts',
                element: <ContactsRoute />,
                children: [
                    {
                        path: ':id',
                        element: <ContactItemRoute />,
                        loader: contactItemLoader,
                    }
                ],
            },
            {
                path: 'hooks',
                element: <HooksRoute />
            }
        ]
    },
]);

export default router;
