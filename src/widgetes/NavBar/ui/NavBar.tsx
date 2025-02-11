import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './NavBar.module.css';

interface NavBarProps {
	className?: string;
}
export const NavBar = ({ className }: NavBarProps) => (
    <div className={classNames(cl.navbar, {}, [className])}>
        <div className={cl.headerLinks} />
    </div>
);
