// import PostData from "./data/PostData";
import UsersData from "./data/UsersData";

const App = () => {
     
    return (
        <div className='flex w-[1100px] border-x-8 h-screen ml-[200px]'>
            <div className='w-[400px] border-r-8 pl-[30px] pt-[10px]'>
                <h1 className='text-xl border-b-8 w-[1090px] ml-[-30px]'>Users</h1>
          <UsersData />
            </div>
            <div className='w-[900px] pl-[30px] pt-[10px]'>
          <h1 className='text-xl'>Posts</h1> 
            </div>
        </div>
    );
};

export default App;
