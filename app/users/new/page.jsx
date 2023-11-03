"use client";
import { createUserAction } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message: null,
};

const CreateUser = () => {
  const router = useRouter();
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createUserAction, initialState);
  // if state has the newly created user redirect to that user profile page
  if (state?.user) return router.push(`/users/${state?.user.id}`);

  return (
    <div>
      <h2 className="page-title">Create new user</h2>
      <form action={formAction}>
        <div className="form-control sm:max-w-sm">
          <label className="label" htmlFor="name">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered sm:max-w-sm"
            name="name"
            id="name"
          />
        </div>

        <div className="form-control sm:max-w-sm">
          <label className="label" htmlFor="email">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered sm:max-w-sm"
            name="email"
            id="email"
          />
        </div>
        <div className="form-control sm:max-w-sm">
          <label className="label" htmlFor="imageUrl">
            <span className="label-text">Profile picture url</span>
          </label>
          <input
            type="text"
            className="input input-bordered sm:max-w-sm"
            id="imageUrl"
            name="imageUrl"
          />
        </div>
        <div className="form-control sm:max-w-sm my-6">
          <button
            className="btn btn-primary"
            type="submit"
            aria-disabled={pending}
          >
            Save
          </button>
        </div>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
    </div>
  );
};

export default CreateUser;
