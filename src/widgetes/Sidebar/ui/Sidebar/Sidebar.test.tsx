import { fireEvent, screen } from "@testing-library/react";
import { withRenderTranslate } from "shared/lib/withRenderTranslate/withRenderTranslate";
import { Sidebar } from "./Sidebar";
import { componentRender } from "shared/lib/componentRouter/componentRouter";

describe("Sidebar", () => {
  test("with only first param", () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    componentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("show");
  });
});
