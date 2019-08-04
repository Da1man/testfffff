import React from 'react';
import s from './FriendsItem.module.css';

const FriendsItem = (props) => {
    return (
        <div className={s.friendsItem}>
            <div className={s.friendAvatar}>
                <img src={props.image} />
            </div>
            <div className={s.friendsName}>
                <span>{props.name}</span>
            </div>
        </div>

    )
}

export default FriendsItem;