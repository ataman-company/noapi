import { MdNotificationsActive } from "react-icons/md";

export default function Header() {
  return (
    <header className="py-5 bg-secondary flex justify-around gap-14">

      <div className="flex items-center gap-5">
        <img src="/icon.png" />
        <p className="text-xl">نوآپی</p>
      </div>

      <div className="flex"><MdNotificationsActive className="text-2xl" /></div>

    </header>
  )
}
