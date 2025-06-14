type props={
    handleClick:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Nav({handleClick}:props){
    return(
        <nav className="w-full text-white font-ubuntu flex justify-evenly p-7">
            <h1 className="text-2xl uppercase tracking-widest" >User Manager</h1>
            <button onClick={handleClick}  className="cursor-pointer transform transition duration-300 hover:scale-105 bg-white text-[#030712] rounded-md px-10 py-2 text-2xl">Add User</button>
        </nav>
    )
}