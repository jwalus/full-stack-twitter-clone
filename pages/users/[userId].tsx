import { useRouter } from "next/router";
import Header from "../../components/Header";
import useUser from "../../hooks/useUser";
import { ClipLoader } from "react-spinners";
import UserHero from "../../components/Users/UserHero";

const UserView = () => {
  const router = useRouter();
  const { userId } = router.query;

  const { data: fetchedUser, isLoading } = useUser(userId as string);

  if (isLoading || !fetchedUser) {
    return (
      <div className="flex justify-center items-center h-full">
        <ClipLoader color="lightblue" size={80} />
        {/* Add additional content here */}
      </div>
    );
  }
  console.log("isLoading:", isLoading);
console.log("fetchedUser:", fetchedUser);

  return (
    <>
    <Header showBackArrow label={fetchedUser?.name} />
    <UserHero userId={userId as string} />
    </>
  )
}

export default UserView;