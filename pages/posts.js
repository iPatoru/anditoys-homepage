import Footer from "../components/footer";
import GridPosts from "../components/grid-posts";

export default function Index() {
  const images = ["./1.jpg", "./2.jpg", "./3.jpg", "./4.jpg"];

  return (
    <>
      <GridPosts images={images} />
      <Footer />
    </>
  );
}
