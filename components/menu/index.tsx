import React, { ReactNode, MouseEvent, RefObject, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  StyledMenuOpen,
  StyledMenuClose,
  StyledMenuButton,
  StyledMenuLink,
  StyledMenuLinkItem,
  StyledMenuLinks,
  StyledNav,
} from './styles';

const MenuButton = ({ open, onClick }: { open: boolean; onClick: (event: MouseEvent<HTMLButtonElement>) => void }) => (
  <StyledMenuButton onClick={onClick}>{open ? <StyledMenuClose /> : <StyledMenuOpen />}</StyledMenuButton>
);

const MenuLink = ({ children, href }: { children: ReactNode; href: string }) => {
  const router = useRouter();
  const active = router.asPath === href;

  return (
    <StyledMenuLinkItem>
      <Link href={href}>
        <StyledMenuLink href={href} active={active}>
          {children}
        </StyledMenuLink>
      </Link>
    </StyledMenuLinkItem>
  );
};

const useRouterChange = () => {
  const router = useRouter();
  const [asPath, setAsPath] = useState(router.asPath);

  if (asPath !== router.asPath) {
    setAsPath(router.asPath);
    return true;
  }
  return false;
};

const Menu = ({ children }: { children: ReactNode[] }) => {
  const [open, setOpen] = useState(false);

  if (useRouterChange()) {
    setOpen(false);
  }

  return (
    <StyledNav open={open}>
      <StyledMenuLinks open={open}>{children}</StyledMenuLinks>
      <MenuButton open={open} onClick={() => setOpen(!open)} />
    </StyledNav>
  );
};

export { MenuLink, Menu };
