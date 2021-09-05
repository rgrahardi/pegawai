import { FETCH_USERS, ADD_USER, EDIT_USER, DELETE_USER } from "./types";

export const fetchUsers = () => dispatch => {
    fetch('https://reqaid.com/api/FakePosts')
    .then(res => res.json())
    .then(users => {
        users = users.map(user => {
            const { id, nama, kontak, posisi, alamat } = user;
            return {
                id,
                nama,
                kontak,
                posisi,
                alamat
            };
        });
        dispatch({
            type: FETCH_USERS,
            payload: users
        });
    })
    .catch(err => console.log(err));
};

export const addEditUsers = (userData) => dispatch => {
    if (!userData[0].edit) {
        dispatch({
            type: ADD_USER,
            payload: userData
        });
    } else {
        dispatch({
            type: EDIT_USER,
            payload: userData
        });
    }
};

export const removeUsers = (usersNameArr) => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: usersNameArr 
    });
};
