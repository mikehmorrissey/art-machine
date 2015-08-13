this.Login = React.createClass({
  mixins: [ReactRouter.Navigation],

  loginWithTwitter() {
    Accounts.onLogin(this.redirectToNext)
    Meteor.loginWithTwitter()
  },

  redirectToNext() {
    this.transitionTo('/')
  },

  render() {
    return (
      <div>
        <h3>Login</h3>
        <button onClick={this.loginWithTwitter}>Login with Twitter</button>
      </div>
    )
  }
})
