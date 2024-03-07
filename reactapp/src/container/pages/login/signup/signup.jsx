const SignUp = ({ handleSingUp, handleSignedState }) => {
  return (
    <form onSubmit={handleSingUp}>
      <div className="mb-4">
        <label
          for="username"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Username
        </label>
        <input
          type="username"
          name="username"
          id="username"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Username"
          required
        />
      </div>
      <div className="mb-4">
        <label
          for="password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Enter your password"
          required
        />
      </div>
      <div className="mb-4">
        <label
          for="confirm_password"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          name="confirm_password"
          id="password"
          className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          placeholder="Confirm password"
          required
        />
      </div>

      <div className="flex items-center flex-reverse mb-4">
        <a
          href="#"
          onClick={() => handleSignedState(true)}
          className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Already have a Account?
        </a>
      </div>
      <button
        type="submit"
        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default SignUp;
