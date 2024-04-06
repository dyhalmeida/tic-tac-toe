export interface ICardProps {
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "dark" | "light";
  noBorder?: boolean;
  hover?: boolean;
}

export const Card = (props: ICardProps) => (
  <div className="flex justify-center items-center">
    <div className={`rounded-xl bg-${props.color ?? "light"}-600`}>
      <div className={`rounded-xl ${props.noBorder ? "" : "mb-2"}`}>
        <div
          className={`
                        rounded-xl bg-${props.color ?? "light"}-500 p-2 overflow-hidden
                        ${props.hover ? `hover:bg-${props.color ?? "light"}-400` : ""}
                    `}
        >
          {props.children}
        </div>
      </div>
    </div>
  </div>
);
