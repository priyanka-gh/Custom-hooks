## Hooks List

1. useCopyToClipboard
2. useCountdown
3. useDarkMode
4. useDebouncer
5. useDropassets
6. useGeolocation
7. useIdle
8. useLocalStorage
9. useMousePosition
10. useScroll
11. useToggle
12. useValidation

## useCopyToClipboard

A hook to easily copy text to the clipboard.

import { useCopyToClipboard } from 'customutilityhooks/custom-hooks';

// Usage example
const { isCopied, copyToClipboard, resetIsCopied } = useCopyToClipboard();

## useCountdown

A hook to create countdown functionality with a specific end time.

import { useCountdown } from 'customutilityhooks/custom-hooks';

// Usage example
const endTime = new Date('2023-12-31T23:59:59').getTime();
const countdown = useCountdown(endTime);

## useDarkMode

A hook to enable/disable dark mode in your app.

import { useDarkMode } from 'customutilityhooks/custom-hooks';

// Usage example
const { darkMode, setToggleDarkMode } = useDarkMode();

## useDebouncer

A hook to debounce function calls for better performance.

import { useDebouncer } from 'customutilityhooks/custom-hooks';

// Usage example
const apiURL = 'https://api.example.com/search';
const searchData = useDebouncer(inputVal, apiURL, 2000);

## useDropassets

A hook to handle file drop and upload functionality.

import { useDropassets } from 'customutilityhooks/custom-hooks';

// Usage example
const handleDrop = (files) => {
  // Handle dropped files here
};
const { isDragging, handleDragEnter, handleDragLeave, handleDragOver, handleDrop: handleDropzone } =
  useDropzone(handleDrop);

## useGeolocation

A hook to get the user's geolocation coordinates.

import { useGeolocation } from 'customutilityhooks/custom-hooks';

// Usage example
const { latitude, longitude, error } = useGeolocation();

## useIdle

A hook to detect when the user is idle.

import { useIdle } from 'customutilityhooks/custom-hooks';

// Usage example
const isIdle = useIdle(3000);

## useLocalStorage

A hook to interact with data in the local storage.

import { useLocalStorage } from 'customutilityhooks/custom-hooks';

// Usage example
const { value, setValueInLocalStorage } = useLocalStorage('exampleKey', 'defaultValue');

## useMousePosition

A hook to get the current mouse position.

import { useMousePosition } from 'customutilityhooks/custom-hooks';

// Usage example
const { x, y } = useMousePosition();

## useScroll

A hook to get the current scroll position of the window.

import { useScroll } from 'customutilityhooks/custom-hooks';

// Usage example
const { x, y } = useScroll();

## useToggle

A hook to toggle between two states.

import { useToggle } from 'customutilityhooks/custom-hooks';

// Usage example
const [isToggled, toggle] = useToggle(false);

## useValidation

A hook to handle form validation logic.

import { useValidation } from 'customutilityhooks/custom-hooks';

// Usage example
const initialState = { username: '', email: '' };
const validationRules = {
  username: [{name : 'required'}, {name: 'minLength', value:3}]
  email: [{ name: 'required' }, { name: 'email' }],
};
const { values, errors, handleChange, handleSubmit } = useValidation(initialState, validationRules);

