import React from 'react';
import ViewModal from './view/ViewModal';

const Container = ({ state, onClick, json }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/80 flex justify-center items-center">
      <ViewModal 
        state={state} 
        onClick={onClick} 
        json={json}
      />
    </div>
  )
}

export default Container;