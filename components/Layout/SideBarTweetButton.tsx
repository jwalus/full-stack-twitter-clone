import { useRouter } from "next/router"
import { useCallback } from "react";
import { FaFeather } from 'react-icons/fa'
import useLoginModel from "../../hooks/useLoginModel";

const SideBarTweetButton = () => {
  const router = useRouter();
  const loginModel = useLoginModel();

  const onClick = useCallback(() => {
    loginModel.onOpen()
  }, [loginModel])

  return (
    <div onClick={onClick}>
      <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center justify-center bg-sky-500 hover:bg-opacity-10 transition cursor-pointer">
        <FaFeather size={24} color='white' />
      </div>
      <div className="mt-6 hidden lg:block px-4 py-2 bg-sky-500 rounded-full hover:bg-opacity-10 transition cursor-pointer">
        <p className="hidden lg:block text-center font-semibold text-white text-[20px]">Tweet</p>
      </div>
    </div>
  )
}

export default SideBarTweetButton