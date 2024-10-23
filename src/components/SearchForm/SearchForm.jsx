import toast, { Toaster } from 'react-hot-toast';
// import css from './SearchForm.module.css'

const notify = () => toast.error('Text must be entered to search for images');

const SearchForm = ({ onSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const inputValue = evt.currentTarget.elements.search.value.trim();

    if (inputValue === '') {
      notify();
      return;
    }

    onSearch(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="movie title"
      />
      <button type="submit">Search</button>
      <Toaster />
    </form>
  );
};

export default SearchForm;
