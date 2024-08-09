import SimpleCard from "./../app/blogs/components/SimpleCard";
import { RxArrowRight } from "react-icons/rx";
export default function RelatedPage(){
    return(
        <aside className="hidden w-full py-10 md:block px-16 border-t border-[#522528]">
          <div className="flex flex-row justify-between">
            <h1
              // style={{ textShadow: "0px 4px 0px rgba(200,200,200)" }}
              className="font-bold text-2xl mb-5"
            >
              Related Posts
            </h1>
            <h1 className="font-bold text-2xl mb-5 flex flex-row items-center">
              View All Posts{" "}
              <span>
                <RxArrowRight className="ml-2 text-black text-lg font-bold" />
              </span>
            </h1>
          </div>
          <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <SimpleCard
              title="Bytadit Brutalism"
              imgSrc="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              desc="Bytadit Brutalism"
              content="Bytadit Brutalism"
            />
            <SimpleCard
              title="Bytadit Brutalism"
              imgSrc="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              desc="Bytadit Brutalism"
              content="Bytadit Brutalism"
            />
            <SimpleCard
              title="Bytadit Brutalism"
              imgSrc="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              desc="Bytadit Brutalism"
              content="Bytadit Brutalism"
            />
            <SimpleCard
              title="Bytadit Brutalism"
              imgSrc="https://images.unsplash.com/photo-1485796826113-174aa68fd81b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              desc="Bytadit Brutalism"
              content="Bytadit Brutalism"
            />
          </div>
        </aside>
    )
}