import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import Layout from "@/layouts/Layout";
import React from "react";

function UserProfilePage() {
  return (
    <Layout>
      <div
        className="flex flex-col h-full container"
        style={{ height: "100%" }}
      >
        <UserProfileForm />
      </div>
    </Layout>
  );
}

export default UserProfilePage;
