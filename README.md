## Hooks List

1. useCopyToClipboard
2. useCountdown
3. useDarkMode
4. useDebouncer
5. useDropzone
6. useGeolocation
7. useIdle
8. useLocalStorage
9. useMousePosition
10. useScroll
11. useToggle
12. useValidation

## useCopyToClipboard

A hook to easily copy text to the clipboard.
```
import React,{useState} from 'react';
import {useCopyToClipboard} from 'customutilityhooks/custom-hooks'

function App() {
  const [text, setText] = useState('');
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <div>
      <h1>Copy to Clipboard Example</h1>
      <input
        type="text"
        placeholder="Enter text"
        onChange={(event) => setText(event.target.value)}
      />
      <button
        onClick={() => copyToClipboard(text)}
        disabled={!text}
      >
        Copy
      </button>
      <p>
        <strong>Copied:</strong> {isCopied ? text : 'No text has been copied yet.'}
      </p>
    </div>
  );
}

export default App;

```

## useCountdown

A hook to create countdown functionality with a specific end time.

```
import React,{useState} from 'react';
import {useCountdown} from 'customutilityhooks/custom-hooks'


const App = () => {
  const countdown = useCountdown(new Date(Date.now() + 10000));
  const renderedCountdown = countdown.toString();

  return (
    <div>
      <h1>Countdown Timer</h1>
      <p>Time remaining: {renderedCountdown}</p>
    </div>
  );
};

export default App;
```

## useDarkMode

A hook to enable/disable dark mode in your app.

```
import React,{useState, useEffect} from 'react';
import {useDarkMode} from 'customutilityhooks/custom-hooks'

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
    } else {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  }, [darkMode]);

  return (
    <div>
      <h1>Dark Mode</h1>
      <p>
        You can toggle dark mode by clicking on the button below.
      </p>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default App;
```


## useDebouncer

A hook to debounce function calls for better performance.

```
import React, { useState } from 'react';
import { useDebouncer } from 'customutilityhooks/custom-hooks';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const apiURL = `https://api.postalpincode.in/pincode/${searchTerm}`; // Replace with your API endpoint

  const searchData = useDebouncer(searchTerm, apiURL);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <div>
        {searchData ? (
          <ul>
            {searchData.map((item) => (
              <li key={item.PostOffice[0].Pincode}>{item.PostOffice[0].Name}</li>
            ))}
          </ul>
        ) : (
          <p>No results yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;

```

## useDropzone

A hook to handle file drop and upload functionality.

```
import React,{useState} from 'react';
import {useDropzone} from 'customutilityhooks/custom-hooks'

function App() {
  const [files, setFiles] = useState([]);

  const {
    isDragging,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = useDropzone({
    onDrop: (files) => {
      setFiles(files);
    },
  });

  return (
    <div>
      <h1>Drag and Drop Example</h1>
      <p>
        Drag and drop some files here.
      </p>
      <div
        {...handleDragEnter}
        {...handleDragOver}
        {...handleDragLeave}
        {...handleDrop}
      >
        <input type="file" multiple />
      </div>
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

## useGeolocation

A hook to get the user's geolocation coordinates.

```
import { useGeolocation } from 'customutilityhooks/custom-hooks';

const { latitude, longitude, error } = useGeolocation();
```

## useIdle

A hook to detect when the user is idle.

```
import { useIdle } from 'customutilityhooks/custom-hooks';

const isIdle = useIdle(3000);
```

## useLocalStorage

A hook to interact with data in the local storage.

```
import { useLocalStorage } from 'customutilityhooks/custom-hooks';

const { value, setValueInLocalStorage } = useLocalStorage('exampleKey', 'defaultValue');
```

## useMousePosition

A hook to get the current mouse position.

```
import { useMousePosition } from 'customutilityhooks/custom-hooks';

const { x, y } = useMousePosition();
```

## useScroll

A hook to get the current scroll position of the window.

```
import { useScroll } from 'customutilityhooks/custom-hooks';

const { x, y } = useScroll();
```

## useToggle

A hook to toggle between two states.

```
import { useToggle } from 'customutilityhooks/custom-hooks';

const [isToggled, toggle] = useToggle(false);
```

## useValidation

A hook to handle form validation logic.

```
import { useValidation } from 'customutilityhooks/custom-hooks';

const initialState = { username: '', email: '' };
const validationRules = {
  username: [{name : 'required'}, {name: 'minLength', value:3}]
  email: [{ name: 'required' }, { name: 'email' }],
};
const { values, errors, handleChange, handleSubmit } = useValidation(initialState, validationRules);
```

