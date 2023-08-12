// import react-testing methods
// add custom jest matchers from jest-dom
import "@testing-library/jest-dom";
// the component to test
import { App } from "src/App";

test("Loads App and reads 'Welcome' title", () => {
	render(<App />);
	expect(screen.getByText("Welcome")).toBeInTheDocument();
});
