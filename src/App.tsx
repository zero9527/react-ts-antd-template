import * as React from 'react';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import Footer from '@/components/footer';
import { RouteComponentProps, withRouter } from 'react-router';
import Cookies from 'js-cookie';
import styles from './App.scss';

import { IntlProvider } from 'react-intl';
import messages from '@/lang';

interface Props extends RouteComponentProps {
  [prop: string]: any
}
export interface IState {
  lang: string,
  timer?: any
}
export type State = Readonly<IState>;

export interface IAppContext {
  appname: string
}
const defaultContext: IAppContext = { appname: 'react-antd-ts' };
export const AppContext = React.createContext(defaultContext);

class App extends React.Component<Props, State> {
  public readonly state: State = {
    lang: Cookies.get('lang') || 'zh'
  };
  
  constructor(props: Props) {
    super(props);
  }
  
  public onLangChange(locale: string) {
    Cookies.set('lang', locale);
    this.setState({ lang: locale });
  }

  public render() {
    // console.log(this.props);
    const { lang } = this.state;

    return (
      <div className={styles.app}>
        <IntlProvider key="intl" locale={lang} messages={messages[lang]}>
          <AppContext.Provider value={defaultContext}>
            <Header lang={lang} onLangChange={(locale: string) => this.onLangChange(locale)} />
            <Sidebar />
            { this.props.children }
            <Footer />
          </AppContext.Provider>
        </IntlProvider>
      </div>
    );
  }
}

export default withRouter(App);
