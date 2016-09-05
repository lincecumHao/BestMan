/* Combine all available reducers to a single root reducer.
 *
 * CAUTION: When using the generators, this file is modified in some places.
 *          This is done via AST traversal - Some of your formatting may be lost
 *          in the process - no functionality should be broken though.
 *          This modifications only run once when the generator is invoked - if
 *          you edit them, they are not updated again.
 */
import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import * as Action from '../actions/const.js';
/* Populated by react-webpack-redux:reducer */

const initGuest = [
	{'id':'0','table':'1','name':'周子銓','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'1','table':'1','name':'徐俊傑','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'2','table':'1','name':'魏小蘭','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'3','table':'1','name':'黃世禎','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'4','table':'1','name':'洪政煌','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'5','table':'1','name':'賴源正','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'6','table':'1','name':'楊傳凱','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'7','table':'1','name':'林伯慎','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'8','table':'2','name':'楊維寧','guests':3,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'9','table':'2','name':'呂永和','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'10','table':'2','name':'查士朝','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'11','table':'2','name':'廖淑美','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'12','table':'2','name':'楊靖慈','guests':2,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'13','table':'2','name':'柯碧雲','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'14','table':'2','name':'吳有華','guests':1,'checkin':false,'kids':0,'group':'男方母親-台科大同事'},
	{'id':'15','table':'3','name':'聶國禎(姑丈)','guests':1,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'16','table':'3','name':'孟昭光(姑姑)','guests':1,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'17','table':'3','name':'魏靜芬','guests':1,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'18','table':'3','name':'賴佳琪(提琴老師)','guests':1,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'19','table':'3','name':'杜清哲','guests':2,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'20','table':'3','name':'孟恬薪(姐)','guests':2,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'21','table':'3','name':'聶令媛(小表姊)','guests':2,'checkin':false,'kids':2,'group':'男方父親 -親友+管院同事'},
	{'id':'22','table':'3','name':'賴智明','guests':1,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'},
	{'id':'23','table':'3','name':'吳紹君','guests':1,'checkin':false,'kids':0,'group':'男方父親 -親友+管院同事'}
];


const guestReducer = (state = initGuest, action) => {
	switch(action.type){
		case Action.GUEST_ON_SELECT:
			state.forEach(guest => {
				if(guest.id === action.guestId){
					guest.isSelect = true;
				}else{
					guest.isSelect = false;
				}
			});
			return state;
		default:
			return state;
	}
};

const app = combineReducers({
	guestReducer, 
	form: formReducer
});

export default app;