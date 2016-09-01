import React, { PropTypes } from 'react';
import Table from './Table.js';

const propTypes = {
  tables: PropTypes.array.isRequired
};

const defaultProps = {
};

class TableRow extends React.Component {
  render() {
	    return (
			<div className="row">
				{
					this.props.tables.map(tableNum =>
						<Table
							key={Math.random()}
							num={tableNum}
							col={this.props.tables.length}
							max={12}
							kid={2}
						/>
					)
				}
			</div>
	    );
	}
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;

export default TableRow;
