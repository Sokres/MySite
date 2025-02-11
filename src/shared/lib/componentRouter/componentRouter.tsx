import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";
import i18FromTest from "shared/config/i18/i18ForTest";

interface componentRenderProps {
  route?: string;
}
export function componentRender(
  componetn: ReactNode,
  options: componentRenderProps = {}
) {
  const { route = "/" } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18FromTest}>{componetn}</I18nextProvider>
    </MemoryRouter>
  );
}
