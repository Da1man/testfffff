let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, how are you?', likesCount: 0 },
                { id: 2, post: 'It\'s my first post', likesCount: 26 },
                { id: 3, post: 'bla bla', likesCount: 211 },
                { id: 4, post: 'ae ae', likesCount: 21 },
            ],
            newPostText : 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your IT' },
                { id: 3, message: 'YO!!' },
                { id: 4, message: 'YO' }
            ]
        },
        sideBar: {
            friends: [
                {id: 1, name: 'Da1man', image: 'https://banner2.kisspng.com/20180403/bkq/kisspng-computer-icons-symbol-avatar-logo-clip-art-person-with-helmut-5ac35496b2daa3.1580708315227506147326.jpg'},
                {id: 2, name: 'AE AE', image: 'https://img2.freepng.ru/20180802/xaw/kisspng-clip-art-portable-network-graphics-computer-icons-user-staff-person-man-profile-boss-circle-svg-png-5b62ed560cb369.529707841533209942052.jpg'},
                {id: 3, name: 'ReactJS', image: 'https://img2.freepng.ru/20180920/xgt/kisspng-clip-art-user-computer-icons-avatar-encapsulated-p-music-user-avatar-svg-png-icon-free-download-412-5ba32576efa609.2240745715374186149816.jpg'},
                {id: 4, name: 'Yuriy', image: 'https://img2.freepng.ru/20180920/xgt/kisspng-clip-art-user-computer-icons-avatar-encapsulated-p-music-user-avatar-svg-png-icon-free-download-412-5ba32576efa609.2240745715374186149816.jpg'},
                {id: 5, name: 'Da1man', image: 'https://banner2.kisspng.com/20180403/bkq/kisspng-computer-icons-symbol-avatar-logo-clip-art-person-with-helmut-5ac35496b2daa3.1580708315227506147326.jpg'},
            ]
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber () {
        console.log('state is changed');
    },
    addPost () {
        let newPost = {
            id: 5,
            post: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;