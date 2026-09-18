export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}` || '/';
}

export function stripBase(pathname: string): string {
  const base = import.meta.env.BASE_URL || '/';
  if (base !== '/' && pathname.startsWith(base)) {
    return `/${pathname.slice(base.length)}`;
  }
  return pathname;
}
