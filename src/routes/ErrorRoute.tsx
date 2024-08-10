import { useRouteError } from 'react-router-dom';

const ErrorRoute = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const error = useRouteError() as any;

    return (
        <>
            <h1>Oops!</h1>
            <p>Sorry, we ran into an issue :(</p>
            <i>{error?.statusText || error?.message}</i>
        </>
    );
};

export default ErrorRoute;