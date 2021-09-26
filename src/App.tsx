import React from "react";
import Home from "./components/Root";
import "./App.css";
import { IntlProvider } from "react-intl";
import { getLocale, getMessages } from "./translation/Translation";
import { Switch, Route } from "react-router-dom";
import Routes from "./components/routes/Routes";
const locale = getLocale();
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <IntlProvider locale={locale} messages={getMessages(locale)}>
      <Home />
      <Switch>
        {Routes.map((route: any) => (
          <Route exact path={route.path} key={route.path}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </IntlProvider>
  );
};

export default App;
