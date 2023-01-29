// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
export const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
        <Route path="/ppagina-inicial" element={Dashboard} />
        </Switch> 
        </BrowserRouter>
    );
}