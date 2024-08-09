export default function SidebarTOC() {
  return (
    <aside className="p-5 hidden md:w-1/3 lg:w-1/4 md:block border-[#522528] border-l col-span-1">
      <div className="sticky top-24 flex flex-col gap-2 text-lg">
        <a
          href=""
          className="px-3 py-1 font-semibold hover:bg-indigo-50 rounded-md"
        >
          Dashboard
        </a>

        <a
          href=""
          className="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md"
        >
          Study Lists
        </a>

        <a
          href=""
          className="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md"
        >
          Your contribution
        </a>

        <div className="inline-flex items-center pl-1">
          <a
            href=""
            className="py-1 font-semibold hover:bg-indigo-50 rounded-md"
          >
            Recently viewed
          </a>
        </div>
        <a
          href=""
          className="px-3 py-1 font-semibold opacity-90 hover:bg-indigo-50 rounded-md"
        >
          Settings
        </a>
      </div>
    </aside>
  );
}
