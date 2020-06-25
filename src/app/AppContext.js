import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

export const AppContext = React.createContext();

class AppContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: JSON.parse(window.sessionStorage.getItem('user')),
    };
  }

  componentDidMount() {
    const user = window.sessionStorage.getItem('user');
    if (user) {
      this.userActions.setUser(JSON.parse(user));
    }
  }

  userActions = {
    setUser: (user) => {
      this.setState(() => ({
        user: user,
      }));
    },
    cleanUser: () => {
      this.setState(() => ({
        user: undefined,
      }));
    },
  };

  render() {
    const { children } = this.props;
    const { user } = this.state;

    return (
      <AppContext.Provider
        value={{
          user: { user, actions: this.userActions },
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default withRouter(AppContextProvider);
