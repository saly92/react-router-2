import { BookGroupFantasy } from "../components/BookGroupFantasy";
import { BookGroupPolitics } from "../components/BookGroupPolitics";
import { BookGroupTechnology } from "../components/BookGroupTechnology";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";

export const PageBooks = () => {
  return (
    <div className="page_books">
      <h3>Books</h3>
      
      <ul>
        <li>
          <NavLink to="fantasy">Fantasy</NavLink>
        </li>
        <li>
          <NavLink to="politics">Politics</NavLink>
        </li>
        <li>
          <NavLink to="technology">Technology</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="fantasy" element={<BookGroupFantasy />} />
        <Route path="politics" element={<BookGroupPolitics />} />
        <Route path="technology" element={<BookGroupTechnology />} />
        <Route path="/" element={<Navigate to="fantasy" replace />} />
      </Routes>
    </div>
  );
};
