import { useUpdateUser } from "@/Api/CreateUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import Layout from "@/layouts/Layout";
import React from "react";

function UserProfilePage() {
  const { updateUser, isLoading } = useUpdateUser();
  return (
    <Layout>
      <div
        className="flex flex-col h-full container"
        style={{ height: "100%" }}
      >
        <UserProfileForm onSave={updateUser} isLoading={isLoading} />
      </div>
    </Layout>
  );
}

export default UserProfilePage;
