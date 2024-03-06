const handleLogin = () => {};

const Login = () => {
  return (
    <div className="flex justify-center mt-6">
      <form onSubmit={handleLogin}>
        <label for="name">Name:</label>
        <input
          type="text"
          name="name"
          className="border border-2 px-4 py-2 m-2"
        />
        <br />
        <label for="password">Password</label>
        <input
          type="text"
          name="password"
          className="border border-2 m-2 px-4 py-2"
        />
        <br />
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-[32px] py-3 bg-blue-500 rounded-[20px] text-xl text-white inline-block mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
