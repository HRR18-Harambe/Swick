import React, { Component, PropTypes } from 'react';
// import addButtonClick from '../reducers/addButtonClick';
// shoud this be a class?Not sure yet, only creating
// eslint-disable-next-line react/prefer-stateless-function
class SettingDisp extends Component {

  constructor(props) {
    super(props);
    this.state = { buttonName: 'HRR' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ buttonName: event.target.buttonName,
      URLName: event.target.URLName,
     });
  }

  render() {
    const { addButtonClick, active } = this.props;
//    console.log('settingsContainer: active is set to ', active);
    console.log('PROPS', this.props);
    if (active) {
      return (
        <div className="settingsPanel">
          <h1>Settings</h1>
          <h5>Configure a new button</h5>
          Button Name:
          <input
            type="text"
            buttonName={this.state.buttonName}
            onChange={this.handleChange} // add function to do this
          />
          <button onClick={addButtonClick}>Create button</button>
          Add a URL for this button to open:
          <input
            type="text"
            buttonName={this.state.URLName}
            onChange={this.handleChange} // add function to do this
          />
          <button>add URL to this button</button>
        </div>
      );
    }
    return (<div />);
  }
}

SettingDisp.propTypes = {
  active: PropTypes.bool,
  addButtonClick: PropTypes.func,
};

export default SettingDisp;