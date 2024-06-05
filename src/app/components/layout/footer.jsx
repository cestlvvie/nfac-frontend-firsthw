import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white py-8 dark:bg-gray-800" style={{ position: 'fixed', bottom: '0', left: '0', width: '100%', zIndex: '999' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Blog Name</h3>
            <p className="text-gray-600 dark:text-gray-400">A beautiful blog about the latest trends and insights.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Quick Links</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    prefetch={false}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    prefetch={false}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacts"
                    className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                    prefetch={false}
                  >
                    Contacts
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
