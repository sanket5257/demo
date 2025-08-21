export default function Footer() {
  return (
    <footer className="bg-abyss border-t border-borderdark py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">© {new Date().getFullYear()} OceanLabs. All rights reserved.</p>
        <div className="flex gap-4 text-sm">
          <a className="hover:text-heading" href="#">Privacy</a>
          <a className="hover:text-heading" href="#">Terms</a>
          <a className="hover:text-heading" href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}
