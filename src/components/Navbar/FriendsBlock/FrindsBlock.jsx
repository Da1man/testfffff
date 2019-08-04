import React from 'react';
import s from './FriendsBlock.module.css';
import FriendsItem from './FriendsItem/FrindsItem'


const FriendsBlock = (props) => {
    console.log(props);

    let friendsElements = props.friendsList.map ( f => <FriendsItem name={f.name} image={f.image} /> );

    return (
        <div className={s.friendsBlock}>
            {friendsElements}
        </div>
    )
}

export default FriendsBlock;