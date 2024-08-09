export default function SkillContainer({iconType, title, description}: {iconType: JSX.Element, title: string, description: string}) {
  return (
    <div className="flex flex-col text-center items-center gap-2 justify-center p-5 h-full border-[#522528] border-2 shadow-none bg-white ease-out hover:-translate-y-1 transition-all hover:shadow-[4px_4px_0px_rgba(41,41,39,1)]">
      <div className="mx-auto flex items-center justify-center w-16 h-16 mb-4 rounded-full border-2 border-[#292927] bg-[#522528]">
            {iconType}
        </div>
        <h6 className="mb-2 font-semibold leading-5">{title}</h6>
        {/* <p className="mb-3 text-sm text-gray-900">
          {description}
        </p> */}
    </div>
  );
}
