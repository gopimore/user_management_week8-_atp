import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

function UsersList() {
  let [users, setUsers] = useState([]);
  let [loading, setLoading] = useState(true);
  let [error, setError] = useState(null);
  let [deleting, setDeleting] = useState(null);

  let navigate = useNavigate();
  const BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:4000";

  const getUsers = useCallback(async () => {
    try {
      let res = await fetch(`${BASE_URL}/user-api/users`, {
        method: "GET",
        credentials: "include",
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
        const errorData = await res.json();
        throw new Error(
          errorData.message || "Failed to load users"
        );
      }
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const gotoUser = (userObj) => {
    navigate("/user", { state: { user: userObj } });
  };

  const handleEdit = (e, userObj) => {
    e.stopPropagation();
    navigate("/user", { state: { user: userObj, isEdit: true } });
  };

  const handleDelete = async (e, userId) => {
    e.stopPropagation();
    
    if (!window.confirm("Are you sure you want to delete this user?")) {
      return;
    }

    setDeleting(userId);
    try {
      let res = await fetch(`${BASE_URL}/user-api/users/${userId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (res.status === 200) {
        // Remove user from the list
        setUsers(users.filter(user => user._id !== userId));
      } else {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to delete user");
      }
    } catch (err) {
      console.log(err);
      alert("Error deleting user: " + err.message);
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <p className="text-center text-3xl text-lime-600">
        Loading users...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-500 text-2xl">
        {error.message}
      </p>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-5xl font-bold text-gray-800">
            List of Users
          </h1>

          <p className="mt-2 text-gray-600">
            {users.length} user
            {users.length === 1 ? "" : "s"} found
          </p>
        </div>
      </div>

      {users.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-lime-400 bg-lime-50 p-10 text-center text-xl text-lime-700">
          No users yet. Click Add New User to create the
          first profile.
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((userObj) => (
            <div
              key={userObj.email}
              className="cursor-pointer rounded-3xl border border-gray-200 bg-white p-8 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
              onClick={() => gotoUser(userObj)}
            >
              <p className="text-3xl font-semibold text-gray-900">
                {userObj.name}
              </p>

              <p className="mt-3 text-lg text-gray-600">
                {userObj.email}
              </p>

              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-lime-600">
                Tap to view details
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={(e) => handleEdit(e, userObj)}
                  disabled={deleting === userObj._id}
                  className="flex-1 rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white transition hover:bg-blue-600 disabled:opacity-50"
                >
                  Edit
                </button>
                <button
                  onClick={(e) => handleDelete(e, userObj._id)}
                  disabled={deleting === userObj._id}
                  className="flex-1 rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
                >
                  {deleting === userObj._id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UsersList;