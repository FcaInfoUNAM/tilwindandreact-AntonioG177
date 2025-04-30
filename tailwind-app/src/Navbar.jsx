export default function Navbar() {
    return (
      <nav className="bg-blue-100 p-4 text-white flex justify-between items-center">
        <a href="https://www.google.com.mx/" className="font-semibold hover:underline">Google</a>
        <a href="https://www.facebook.com/" className="font-semibold hover:underline">Facebook</a>
        <a href="https://x.com/" className="font-semibold hover:underline">X</a>
      </nav>
    );
  }