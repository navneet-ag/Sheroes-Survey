import axios from 'axios';
import * as ActionTypes from '../ActionTypes';
import { apiUrl } from '../Url';

export const formCreate = data => {
	return async dispatch => {
		dispatch({ type: ActionTypes.FORM_CREATE_REQUEST });
		return await axios
			.post(apiUrl + '/forms/', data)
			.then(response => {
				dispatch({
					type: ActionTypes.FORM_CREATE_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				console.log(error.response);
				dispatch({
					type: ActionTypes.FORM_CREATE_FAILED,
					errmess: 'Error in connection with Server',
				});
			});
	};
};

export const formFetch = id => {
	return async dispatch => {
		dispatch({ type: ActionTypes.FORM_FETCH_REQUEST });
		return await axios
			.get(`${apiUrl}/forms/${id}/`)
			.then(response => {
				dispatch({
					type: ActionTypes.FORM_FETCH_SUCCESS,
					data: response.data,
				});
			})
			.catch(error => {
				console.log(error.response);
				dispatch({
					type: ActionTypes.FORM_FETCH_FAILED,
					errmess: 'Error in connection with Server',
				});
			});
	};
};
