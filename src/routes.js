import * as React from "react";
import { useRoutes } from 'react-router-dom';
import Home from './views/home/Home';
import WidgetCreator from './views/widgetCreator/WidgetCreator';
// layouts
export default function Router() {

    let routes = useRoutes([
        {
            path: '',
            element: <Home />,
        },
        {
            path: '/widget_creator',
            element: <WidgetCreator />,
        },
    ]);

    return routes;
}

