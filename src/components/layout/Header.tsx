type HeaderProps = {
  title: string;
  action?: React.ReactNode;
};

export function Header({ title, action }: HeaderProps) {
  return (
    <header className="flex items-center justify-between border-b border-neutral-200 pb-6">
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
        {title}
      </h1>
      {action}
    </header>
  );
}
