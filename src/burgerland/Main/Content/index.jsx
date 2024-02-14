
import Search from "../Search";

const Content = ({ children }) => {
  return (
    <section className=" max-w-[80%] h-screen grow p-8 relative">
      <Search />
      {children}
    </section>
  );
};

export default Content;
