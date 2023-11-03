"use client";
import { redirect } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
const UserForm = ({ user = {}, action }) => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(
    action,
    user || { messsage: undefined }
  );
  if (state?.status === "ok") {
    redirect(`/users/${state.user.id || user.id}`);
  }

  return (
    <form action={formAction}>
      {state?.id && <input type="hidden" name="id" value={state?.id} />}
      <div className="form-control sm:max-w-sm">
        <label className="label" htmlFor="name">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          className="input input-bordered sm:max-w-sm"
          name="name"
          id="name"
          defaultValue={state?.name}
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
          defaultValue={state?.email}
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
          defaultValue={state?.imageUrl}
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
  );
};

export default UserForm;
