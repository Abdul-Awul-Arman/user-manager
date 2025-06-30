import { createPortal } from 'react-dom';
type Props = {
  handlerFunction: () => {};
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Modal({ handlerFunction, showModal, setShowModal }: Props) {
  return createPortal(
    <div
      onClick={() => setShowModal(false)}
      className={` z-50 bg-white/40 ${showModal ? ' opacity-100 pointer-events-auto' : ' pointer-events-none opacity-0'} fixed duration-300 ease-in  text-white m-auto  flex justify-center items-center rounded-md   inset-0 "`}
    >
      <div onClick={(e) => e.stopPropagation()} className="text-center bg-black w-[500px] h-[300px] rounded-2xl flex flex-col justify-center items-center">
        <p className="text-[30px] text-red-500">
          {' '}
          Do You Want <br /> To Delete The User
        </p>
        <div className="">
          <button
            onClick={handlerFunction}
            className="my-3 mr-5  cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-2  text-2xl"
          >
            Yes
          </button>
          <button
            onClick={() => setShowModal(false)}
            className="my-3  cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-2  text-2xl"
          >
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')!,
  );
}
