import { ModeToggle } from "@/components/ui/theme-switcher";

export default function Header() {
  return (
    <header className="justify-self-end px-8 py-4 sm:px-20">
      <ModeToggle />
    </header>
  );
}
