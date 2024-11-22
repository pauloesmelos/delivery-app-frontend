import React from 'react';
import ViewModal from './view/ViewModal';

const Container = ({ state, onClick, json, toastify }) => {
  return (
    <div className="w-full h-screen fixed top-0 left-0 bg-black/80 flex justify-center items-center z-50"> {/* z index do container que implementa o modal deve ser maior que o do footer, pois o footer tava sobrepondo o modal */}
      <ViewModal 
        state={state} 
        onClick={onClick} 
        json={json}
        toastify={toastify}
      />
    </div>
  )
}

export default Container;