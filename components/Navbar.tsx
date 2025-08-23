import { checkUser } from "@/app/lib/checkUser"

const Navbar = () => {
    const user = checkUser();
  return (
    <div>
        navbar
    </div>
  )
}

export default Navbar
