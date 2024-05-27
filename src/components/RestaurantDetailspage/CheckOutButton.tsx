import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import LoadingButton from "../custom_ui/LoadingButton";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import UserProfileForm, {
  UserFormData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetUser } from "@/Api/CreateUserApi";

type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  disabled: boolean;
};
function CheckOutButton({ onCheckout, disabled }: Props) {
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
    return <Button onClick={onLogin}>Log in to check out</Button>;
  }

  if (isAuthLoading || !currentUser) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="">
          Go to Checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <UserProfileForm
          currentUser={currentUser}
          isLoading={isGetUserLoading}
          onSave={onCheckout}
          title="Confirm Delivery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
}

export default CheckOutButton;
