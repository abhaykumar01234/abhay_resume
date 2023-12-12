import s from "./laptop.module.css";

export const LaptopFrame = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={s.laptop}>
      <div className={s.screen}>
        <div className={s.lcd}>{children}</div>
        <div className={s.glassFrame}></div>
        <div className={s.screenReflection}></div>
      </div>
      <div className={[s.keyboard, s.top].join(" ")}></div>
      <div className={[s.keyboard, s.bottom].join(" ")}></div>
    </div>
  );
};
