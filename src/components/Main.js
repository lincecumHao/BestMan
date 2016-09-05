require('styles/App.css');

import React from 'react';
import {Tabs, Tab, Checkbox} from 'react-bootstrap';
import TableRow from './TableRow.js';
import GuestQueryTab from '../containers/GuestQueryTab.js';
import 'react-select/dist/react-select.css';

const tableMap = [
	['20', '14', '6', '1'],
	['21', '15', '7', '2'],
	['22', '16', '8', '3'],
	['23', '17', '9', '4'],
	['24', '18', '10', '5'],
	['25', '19', '11', '00'],
	['00', '00', '12', '00']
];

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
		    <Tab eventKey={1} title="人員登錄">
		    	<GuestQueryTab />	
		    </Tab>
		    <Tab eventKey={2} title="桌次一覽">
		    	<div className="container indent">
		    		{
		    			tableMap.map(tables =>
		    				<TableRow
								key={tables}
								tables={tables}
							/>
						)
		    		}
		    	</div>
		    </Tab>
		</Tabs>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
