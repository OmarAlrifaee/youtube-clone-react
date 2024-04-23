import {
  helpLinks,
  mainLinks,
  secondaryLinks,
  subscriptionLinks,
  textLinks,
} from "./sidebarData";
type SidebarProps = {
  showSideBar: boolean;
  absolute?: boolean;
};
export const Sidebar = ({ showSideBar, absolute }: SidebarProps) => {
  return (
    <div
      className={`${
        showSideBar ? "md:w-[260px] w-full" : "w-[0] translate-x-[-50px]"
      } ${
        absolute && "absolute z-10"
      } bg-nav-bg pr-5 flex-shrink-0 overflow-y-auto overflow-x-hidden pb-8 sidebar transition-all duration-[0.5s]`}
    >
      <ul className="flex flex-col border-b-2 border-gray-700 py-3 gap-[6px]">
        {mainLinks.map(({ icon: Icon, name }) => (
          <li key={name}>
            <a
              href="#"
              className={`flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600 ${
                name === "Home" && "bg-slate-600 hover:bg-slate-600"
              } mx-2 rounded-md`}
            >
              <Icon className="text-xl" />
              <span className="text-sm tracking-wide">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 py-3 gap-[6px]">
        {secondaryLinks.map(({ icon: Icon, name }) => (
          <li key={name}>
            <a
              href="#"
              className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600 mx-2 rounded-md"
            >
              <Icon className="text-xl" />
              <span className="text-sm tracking-wide">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 py-3 gap-[6px]">
        {subscriptionLinks.map(({ icon: Icon, name }) => (
          <li key={name}>
            <a
              href="#"
              className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600 mx-2 rounded-md"
            >
              <Icon className="text-xl" />
              <span className="text-sm tracking-wide">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col border-b-2 border-gray-700 py-3 gap-[6px]">
        {helpLinks.map(({ icon: Icon, name }) => (
          <li key={name}>
            <a
              href="#"
              className="flex items-center gap-5 pl-6 py-3 hover:bg-zinc-600 mx-2 rounded-md"
            >
              <Icon className="text-xl" />
              <span className="text-sm tracking-wide">{name}</span>
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400 mt-5 mx-3">
        {textLinks[0].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <ul className="flex gap-2 flex-wrap text-sm p-4 text-zinc-400 mx-3">
        {textLinks[1].map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <span className="text-sm text-zinc-400 px-4 mx-3">
        &copy; 2024 Google
      </span>
      <br />
      <p className="px-4 text-sm text-zinc-400 mt-3 mx-3">
        This Clone Is For Learning
      </p>
    </div>
  );
};
