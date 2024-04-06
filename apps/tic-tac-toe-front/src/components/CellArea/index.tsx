import { PlayerTypeEnum } from "core";
import { Card } from "@/components/shared/Card";
import { IconCircle, IconX } from "@/libs/icons";

export interface CellAreaProps {
  type?: PlayerTypeEnum | null;
  selected?: boolean;
}

export default function CellArea({ selected, type }: CellAreaProps) {
  return (
    <Card
      color={
        !selected ? "dark" : type === PlayerTypeEnum.X ? "primary" : "secondary"
      }
    >
      <div className={`flex justify-center items-center w-32 h-32`}>
        {type === PlayerTypeEnum.X && (
          <IconX
            size={70}
            stroke={6}
            className={selected ? "text-dark-500" : "text-primary-500"}
          />
        )}
        {type === PlayerTypeEnum.O && (
          <IconCircle
            size={70}
            stroke={6}
            className={selected ? "text-dark-500" : "text-secondary-500"}
          />
        )}
      </div>
    </Card>
  );
}
