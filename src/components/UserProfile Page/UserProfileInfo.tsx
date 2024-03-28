import { useUpdateUser } from "@/Api/CreateUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import React from "react";
import UserProfilePage from "./UserProfilePage";

function UserProfileInfo() {
  const { updateUser, isLoading } = useUpdateUser();

  return (
    <UserProfilePage>
      <UserProfileForm onSave={updateUser} isLoading={isLoading} />
    </UserProfilePage>
  );
}

export default UserProfileInfo;
