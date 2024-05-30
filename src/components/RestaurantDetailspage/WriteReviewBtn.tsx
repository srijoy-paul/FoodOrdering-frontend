import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import LoadingButton from "../custom_ui/LoadingButton";

import { useGetUser } from "@/Api/CreateUserApi";
import { useState } from "react";

function WriteReviewBtn() {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();
  const { pathname } = useLocation();

  const { currentUser, isLoading: isGetUserLoading } = useGetUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return <Button onClick={onLogin}>Log in Add Review</Button>;
  }

  if (isAuthLoading || !currentUser) {
    return <LoadingButton />;
  }

  return (
    <Button className="bg-saffron hover:bg" type="submit">
      Add Review
    </Button>
  );
}

export default WriteReviewBtn;
