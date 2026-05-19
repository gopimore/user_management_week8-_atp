import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";

function User() {
  const { state } = useLocation();

  const user = state?.user || null;
  const isEdit = state?.isEdit || false;

  const [currentUser, setCurrentUser] = useState(user);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isEditing, setIsEditing] = useState(isEdit);

  const BASE_URL =
    import.meta.env.VITE_API_URL ||
    "http://localhost:4000";

  const { register, handleSubmit, reset, formState: { isSubmitting } } =
    useForm({
      defaultValues: {
        name: user?.name || "",
        email: user?.email || "",
        dateOfBirth: user?.dateOfBirth?.split("T")[0] || "",
        mobileNumber: user?.mobileNumber || "",
      }
    });

  useEffect(() => {
    if (currentUser) {
      reset({
        name: currentUser.name || "",
        email: currentUser.email || "",
        dateOfBirth:
          currentUser.dateOfBirth?.split(
            "T"
          )[0] || "",
        mobileNumber:
          currentUser.mobileNumber || "",
      });
    }
  }, [currentUser, reset]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onEditUser = async (updatedUser) => {
    try {
      setLoading(true);
      setError("");

      const userId = currentUser?._id;

      if (!userId) {
        throw new Error("User ID not found");
      }

      console.log("USER ID:", userId);
      console.log(
        "UPDATED USER:",
        updatedUser
      );

      const res = await fetch(
        `${BASE_URL}/user-api/users/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      const data = await res.json();

      console.log(
        "SERVER RESPONSE:",
        data
      );

      if (!res.ok) {
        throw new Error(
          data.message ||
            "Failed to update user"
        );
      }

      // Update currentUser with the exact server response
      setCurrentUser(data.payload);

      setIsEditing(false);

      setLoading(false);

      alert("User updated successfully");
    } catch (err) {
      console.log(err);

      setLoading(false);

      setError(err.message);
    }
  };

  if (!currentUser) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl text-red-500">
          No User Selected
        </h1>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-3xl text-orange-500">
          Updating user...
        </h1>
      </div>
    );
  }

  // VIEW MODE
  if (!isEditing) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          {currentUser.name}
        </h1>

        <div className="space-y-4 mb-8">
          <div>
            <p className="text-gray-500 text-sm">
              Email
            </p>

            <p className="text-lg text-gray-800">
              {currentUser.email}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Date of Birth
            </p>

            <p className="text-lg text-gray-800">
              {currentUser.dateOfBirth}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">
              Mobile Number
            </p>

            <p className="text-lg text-gray-800">
              {currentUser.mobileNumber}
            </p>
          </div>
        </div>

        <button
          onClick={handleEditToggle}
          className="bg-blue-500 text-white px-8 py-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          Edit User
        </button>
      </div>
    );
  }

  // EDIT MODE
  return (
    <div className="text-center mt-10">
      <h1 className="text-5xl text-gray-700">
        Edit User
      </h1>

      {error && (
        <p className="text-red-500 text-lg mt-4">
          {error}
        </p>
      )}

      <form
        onSubmit={handleSubmit(onEditUser)}
        className="max-w-md mx-auto mt-10"
      >
        <input
          type="text"
          {...register("name")}
          className="mb-5 border w-full text-xl p-3 rounded"
          placeholder="Name"
        />

        <input
          type="email"
          {...register("email")}
          className="mb-5 border w-full text-xl p-3 rounded"
          placeholder="Email"
        />

        <input
          type="date"
          {...register("dateOfBirth")}
          className="mb-5 border w-full text-xl p-3 rounded"
        />

        <input
          type="text"
          {...register("mobileNumber")}
          className="mb-5 border w-full text-xl p-3 rounded"
          placeholder="Mobile Number"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 bg-green-500 text-white text-xl px-6 py-3 rounded-lg hover:bg-green-600"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={handleEditToggle}
            className="flex-1 bg-gray-500 text-white text-xl px-6 py-3 rounded-lg hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default User;