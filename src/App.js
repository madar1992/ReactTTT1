import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Blog from './Components/Blog';




function App() {
  const posts = [
    {
      title: "Post 1",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "Post 2",
      content: "Consectetur adipiscing elit.",
    },
    {
      title: "Post 3",
      content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  return (
    <div className="App">
      
      <Header title="My Blog" />
        <Blog posts={posts} />
        <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
