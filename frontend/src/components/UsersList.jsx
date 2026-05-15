import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
    async function getUsers() {
      try {
        let res = await fetch(`${BASE_URL}/user-api/users`, {
          method: "GET",
        });

        if (res.status === 200) {
          let resObj = await res.json();
          let fetchedUsers = [];

          if (Array.isArray(resObj.payload)) {
            fetchedUsers = resObj.payload;
          } else if (Array.isArray(resObj.users)) {
            fetchedUsers = resObj.users;
          } else if (Array.isArray(resObj)) {
            fetchedUsers = resObj;
          }

          setUsers(fetchedUsers);
        } else {
          throw new Error("Failed to load users");
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getUsers();
  }, []);

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  if (loading) {
    return <p className="text-center text-3xl text-lime-600">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 text-2xl">{error.message}</p>;
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-5xl font-bold text-gray-800">List of Users</h1>
          <p className="mt-2 text-gray-600">{users.length} user{users.length === 1 ? "" : "s"} found</p>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-lime-400 bg-lime-50 p-10 text-center text-xl text-lime-700">
          No users yet. Click Add New User to create the first profile.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((userObj) => (
            <div
              key={userObj.email}
              className="cursor-pointer rounded-2rem border border-gray-200 bg-white p-8 shadow-2xl transition hover:-translate-y-1 hover:shadow-xl"
              onClick={() => gotoUser(userObj)}
            >
              <p className="text-3xl font-semibold text-gray-900">{userObj.name}</p>
              <p className="mt-3 text-lg text-gray-600">{userObj.email}</p>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-lime-600">Tap to view details</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;
