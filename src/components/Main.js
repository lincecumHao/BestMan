require('styles/App.css');

import React from 'react';
import {Tabs, Tab, Checkbox} from 'react-bootstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

class AppComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
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
		    	
		    </Tab>
		</Tabs>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
