import { contactEndpoint } from "./components/constructor.js";

const key = 'FBFAB16F-25C5-9341-990C-AD91DB76D0B93DCF1D20-C437-4D6F-817C-1617AA774611';

const DOMStrings = {
  key : document.querySelector('#form-input').value,
  dropdown : document.querySelector('#dropdown')
};

DOMStrings.dropdown.addEventListener('change', () => {
  
  const selection = DOMStrings.dropdown.options[dropdown.selectedIndex].text;
  if( selection === 'Please Choose an Option') {
    //handle error (but better later)
    alert('Not a valid choice')
  } else {
    //do stuff
    console.log(selection)
  }
});