import { useSelector } from "react-redux";

const Logout = () => {
  const user = useSelector((state)=> state.log.user)
  return(
    <div className="mt-20 text-4xl text-green-400 text-center">
      LOGIN TO SEE CONTENT.
    </div>
  )
};

export default Logout;
