import { useGetMyUser, useGetUser, useUpdateUser } from "@/Api/CreateUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

import UserProfilePage from "./UserProfilePage";

function UserProfileInfo() {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateUser();
  const { currentUser, isLoading: isGetLoading } = useGetUser();

  console.log("current user", currentUser);

  if (isGetLoading) {
    return (
      <UserProfilePage>
        <span>Loading...</span>;
      </UserProfilePage>
    );
  }
  if (!currentUser) {
    return (
      <UserProfilePage>
        <span>Unable to load user profile</span>
      </UserProfilePage>
    );
  }

  return (
    <UserProfilePage>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </UserProfilePage>
  );
}

export default UserProfileInfo;
