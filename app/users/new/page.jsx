"use client";
import { createUserAction } from "@/app/actions";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

const CreateUser = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createUserAction, initialState);

  return (
    <div>
      <h2 className="title">Create new user</h2>
      <form action={formAction}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="imageUrl">Profile picture url</label>
          <input type="text" id="imageUrl" name="imageUrl" />
        </div>
        <button type="submit" aria-disabled={pending}>
          Save
        </button>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default CreateUser;
