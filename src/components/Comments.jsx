const Comments = ({id,username, email, phone}) => {
  return (
    <div className="mt-[20px] ml-[50px]">
      <span>{id}.</span>
          <span>{username}</span>
          <span>{email}</span>
      <span>{phone}</span>
    </div>
  );
}

export default Comments
