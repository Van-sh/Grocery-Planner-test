import { Button, Link } from "@heroui/react";
import { useRef } from "react";
import { emojis } from "../../constants";
import { useAppDispatch } from "../../store";
import { openLoginModal } from "./slice";

type Props = { errorMsg?: string };
const defaultErrorMsg = "Seems like you are not logged in. Please login to continue.";

export default function AuthErrorScreen({ errorMsg = defaultErrorMsg }: Props) {
  const emoji = useRef(emojis[Math.floor(Math.random() * emojis.length)]);
  const dispatch = useAppDispatch();

  const showLoginModal = () => {
    dispatch(openLoginModal());
  };

  return (
    <main className="text-center px-6 py-24">
      <p className="text-7xl">{emoji.current}</p>
      <p className="text-3xl mt-4 font-bold">{errorMsg}</p>
      <div className="mt-10">
        <Button color="primary" onPress={showLoginModal}>
          Login
        </Button>
        <span className="mx-4">or</span>
        <Button color="primary" variant="ghost" as={Link} href="/">
          Go To Home
        </Button>
      </div>
    </main>
  );
}
