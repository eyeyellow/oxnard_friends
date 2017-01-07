import React from 'react';
import SlideShow from '../../components/SlideShow';
import { items } from '../../../public/data';

const SlideShowContainer = React.createClass({
  getInitialState: function() {
    return { index: 0 };
  },
  componentDidMount: function() {
     var intervalId = setInterval(this.timer, 1000);
     // store intervalId in the state so it can be accessed later:
     this.setState({intervalId: intervalId});
  },
  componentWillUnmount: function() {
     // use intervalId from the state to clear the interval
     clearInterval(this.state.intervalId);
  },
  timer: function() {
     // setState method is used to update the state
     this.setState({ index: (this.state.index + 1)%items.length });
  },

  render() {
    return (
      <div className="SlideShowContainer">
        {console.log(this.state)}
        <SlideShow item={items[this.state.index]} />
      </div>
    );
  }
})

export default SlideShowContainer;