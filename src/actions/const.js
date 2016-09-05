// let react = require('react/addons');
// let MyAction = require('actions/MyAction');
// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     MyAction.exampleMethod();
//   }
// }
// ```
// /* Populated by react-webpack-redux:action */

// 選到一個Guest
export const GUEST_ON_SELECT = 'GUEST_ON_SELECT'

export const selectGuest = (guestId) => {
	return {
		type: GUEST_ON_SELECT,
		guestId
	}
}
