import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import s from "./tooltip.module.css";

const Provider = ({ ...props }: TooltipPrimitive.TooltipProviderProps) => (
  <TooltipPrimitive.Provider delayDuration={250} {...props} />
);

const Content = ({
  children,
  ...props
}: TooltipPrimitive.TooltipContentProps) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content className={s.content} sideOffset={4} {...props}>
        {children}
        <TooltipPrimitive.Arrow className={s.arrow} width={24} height={12} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
};

export const Tooltip = {
  Provider,
  Root: TooltipPrimitive.Root,
  Trigger: TooltipPrimitive.Trigger,
  Content,
};
