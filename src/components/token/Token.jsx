import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUsername } from '../../redux/reducers/authReducer';
import { insertUser } from '../../api/requests';

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

function parseJwt(token) {
	var base64Url = token.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	return JSON.parse(jsonPayload);
}

export default function Token(props) {
	const dispatch = useDispatch();
	const { onLogin } = props;
	const query = useQuery();

	const token = query.get('token');
	// const state = query.get('state');

	// Only accept token if state matches
	// if (state === localStorage.getItem('state')) {
	dispatch(setToken({ token }));
	dispatch(setUsername({ username: parseJwt(token).username }));

	const Created = localStorage.getItem('userCreated');
	if (!Created) {
		const asyncInsert = async () => {
			let res = await insertUser(token);
		};
		asyncInsert();
	}
	localStorage.removeItem('state');
	// }

	onLogin(token);
	return <Redirect to='/game' />;
}
