import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        loginnn: "Any",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    // API Call
    const data = await fetch("https://api.github.com/users/kiranchikhalikar");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { login, avatar_url } = this.state.userInfo;
    debugger;
    return (
      <div className="user-card">
        <img
          src={avatar_url}
          className="ml-24"
          alt="profile_pic"
          width="343"
          height="343"
        />
        {/* <h2>Name: {this.state.userInfo.login}</h2> */}
        {/* <h3>Location: {this.state.userInfo.name}</h3> */}
        {/* <h4>Contact: kmchikhalikar96@gmail.com</h4> */}
      </div>
    );
  }
}

export default UserClass;
