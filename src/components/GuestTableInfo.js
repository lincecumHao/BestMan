import React, { PropTypes } from 'react';
import {Checkbox} from 'react-bootstrap';

const propTypes = {
	name: PropTypes.string.isRequired,
	group: PropTypes.string.isRequired,
	table: PropTypes.string.isRequired,
	checkin: PropTypes.bool.isRequired
};

const defaultProps = {
	name: 'NO_SET',
	group: 'NO_SET',
	table: 'NO_SET',
	checkin: false
};

class GuestTableInfo extends React.Component {
  render() {
  	return (
    	<Checkbox validationState={(this.props.checkin ? 'success' : 'warning')} className="margin-top">
			<p className="font-setting">{this.props.name}({this.props.group})<span className="number-font">{this.props.table}</span>桌</p>
		</Checkbox>
    );
  }
}

GuestTableInfo.propTypes = propTypes;
GuestTableInfo.defaultProps = defaultProps;

export default GuestTableInfo;
