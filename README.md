## 🐶 Core

- Bootstrapped with Create React App (using TypeScript)

## 🐱 Styling

- SCSS (BEM methodology)

## 🐻 Tools

- Prettier
- tsconfig, tslint
- yarn

## 🦊 Dependencies

- _node-sass_ to compile SCSS (dev)

## 🦄 Features

### Modal

- To open, click the **Delivery** button
- To close, click the **Cancel** button and the **Confirm** button or click outside the modal content
- The modal content is mounted and unmounted inside the div element
- Custom fade-in/out animations use hooks, styles and _onTransitionEnd_ property

#### Description

- I used React context API and refs in order to avoid creating a _div_ element with ID in the _index.html_ file (core/context/ModalProvider)
- To get _modalNode_ div, use _useContext_ hook and mount it inside the div using _createPortal_ (components/blocks/Modal)

### Calendar

- The date picker doesn’t include all months and years
- The calendar features one month, **Aug 2019**
- Default date: **1 Aug**
- Start and end days of the month are set dynamically depending on the month and the year (in this case, it's August 2019, so the first day is Tuesday and the last day is Saturday)

#### Description

- I used experimental css syntax to build the calendar - `display: grid;`. I wanted to try it out and found it really awesome. Of course, it can be built with _flex_ or other style.
- There are 3 states of the date - _activeDate_, _selectedDate_ and _disabled_. _activeDate_ is used to show the currently active date, but if a user discards changes and opens the calendar again, the previously selected date is marked as selected. If after that the user decides to select a new date, it sets the new date as selected.
- For dates I used the built-in JS (TS) features, but a library like _momentjs_ would be more efficient in production.
