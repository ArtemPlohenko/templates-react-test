import { Component } from "react";
import "./App.css";

// function WhoAmi({ name, surname, link }) {
//   return (
//     <div>
//       <h1>
//         {/* My name is {name.firstName}, surname - {surname} */}
//         My name is {name()}, surname - {surname}
//       </h1>
//       <a href={link}>My profile</a>
//     </div>
//   );
// }

// class
class WhoAmi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
    };
  }

  nextYear = () => {
    console.log("+++");
    // this.state.years++; // error
    this.setState({
      years: this.state.years + 1,
    });
  };

  render() {
    const { name, surname, link } = this.props;
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>
          {/* My name is {name.firstName}, surname - {surname} */}
          {/* My name is {name()}, surname - {surname} */}
          My name is {name}, surname - {surname}, age - {this.state.years}
        </h1>
        <a href={link}>My profile</a>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      {/* <WhoAmi name={{ firstName: "John" }} surname="Smith" link="facebook.com" />
      <WhoAmi name={{ firstName: "Alex" }} surname="Shepard" link="facebook.com" /> */}

      {/* <WhoAmi
        name={() => {
          return "John";
        }}
        surname="Smith"
        link="facebook.com"
      />
      <WhoAmi
        name={() => {
          return "Alex";
        }}
        surname="Shepard"
        link="facebook.com"
      /> */}

      <WhoAmi name="John" surname="Smith" link="facebook.com" />
      <WhoAmi name="Alex" surname="Shepard" link="facebook.com" />
    </div>
  );
}

export default App;
