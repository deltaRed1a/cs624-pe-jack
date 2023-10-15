# Input

The "CoreComponents" app accepts user input mainly through a `TextInput` component, where users can express their favorite course by typing it in. Other inputs include the user’s interaction with the interactive URL link, which they can tap to open a web browser and navigate to a website. Additionally, static inputs like local assets (images) and hardcoded course information are utilized.

# Process

Upon entering text into the `TextInput` component, the state of the component (specifically, the `favoriteCourse` state) is updated using the `useState` hook provided by React. When the text is non-empty, a message is conditionally rendered on the screen using a logical AND (`&&`) operator, which serves as a conditional rendering mechanism in JSX. The app also processes user interaction by executing a function to open the web browser upon tapping the URL link, using the `Linking` API. Courses are mapped to individual `Text` components and styled accordingly, enhancing readability and structure.

# Output

The output is twofold: Firstly, the visual output where the core, depth, and capstone courses are displayed on the user’s screen along with an image and a clickable URL link, all of which are rendered neatly utilizing various styling properties. Secondly, a dynamic textual output is displayed under the `TextInput` field, which acknowledges the user's input with a friendly message ("That is a great course!") upon entering a course name. When the URL link is tapped, the output is an external web page opening in the device’s web browser, guiding the user to additional information.

