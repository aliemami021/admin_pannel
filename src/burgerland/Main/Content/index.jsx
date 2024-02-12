
import Search from "../Search";

const Content = ({ children }) => {
  return (
    <section className=" bg-red-100 max-w-[80%] max-h-screen grow p-8 relative">
      <Search />
      {children}
    </section>
  );
};

export default Content;
