import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
import "./index.css";


const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "A dedicated individual balancing career growth, responsibilities, continuous learning, and maintaining professionalism in a dynamic workplace environment.",
      tag: "Satisfied",
    },
    {
      img: "https://images.unsplash.com/flagged/photo-1575227057258-50cb9bffb1af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "A committed professional managing work responsibilities efficiently while continuously improving skills and adapting to challenges.",
      tag: "Adorable",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "An individual dedicated to career growth, demonstrating discipline, expertise, and professionalism in a competitive work environment.",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1601342550567-922440b13faa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content:
        "A career-focused person maintaining integrity, productivity, and adaptability in a fast-paced and evolving workplace setting.",
      tag: "Asigned",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App;