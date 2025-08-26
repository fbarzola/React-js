const styles = {
  container: {
    backgroundColor: "orange",
    minWidth: "400px",
    height: "100px",
    textAlign: "center",
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "3px solid black",
    borderRadius: "4px",
  },
};

const User = () => {
  const user = {
    name: "Daniel",
    email: "test@test.com",
  };

  return (
    <div style={styles.container}>
      <span>Name: {user.name}</span>
      <span>Email: {user.email} </span>
    </div>
  );
};

export default User;
