type HeaderMobileProps = {
  closeMenu: () => void;
};

const HeaderMobile = ({ closeMenu }: HeaderMobileProps) => {
  return (
    <div id="mobile-menu" className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
        <a
          href="#home"
          onClick={closeMenu}
          className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Home
        </a>
        <a
          href="#features"
          onClick={closeMenu}
          className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Features
        </a>
        <a
          href="#about"
          onClick={closeMenu}
          className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          About
        </a>
        <a
          href="#contact"
          onClick={closeMenu}
          className="block text-gray-700 hover:text-blue-600 px-3 py-2 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Contact
        </a>
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeaderMobile;
