import { lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from './Loading';

const Login = lazy(() => import('./Auth/Login'));
const Form = lazy(() => import('./Form/Form'));
const Admin = lazy(() => import('./Admin/Admin'));
const CreateForm = lazy(() => import('./Admin/CreateForm'));
const TopHeader = lazy(() => import('./Navigation/TopHeader'));

export default function Routing() {
	return (
		<Suspense fallback={<Loading />}>
			<TopHeader />
			<Switch>
				<Route exact path="/admin" component={Admin} />
				<Route exact path="/admin/:id" component={CreateForm} />
				<Route exact path="/:id" component={Form} />
				<Route exact path="/" component={Login} />
				<Redirect to="/" />
			</Switch>
		</Suspense>
	);
}
