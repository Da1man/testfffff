const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'Dmitry', status: 'I am a boss', location : {city: 'Minsk', country: 'Belarus'} },
        {id: 2, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss too', location : {city: 'Moscow', country: 'Russia'} },
        {id: 3, photoUrl:'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'Andrew', status: 'I am a boss too', location : {city: 'Kiev', country: 'Ukraine'} },

    ],
};

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        };
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u })
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u })
            };
        default:
            return state;
    }
}


export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unollowAC = (userId) => ({type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({type: SET_USERS, users });

export default usersReducer;