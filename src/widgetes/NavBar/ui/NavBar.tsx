import { classNames } from 'shared/lib/classNaame/ClassName';
import cl from './NavBar.module.css';
import { LinkApp, LinkAppThtme } from 'shared/ui/LinkApp/LinkApp';

interface NavBarProps {
	className?: string;
}
export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cl.navbar, {}, [className])}>
            <div className={cl.headerLinks}>
                <LinkApp
                    className={cl.headerLink}
                    theme={LinkAppThtme.PRIMARY}
                    to={'/'}
                >
                    Main
                </LinkApp>
                <LinkApp theme={LinkAppThtme.PRIMARY} to={'/about'}>
                    About
                </LinkApp>
            </div>
        </div>
    );
};
