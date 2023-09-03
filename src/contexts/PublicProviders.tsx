'use client';

import { ThemeRegistry } from '@/theme';

const Providers: React.FC<Props> = ({ children }: Props) => {
  return <ThemeRegistry>{children}</ThemeRegistry>;
};

export default Providers;
