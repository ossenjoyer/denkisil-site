import "@styles/Button.css";

export interface ButtonProps {
  id: string;
  title: string;
  active?: boolean;
  onClick?: (...args: any[]) => any;
}

export default function Button({ id, title, active, onClick }: ButtonProps) {
  return (
    <div
      className={active ? "Button ButtonActive" : "Button"}
      onClick={onClick ?? undefined}
      id={id}
    >
      {title}
    </div>
  );
}
