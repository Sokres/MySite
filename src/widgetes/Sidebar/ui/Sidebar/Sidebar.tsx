import react from "react";
import { classNames } from "shared/lib/classNaame/ClassName";
import { BtnTheme } from "widgetes/BtnTheme";
import { SwithcerLang } from "widgetes/SwitcherLang";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import IconSidebarOpen from "shared/assets/icons/icon-arrow-sidebar-open.svg";
import IconSidebarClose from "shared/assets/icons/icon-arrow-sidebar-close.svg";
import IconSidebarHome from "shared/assets/icons/icon-home-sidebar.svg";
import IconSidebarList from "shared/assets/icons/icon-list-sidebar.svg";
import { LinkApp, LinkAppThtme } from "shared/ui/LinkApp/LinkApp";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import cl from "./Sidebar.module.css";

interface SidebarProps {
  className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
  const [show, getShow] = react.useState(false);
  const onToggle = () => {
    getShow((open) => !open);
  };

  const { t } = useTranslation("translation");
  return (
    <div
      data-testid="sidebar"
      className={classNames(cl.sidebar, { [cl.show]: show }, [className])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        theme={ButtonTheme.BACKROUND_INVERTED}
        className={cl.showBtn}
      >
        {!show ? <IconSidebarOpen /> : <IconSidebarClose />}
      </Button>
      <div className={cl.menuSidebar}>
        <LinkApp
          className={cl.item}
          theme={LinkAppThtme.PRIMARY}
          to={RoutePath.main}
        >
          <IconSidebarHome className={cl.icon} />
          <span className={cl.listText}> Main</span>
        </LinkApp>

        <LinkApp
          className={cl.item}
          theme={LinkAppThtme.PRIMARY}
          to={RoutePath.about}
        >
          <IconSidebarList className={cl.icon} />
          <span className={cl.listText}>About</span>
        </LinkApp>
      </div>
      <div className={cl.svitchers}>
        <BtnTheme />
        <SwithcerLang short={show} className={cl.lang} />
      </div>
    </div>
  );
};
