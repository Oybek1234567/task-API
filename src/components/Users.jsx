import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "./modal";
import {createPortal} from "react-dom";
const Users = ({ id, name }) => {
    const [open, setOpen] = useState(false);
    const handlyOpenModal = () => {
        setOpen(true);
    };
    const handlyCancel = () => {
        setOpen(false)
    }
    return (
        <div className='block mt-[20px] cursor-pointer border-4 w-[250px]'>
            <span>{id}.</span>
                <span>{name}</span>
            <button className='ml-[20px] text-lg' onClick={handlyOpenModal}>
                ...
            </button>

            {open &&
                createPortal(<Modal onCancel={handlyCancel} />, document.body)}
        </div>
    );
};

export default Users;
