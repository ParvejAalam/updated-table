import { render, screen } from "@testing-library/react-native";
import MyTextInput from "../ui/MyTextInput";

test("my customeInput", () => {
    render(<MyTextInput value="" onChangeText={() => {}} placeholder="Enter Your First Name"/>)
    let placeho = screen.getByPlaceholderText(/Enter Your First Name/i)
    expect(placeho).toBeTruthy();
})