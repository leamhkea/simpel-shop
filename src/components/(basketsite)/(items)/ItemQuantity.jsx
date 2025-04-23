const ItemQuantity = () => {
  return (
    <form class="max-w-xs mx-auto">
      <div class="relative flex items-center max-w-[8rem]">
        <button>
          <svg
            class="w-3 h-3 text-gray-900 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 2"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h16"
            />
          </svg>
        </button>
        <input
          type="text"
          id="quantity-input"
          data-input-counter
          class="bg-gray-50 border-x-0"
          placeholder="999"
          required
        />
        <button>
          <svg
            class="w-3 h-3 text-gray-900 dark:text-white"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 1v16M1 9h16"
            />
          </svg>
        </button>
      </div>
      <p
        id="helper-text-explanation"
        class="mt-2 text-sm text-gray-500 dark:text-gray-400"
      >
        Please select a 5 digit number from 0 to 9.
      </p>
    </form>
  );
};

export default ItemQuantity;
