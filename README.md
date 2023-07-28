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
import React from "react";
import { useGeolocation } from "customutilityhooks/custom-hooks";

const App = () => {
  const { latitude, longitude, error } = useGeolocation();

  return (
    <div>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </>
      )}
    </div>
  );
};

export default App;

```

## useIdle

A hook to detect when the user is idle.

```
import React, { useState } from 'react';
import { useIdle } from 'customutilityhooks/custom-hooks';

const App = () => {
  const isIdle = useIdle(3000); // Timeout set to 3000ms (3 seconds)

  return (
    <div>
      <h1>Idle Detection Example</h1>
      <p>User is {isIdle ? 'Idle' : 'Active'}</p>
    </div>
  );
};

export default App;

```

## useLocalStorage

A hook to interact with data in the local storage.

```
import React, { useState } from 'react';
import { useLocalStorage } from 'customutilityhooks/custom-hooks';

const App = () => {
  const { value, setValueInLocalStorage } = useLocalStorage('myData', '');

  const handleInputChange = (event) => {
    setValueInLocalStorage(event.target.value);
  };

  return (
    <div>
      <h1>Local Storage Example</h1>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter value..."
      />
      <p>Value in Local Storage: {value}</p>
    </div>
  );
};

export default App;

```

## useMousePosition

A hook to get the current mouse position.

```
import React, { useState } from 'react';
import { useMousePosition } from 'customutilityhooks/custom-hooks';

const App = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <h1>Mouse Position Example</h1>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  );
};

export default App;

```

## useScroll

A hook to get the current scroll position of the window.

```
import React, { useState } from 'react';
import { useScroll } from 'customutilityhooks/custom-hooks';

const App = () => {
  const { x, y } = useScroll();

  return (
    <div>
      <h1>Scroll Position Example</h1>
      <p>Scroll X: {x}</p>
      <p>Scroll Y: {y}</p>
    </div>
  );
};

export default App;

```

## useToggle

A hook to toggle between two states.

```
import React, { useState } from 'react';
import { useToggle } from 'customutilityhooks/custom-hooks';

const App = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <h1>Toggle Example</h1>
      <button onClick={toggle}>Toggle</button>
      {isToggled ? <p>Toggle is ON</p> : <p>Toggle is OFF</p>}
    </div>
  );
};

export default App;

```

## useValidation

A hook to handle form validation logic.

```
import React, { useState } from 'react';
import { useValidation } from 'customutilityhooks/custom-hooks';

const App = () => {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
  };

  const validationRules = {
    name: [{ name: 'required' }],
    email: [{ name: 'required' }, { name: 'minLength', value: 5 }],
    password: [{ name: 'required' }, { name: 'minLength', value: 8 }],
  };

  const { values, errors, handleChange, handleSubmit } = useValidation(
    initialFormState,
    validationRules
  );

  return (
    <div>
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;

```

