import { NavLink, useNavigate } from "react-router";
import HeaderProfilePicture from "./HeaderProfilePicture";
import { useUser } from "../Context/UserContext";
import MovieFormModal from "../Movie/MovieFormModal";

const setActive = ({ isActive }) => (isActive ? `active-link ` : ``);
const Header = () => {
  const navigate = useNavigate();
  const {
    user: { role },
  } = useUser();

  return (
    <header className="sticky top-0 desktop:top-[2rem] h-full z-10">
      <nav className="  bg-movie-fourth h-[3.5rem] md:h-[4.5rem] md:rounded-[0.63rem] grid grid-cols-[auto_1fr_auto] items-center desktop:grid desktop:grid-cols-1 desktop:grid-rows-[auto_1fr_auto] desktop:w-[6rem] desktop:h-[60rem] desktop:rounded-[1.25rem]">
        <section className=" pt-[1.13rem] pb-[1.52rem]  pl-[0.93rem] md:pl-[1.5rem] md:pb-[1.8rem] md:pt-[1.5rem] desktop:pt-[2.21rem] desktop:pl-[1.99rem] desktop:pr-[2.01rem] desktop:pb-0">
          <svg
            className="w-[1.5625rem] h-[1.25rem] md:w-[2rem] md:h-[1.6rem] desktop:w-[2rem] desktop:h-[1.6rem] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25 20"
            fill="none"
          >
            <path
              d="M20 0L22.5 5H18.75L16.25 0H13.75L16.25 5H12.5L10 0H7.5L10 5H6.25L3.75 0H2.5C1.11875 0 0.0125 1.11875 0.0125 2.5L0 17.5C0 18.8813 1.11875 20 2.5 20H22.5C23.8813 20 25 18.8813 25 17.5V0H20Z"
              fill="#FC4747"
            />
          </svg>
        </section>
        <section className="flex justify-center items-center desktop:items-start h-full desktop:pt-[4.69rem] pb-[0.45rem] md:pb-[0.3rem] md:pr-[0.52rem] desktop:pr-0">
          <section className="flex justify-between items-center w-[8.346rem] h-[1rem] gap-[1.5rem] md:w-[10.8075rem] md:h-[1.25rem] md:gap-[2rem] desktop:flex-col desktop:w-[1.25rem]  desktop:h-[12.5rem] desktop:gap-[2.5rem] ">
            <NavLink to="/" className={setActive}>
              <svg
                className="fill-[#5A698F] hover:fill-movie-primary w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.8 0H6.4C6.88 0 7.2 0.32 7.2 0.8V6.4C7.2 6.88 6.88 7.2 6.4 7.2H0.8C0.32 7.2 0 6.88 0 6.4V0.8C0 0.32 0.32 0 0.8 0ZM0.8 8.8H6.4C6.88 8.8 7.2 9.12 7.2 9.6V15.2C7.2 15.68 6.88 16 6.4 16H0.8C0.32 16 0 15.68 0 15.2V9.6C0 9.12 0.32 8.8 0.8 8.8ZM15.2 0H9.6C9.12 0 8.8 0.32 8.8 0.8V6.4C8.8 6.88 9.12 7.2 9.6 7.2H15.2C15.68 7.2 16 6.88 16 6.4V0.8C16 0.32 15.68 0 15.2 0ZM9.6 8.8H15.2C15.68 8.8 16 9.12 16 9.6V15.2C16 15.68 15.68 16 15.2 16H9.6C9.12 16 8.8 15.68 8.8 15.2V9.6C8.8 9.12 9.12 8.8 9.6 8.8Z"
                />
              </svg>
            </NavLink>
            <NavLink to="/movies" className={setActive}>
              <svg
                className="fill-[#5A698F] hover:fill-movie-primary w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5644 0H2.43556C1.09044 0 0 1.09044 0 2.43556V13.5644C0 14.9096 1.09044 16 2.43556 16H13.5644C14.2104 16 14.8299 15.7434 15.2866 15.2866C15.7434 14.8299 16 14.2104 16 13.5644V2.43556C16 1.78961 15.7434 1.17011 15.2866 0.713358C14.8299 0.256602 14.2104 0 13.5644 0ZM3.2 7.2H1.6V5.6H3.2V7.2ZM3.2 8.8H1.6V10.4H3.2V8.8ZM14.4 7.2H12.8V5.6H14.4V7.2ZM14.4 8.8H12.8V10.4H14.4V8.8ZM14.4 2.192V3.2H12.8V1.6H13.808C13.965 1.6 14.1156 1.66237 14.2266 1.77339C14.3376 1.88441 14.4 2.03499 14.4 2.192ZM3.2 1.6H2.192C2.03499 1.6 1.88441 1.66237 1.77339 1.77339C1.66237 1.88441 1.6 2.03499 1.6 2.192V3.2H3.2V1.6ZM1.6 13.808V12.8H3.2V14.4H2.192C2.03499 14.4 1.88441 14.3376 1.77339 14.2266C1.66237 14.1156 1.6 13.965 1.6 13.808ZM12.8 14.4H13.808C14.135 14.4 14.4 14.135 14.4 13.808V12.8H12.8V14.4Z"
                />
              </svg>
            </NavLink>
            <NavLink to="/tv-series" className={setActive}>
              <svg
                className="fill-[#5A698F] hover:fill-movie-primary w-[1rem] h-[1rem] md:w-[1.25rem] md:h-[1.25rem] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.264 3.58487H16V16H0V3.58487H3.936L1.776 0.962173L3.024 0.0232784L5.6 3.12706L8.176 0L9.424 0.962173L7.264 3.58487ZM1.6 14.4481H9.6V5.13676H1.6V14.4481ZM13.6 11.3443H12V9.79243H13.6V11.3443ZM12 8.24054H13.6V6.68865H12V8.24054Z"
                />
              </svg>
            </NavLink>
            <NavLink
              to="/bookmarks"
              onClick={() => navigate("/bookmarks")}
              className={setActive}
            >
              <svg
                className="fill-[#5A698F] hover:fill-movie-primary w-[0.846rem] h-[1rem] md:w-[1.0575rem] md:h-[1.25rem] "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 16"
                fill="none"
              >
                <path d="M12.3093 0C12.4715 0 12.6266 0.031725 12.7746 0.0951751C13.0073 0.186825 13.1923 0.331351 13.3298 0.528751C13.4673 0.726151 13.536 0.944701 13.536 1.1844V14.8156C13.536 15.0553 13.4673 15.2738 13.3298 15.4712C13.1923 15.6686 13.0073 15.8132 12.7746 15.9048C12.6407 15.9612 12.4856 15.9894 12.3093 15.9894C11.9709 15.9894 11.6783 15.8766 11.4316 15.651L6.76801 11.1672L2.10443 15.651C1.85063 15.8837 1.55805 16 1.2267 16C1.06455 16 0.909451 15.9683 0.761401 15.9048C0.528751 15.8132 0.343688 15.6686 0.206213 15.4712C0.0687376 15.2738 0 15.0553 0 14.8156V1.1844C0 0.944701 0.0687376 0.726151 0.206213 0.528751C0.343688 0.331351 0.528751 0.186825 0.761401 0.0951751C0.909451 0.031725 1.06455 0 1.2267 0H12.3093Z" />
              </svg>
            </NavLink>
          </section>
        </section>
        <section className=" flex justify-end items-center pr-[0.93rem] pt-[1rem] pb-[1rem] md:pr-[1rem] md:pt-[1.31rem] md:pb-[1.19rem] desktop:pb-[1.7rem] desktop:pl-[1.75rem] desktop:pr-[1.75rem] desktop:self-end">
          <div className="flex items-center desktop:flex-col gap-3 desktop:gap-5">
            {role == "admin" && <MovieFormModal type="add" />}
            <HeaderProfilePicture />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
