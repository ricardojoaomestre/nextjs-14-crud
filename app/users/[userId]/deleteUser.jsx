"use client";
import { deleteUserAction } from "@/app/actions";
import { useState } from "react";

const DeleteUser = ({ id }) => {
  const [pending, setPending] = useState(false);

  const handleDeleteUser = async () => {
    setPending(true);
    await deleteUserAction(id);
  };

  return (
    <form>
      <button
        type="submit"
        onClick={handleDeleteUser}
        className="btn btn-error"
        aria-disabled={pending}
        disabled={pending}
      >
        {pending && <span className="loading loading-spinner"></span>}
        Delete
      </button>
    </form>
  );
};

export default DeleteUser;
