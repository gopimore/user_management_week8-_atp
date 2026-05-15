import { useLocation } from "react-router";

function User() {
  let { state } = useLocation();
  const user = state?.user;

  if (!user) {
    return (
      <div className="text-center text-red-500 p-8">
        <p className="text-2xl font-semibold">No user selected.</p>
        <p className="mt-2 text-lg text-gray-600">Open the user details page from the users list to view a profile.</p>
      </div>
    );
  }

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.dateOfBirth}</p>
      <p>{user.mobileNumber}</p>
    </div>
  );
}

export default User;