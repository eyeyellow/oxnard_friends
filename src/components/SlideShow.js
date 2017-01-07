import React from 'react';
const { array } = React.PropTypes;
import SlideShowItem from './SlideShowItem';

const SlideShow = React.createClass({
  getInitialState: function() {
    return { index: 0 };
  },
  componentDidMount: function() {
     var intervalId = setInterval(this.timer, 3000);
     // store intervalId in the state so it can be accessed later:
     this.setState({intervalId: intervalId});
  },
  componentWillUnmount: function() {
     // use intervalId from the state to clear the interval
     clearInterval(this.state.intervalId);
  },
  timer: function() {
     // setState method is used to update the state
     this.setState({ index: (this.state.index + 1)%this.props.items.length });
  },

  render() {
    return (
      <div className="SlideShow">
        <ul id="slides">
          {this.props.items.map((item) => (
            <SlideShowItem visibility={parseInt(item.id, 10) === this.state.index ? 'slide showing' : 'slide' } title={item.title} image={item.image} slideClass={item.slideClass} imageClass={item.imageClass} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
})


SlideShow.propTypes = {
  items: array
}


export default SlideShow;