export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-black">
      <h2 className="text-4xl font-semibold mb-8">Contact Me</h2>
      <p className="mb-8 text-lg text-green-500">Feel free to reach out!</p>
      
      <div className="space-y-4 text-lg">
        <div>
          <strong>Email:</strong>{" "}
          <a 
            href="mailto:anzaljoffl@gmail.com" 
            className="underline text-blue-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-green-500">anzaljoffl@gmail.com</span>
          </a>
        </div>

        <div>
          <strong>LinkedIn:</strong>{" "}
          <a 
            href="https://www.linkedin.com/in/m-anzal-javed/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-green-500">linkedin.com/in/m-anzal-javed</span>
          </a>
        </div>
    
        <div>
          <strong>GitHub:</strong>{" "}
          <a 
            href="https://github.com/anzaljaved" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-600 transition-colors"
          >
            <span className="text-green-500">github.com/anzaljaved</span>
          </a>
        </div>
      </div>
    </section>
  );
}
