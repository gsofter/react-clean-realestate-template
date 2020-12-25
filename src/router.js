import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import Layout from './layouts'

const routes = [
  {
    path: '/auth/login',
    Component: lazy(() => import('./pages/auth')),
    exact: true,
  },
  {
    path: '/list/',
    Component: lazy(() => import('./pages/list')),
    exact: true,
  },
  {
    path: '/room/:roomId',
    Component: lazy(() => import('./pages/room')),
    exact: true,
  },
  {
    path: '/page/404',
    Component: lazy(() => import('./pages/404')),
    exact: true,
  },
]

const mapStateToProps = ({ settings }) => ({
  routerAnimation: 'slide-fadein-up', // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
})

const Router = ({ history, routerAnimation }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Route
          render={(state) => {
            const { location } = state
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  appear
                  classNames={routerAnimation}
                  timeout={routerAnimation === 'none' ? 0 : 300}
                >
                  <Switch location={location}>
                    <Route
                      exact
                      path="/"
                      render={() => {
                        return <Redirect to="/list" />
                      }}
                    />
                    {routes.map(({ path, Component, exact }) => {
                      return (
                        <Route
                          path={path}
                          key={path}
                          exact={exact}
                          render={() => {
                            return (
                              <div className={routerAnimation}>
                                <Suspense fallback={null}>
                                  <Component />
                                </Suspense>
                              </div>
                            )
                          }}
                        />
                      )
                    })}
                    <Redirect to="/page/404" />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )
          }}
        />
      </Layout>
    </ConnectedRouter>
  )
}

export default connect(mapStateToProps)(Router)
