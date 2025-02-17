import { render, screen, fireEvent } from "@testing-library/react-native";
import MyButton from "../ui/MyButton";
import renderer from 'react-test-renderer';


// For normal testing
// test("custome button", () => {
//     const handleButtonClick = jest.fn(); 
//     render(<MyButton  title="Register" onPress={handleButtonClick}/>)
//     const initialText =  screen.getByText(/Register/i);
//     expect(initialText).toBeTruthy();
// });


// For snapshot testing
test("custome button", () => {
    const handleButtonClick = jest.fn(); 
     const ButtonContainer =  render(<MyButton  title="Register" onPress={handleButtonClick}/>)
    expect(ButtonContainer).toMatchSnapshot();
});