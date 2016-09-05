import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {reduxForm} from'redux-form';
import Select from 'react-select';
import * as Action from '../actions/const.js';
import GuestTableInfo from '../components/GuestTableInfo.js';

class GuestQueryTab extends Component {

  constructor(props) {
    super(props);
    this.onSelectGuest = this.onSelectGuest.bind(this);
    this.generateOptions = this.generateOptions.bind(this);
  }

  onSelectGuest(val){
    this.props.actions.selectGuest(val.value);
  }

  generateOptions(guests) {
    let options = [];
    guests.forEach(guest => {
      options.push(Object.assign({}, {"label": guest.name, "value": guest.id}));
    });
    return options;
  }

  render() {
    const {actions} = this.props;
    const options = this.generateOptions(this.props.guests);
    console.log(this.props.selectGuest);
    return(
      <div className="container indent">
        <div className="align-middle">
          <Select
            clearable
            options={options}
            value={this.props.selectGuest.name}
            onChange={this.onSelectGuest}
          />
          <GuestTableInfo 
          />
        </div>
      </div>
    );
  }
}

GuestQueryTab.propTypes = {
  actions: PropTypes.object.isRequired
};

const filterSelectGuest = function(guests) {
  const selectGuest = guests.filter(guest => {
    return guest.isSelect;
  });
  return selectGuest;
}

function mapStateToProps(state) {
  /* Populated by react-webpack-redux:reducer */
  const props = {
    guests: state.guestReducer,
    selectGuest: filterSelectGuest(state.guestReducer)
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  /* Populated by react-webpack-redux:action */
  const actions = {
    selectGuest: Action.selectGuest
  };
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default reduxForm(
  {
    form: 'ShipinfoDetailForm',
    fields: ['GROUP_ID', 'GROUP_NAME', 'VESSEL_CLASS', 'LENGTH_UPPER', 'LENGTH_LOWER', 'WIDTH_UPPER', 'WIDTH_LOWER', 'VESSEL_TYPES', 'FLAG_COUNTRYS']
  }, state => ({ // mapStateToProps
    guests: state.guestReducer,
    selectGuest: filterSelectGuest(state.guestReducer)
  }),
  {
    selectGuest: Action.selectGuest
  }
)(GuestQueryTab);

// export default connect(mapStateToProps, mapDispatchToProps)(GuestQueryTab);
