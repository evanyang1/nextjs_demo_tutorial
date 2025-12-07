import Hello from "@/components/hello";

const Home = () => {
  console.log("Rendering Home Page");

  return (
    <main>
      <Hello />
      <div className="text-5xl">Welcome to Next.js!</div>
    </main>
  );
};

export default Home;
