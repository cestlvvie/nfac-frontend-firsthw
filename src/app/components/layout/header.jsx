import Link from 'next/link';

const Header = () => {
    return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm dark:bg-gray-900 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="flex items-center space-x-2 font-bold text-gray-900 dark:text-gray-100"
        prefetch={false}
      >
        <FeatherIcon className="h-6 w-6" />
        <span>Blog</span>
      </Link>
      <nav className="flex items-center space-x-4">
        <Link
          href="/"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          prefetch={false}
        >
          Home
        </Link>
        <Link
            href="/about"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/contacts"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
            prefetch={false}
          >
            Contacts
          </Link>
      </nav>
    </header>
    )
};


function FeatherIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
        <path d="M16 8 2 22" />
        <path d="M17.5 15H9" />
      </svg>
    )
  }

export default Header;
