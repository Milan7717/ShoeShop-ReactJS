import React from 'react'
import { Button, Modal } from 'flowbite-react';

const CustomModal = (props) => {
    return (
      <>
        <Modal show={props.open} onClose={() => props.setOpen(false)}>
  {/* <!------------- modal ------------> */}
          
            <div className="relative w-full h-full max-w-7xl md:h-auto flex flex-col items-center justify-center rounded-lg ">
              
              <div>
                <img src={props.imagegallery} alt="" className="w-[100%] object-cover rounded-lg" />
              </div>
              <div className='m-1'>
            <Button  onClick={() => props.setOpen(false)}>Close</Button>
  
          </div>
            </div>
          
          
        </Modal>
      </>
    );
  }

export default CustomModal
