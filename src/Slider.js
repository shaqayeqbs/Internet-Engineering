import React, { Component } from "react";
import q1 from "./component/images/Slide1.jpg";
import q2 from "./component/images/slide2.jpg";
import q4 from "./component/images/slide3.jpg";
import q61 from "./component/images/slide4.jpg";

// this is array with adresses of background pictures
const imgUrl = [q1, q2, q4, q61];

// this is function returning div with background image which is slider photo

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "right",
  };

  return <div className="image-slide" style={styles}></div>;
};

// this is component of Slider

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }

  // here is function which is changing current index need to change the picture in slideshow
  componentDidMount() {
    let timeID = setInterval(() => {
      let current = this.state.currentIndex;
      // current = current +1
      current += 1;
      // current = current % 4
      current %= 4;
      this.setState({
        currentIndex: current,
      });
    }, 2000);
  }

  render() {
    return (
      <div className="slider">
        <ImageSlide url={imgUrl[this.state.currentIndex]} />
      </div>
    );
  }
}

export { Slider };
