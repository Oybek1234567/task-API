import { useEffect, useState } from "react";
import Comments from "./Comments";
import AgainModal from "./againModal";
import { createPortal } from "react-dom";

const Modal = ({ onCancel }) => {
   const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false)

    const openModal = () => {
        setOpen(true)
    }
    const handlyCancel = () => {
        setOpen(false)
    }
   useEffect(() => {
       fetchData();
   }, []);
   const fetchData = async () => {
       await fetch("https://jsonplaceholder.typicode.com/users")
           .then((res) => res.json())
           .then((data) => setUsers(data))
           .catch((err) => {
               console.log(err);
           });
   };
   console.log(users);
  return (
      <div
          className='top-0 left-0 w-full h-screen bg-[#0009] fixed'
          onClick={() => onCancel()}>
          <div
              className='w-[1000px] bg-[white] ml-[260px] h-[600px] mt-[60px] absolute rounded-xl cursor-pointer v'
              onClick={(e) => e.stopPropagation()}>
        <div>
        </div>{users.map((item) => (
            <Comments id={item.id} key={item.id} username={item.username} email={item.email} phone={item.phone} onClick={openModal} />
              ))}
          </div>

          {open && createPortal(<AgainModal onCancel={handlyCancel} />, document.body)}
      </div>
  );
}

export default Modal
