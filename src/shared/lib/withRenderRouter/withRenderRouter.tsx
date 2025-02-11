import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18FromTest from "shared/config/i18/i18ForTest";

interface withRenderRouterProps {
  route: string;
}
export function withRenderRouter(
  componetn: ReactNode,
  options: withRenderRouterProps
) {
  const { route } = options;
  return render(
    <MemoryRouter initialEntries={[]}>
      <I18nextProvider i18n={i18FromTest}>{componetn}</I18nextProvider>
    </MemoryRouter>
  );
}
