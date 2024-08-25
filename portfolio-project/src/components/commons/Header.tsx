import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import './../../assets/common.css'

function classNames(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  
  interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
  }

  const [navigation, setNavigation] = useState<NavigationItem[]>([
    { name: 'Profile', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Skills', href: '#', current: false },
  ]);

  const changeDashboard = (name: string): void => {
    setNavigation(prev =>
      prev.map(item => item.name === name ? { ...item, current: true } : { ...item, current: false })
    );
  };

  return (
    <header>
      <Disclosure as="nav" className="bg-white-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <img
                  alt="codej625"
                  src="https://avatars.githubusercontent.com/u/77843136?v=4"
                  className="h-8 w-auto"
                />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => changeDashboard(item.name)}
                      aria-current={item.current ? 'page' : undefined}
                      className={classNames(
                        item.current ? (
                          'bg-gray-900 text-white' 
                        ) : (
                          'text-black-300 hover:bg-gray-700 hover:text-white'
                        ),
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </header>
  )
}