require('styles/App.css');

import React from 'react';
import {Tabs, Tab, Checkbox} from 'react-bootstrap';
import Select from 'react-select';
import TableRow from './TableRow.js';
import 'react-select/dist/react-select.css';

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

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
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
		    <Tab eventKey={1} title="人員登錄">
		    	<div className="container indent">
		    		<div className="align-middle">
		    			<Select
			    			clearable
			    			options={options}
			    		/>
			    		<Checkbox validationState="success" className="margin-top">
					    	<p className="font-setting">王大明2(同事)<span className="number-font">123</span>桌</p>
					    </Checkbox>
		    		</div>
		    	</div>
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
