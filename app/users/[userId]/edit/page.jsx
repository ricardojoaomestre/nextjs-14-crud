import { updateUserAction } from "@/app/actions";
import UserForm from "../../userForm";
import { getUser } from "@/lib/prisma/users";

const EditUserPage = async ({ params }) => {
  const { userId } = params;
  const { user } = await getUser(userId);

  return (
    <div>
      <h2 className="page-title">Edit user</h2>
      <UserForm user={user} action={updateUserAction} />
    </div>
  );
};

export default EditUserPage;
