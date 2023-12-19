import { createContext } from 'react';

import { books } from '@/constants/Books';

const BooksContext = createContext(books);

export { BooksContext };
