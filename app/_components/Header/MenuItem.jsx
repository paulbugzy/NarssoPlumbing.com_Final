import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MenuItem({ item }) {
  const activeMainItem = (target) => {
    var objMenu = document.getElementById("jsDesktopMenu");
    function removeParent() {
      let rootLi = objMenu.querySelectorAll("#jsDesktopMenu li");
      rootLi?.forEach((item) => {
        if (item.classList.contains("itemParentActive")) {
          item.classList.remove("itemParentActive");
        }
      });
    }
    function setActiveClass(target) {
      let obj = target.closest(".has_submenu");
      let obj2 = target.closest(".top-level");
      obj?.classList.add("itemParentActive");
      obj2?.classList.add("itemParentActive");
    }
    removeParent();
    setActiveClass(target);
  };
  const pathname = usePathname();
  if (item.childrens) {
    return (
      <li className="has-submenu">
        <Link
          href={item.path || "#"}
          title={item.title}
          className={pathname === item.path ? "is-active" : ""}
          onClick={(e) => {
            activeMainItem(e.target);
          }}
        >
          {item.title}
        </Link>
        <ul className="desktopmenu__dropdown">
          {item.childrens.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li>
        <Link
          href={item.path || "#"}
          title={item.title}
          className={pathname === item.path ? "is-active" : ""}
          onClick={(e) => {
            activeMainItem(e.target);
          }}
        >
          {item.title}
        </Link>
      </li>
    );
  }
}
