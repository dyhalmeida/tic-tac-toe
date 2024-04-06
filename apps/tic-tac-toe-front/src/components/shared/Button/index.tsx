import { ComponentProps } from "react";
import { Card } from "@/components/shared/Card";

export interface IButtonProps extends ComponentProps<"button"> {
  color?: "primary" | "secondary" | "dark" | "light";
}

export default function Button(props: IButtonProps) {
  return (
    <button {...props} className="text-black">
      <Card color={props.color} hover>
        {props.children}
      </Card>
    </button>
  );
}
