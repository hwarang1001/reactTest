const User = (props) => {
  const user = props.user;
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.phone}</td>
    </tr>
  );
};
export default User;
