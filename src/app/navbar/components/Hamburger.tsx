import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Hamburger({onClick, color}: {onClick: () => void, color: string}) {
  return (
    <>
      <button className="relative" onClick={onClick}>
        <FontAwesomeIcon className={`text-3xl ${color}`} icon={faBars} />
      </button>
    </>
  );
}
