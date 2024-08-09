import { cn } from "@/lib/utils";

interface CalloutProps {
  children?: React.ReactNode;
  type?: "default" | "info" | "success" | "warning" | "danger";
}

export function Callout({
  children,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        "border-l-4 p-4 callout my-5",
        {
          "border-red-900 bg-red-50 dark:prose": type === "danger",
          "border-yellow-900 bg-yellow-50 dark:prose": type === "warning",
          "border-green-900 bg-green-50 dark:prose": type === "success",
          "border-blue-900 bg-blue-50 dark:prose": type === "info",
        }
      )}
      {...props}
    >
      <div className="prose m-0">{children}</div>
    </div>
  );
}
