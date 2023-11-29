import './Navigation.css';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import logo from '../../assets/logo.svg';

const navigationItems = [
  // { name: 'Home', href: '#home', current: true },
  { name: 'About Us', href: '#', current: true },
  { name: 'Services', href: '#', current: false },
  { name: 'Portfolio', href: '#', current: false },
  { name: 'Contact Us', href: '#', current: false },
];

const scrollToSection = (elementRef: any) => 
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth',
  });

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function DesktopNavigation({ options, onMobileMenuOpen }: any) {
  return (
    <nav
    className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
    aria-label="Global"
  >
    <div className="flex lg:flex-1">
      <a href="#" className="flex">
        <span className="sr-only">Veezble</span>
        <img className="h-8 w-auto" src={logo} alt="Veezble logo" />
      </a>
    </div>
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
        onClick={onMobileMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      {navigationItems.map((item, index) => (
        <a
          key={item.name}
          href={item.href}
          className={classNames(
            // item.current ? "underline" : "",
            "desktop-nav-item"
          )}
          aria-current={ item.current ? "page" : undefined }
          onClick={() => scrollToSection(options[index])}
        >
          {item.name}
        </a>
      ))}
    </Popover.Group>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="#" className="desktop-nav-button">Hire Us</a>
    </div>
  </nav>
  )
}

function MobileNavigation({ mobileMenuOpen, options, onMobileMenuToggle }: any) {
  const scrollToSectionThenHide = (elementRef: any) => {
    scrollToSection(elementRef);
    onMobileMenuToggle();
  }
  return (
    <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={onMobileMenuToggle}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Veezble</span>
              <img className="h-8 w-auto" src={logo} alt="Veezble logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={onMobileMenuToggle}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      // item.current ? "underline" : "",
                      "mobile-nav-item"
                    )}
                    aria-current={ item.current ? "page" : undefined }
                    onClick={() => scrollToSectionThenHide(options[index])}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a href="#" className="mobile-nav-button">Hire Us</a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
  )
}

export default function Navigation({ options }: any) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <DesktopNavigation
        options={ options }
        onMobileMenuOpen={() => setMobileMenuOpen(true)}
      />
      <MobileNavigation
        mobileMenuOpen={ mobileMenuOpen }
        options={ options }
        onMobileMenuToggle={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}