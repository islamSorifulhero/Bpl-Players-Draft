import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchesedPlayers }) => {
    return (
        <div className='max-w-[1200px] mx-auto'>
           {
            purchesedPlayers.map(player =><SelectedCard player={player}></SelectedCard>)
           }
        </div>
    );
};

export default SelectedPlayers;