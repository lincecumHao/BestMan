import React, { PropTypes } from 'react';

const propTypes = {
	num: PropTypes.string.isRequired,
	col: PropTypes.number.isRequired,
	max: PropTypes.number,
	kid: PropTypes.number
};

const defaultProps = {
	max: 12,
	kid: 0
};

class Table extends React.Component {
  render() {
  	let width = 12 / this.props.col;
  	let style = (this.props.num === '00' ? {'visibility': 'hidden'} : {});
  	let classWidth = 'col-md-' + width + ' guest-table ';
  	let current = parseInt(Math.random()*(this.props.max-0+1)+0,10);
  	let isFull = (this.props.max - current > 0 ? 'not-full' : 'is-full');
  	classWidth += isFull;
    return (
    	<div className={classWidth} style={style}>
			<div className="table-inline"><span className="tableNum">{this.props.num}桌</span></div>
			<div className="table-inline"><span className="current">{current}/{this.props.max}</span></div>
		</div>
    );
  }
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
