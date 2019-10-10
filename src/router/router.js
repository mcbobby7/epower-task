import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Single from '../components/SinglePost';
import NoMatch from './NoMatch';
import ScrollToTop from './ScrollToTop';

class ReactRouter extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTop>
                    <Switch>
                        <Route exact path="/" component={App} />
                        <Route exact path="/post/:slug" component={Single} />
                        <Route component={NoMatch} />
                    </Switch>
                </ScrollToTop>
            </React.Fragment>
        );
    }
}

export default ReactRouter;
