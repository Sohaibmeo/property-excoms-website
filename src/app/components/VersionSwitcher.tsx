import { Link, useLocation } from 'react-router';

const versions = [
  { label: 'V1', href: '/v1' },
  { label: 'V2', href: '/v2' },
];

export function VersionSwitcher() {
  const location = useLocation();

  return (
    <div className="fixed bottom-5 right-5 z-[80] rounded-sm border border-[#17233B]/15 bg-white/95 p-1 shadow-2xl backdrop-blur">
      <div className="flex gap-1">
        {versions.map((version) => {
          const isActive = location.pathname === version.href || (location.pathname === '/' && version.href === '/v2');
          return (
            <Link
              key={version.href}
              to={version.href}
              className={`rounded-sm px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-[#17233B] text-[#F7F4ED]'
                  : 'text-[#17233B] hover:bg-[#C7A463] hover:text-[#17233B]'
              }`}
            >
              {version.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
