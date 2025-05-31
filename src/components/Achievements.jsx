export default function Achievements() {
    const achievements = [
        {
          title: "24-Hour Hackathon Winner",
          description:
            "Won the first prize in a 24-hour Hackathon conducted by Muthoot College of Engineering.",
        },
        {
          title: "UI Designing – Second Prize",
          description:
            "Secured 2nd place in UI Designing competition hosted by Sacred Hearts College.",
        },
        {
          title: "Cybersecurity Seminar",
          description:
            "Delivered a seminar on Basic Cybersecurity for school and college students.",
        },
        {
          title: "AI Fundamentals Talk",
          description:
            "Presented a seminar on Basic AI and ML concepts for students of different age groups.",
        },
        {
          title: "Leadership Certificate – AI Workshop",
          description:
            "Awarded for leadership in executing a workshop on ‘AI for Students’, conducted by AI expert and IIT Alumni Mr. Trivikrama and organized by NXTWAVE.",
        },
      ];
      
  
    return (
      <section id="achievements" className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-10 text-white">Achievements</h2>
  
        <div className="flex flex-col gap-6">
          {achievements.map((ach, i) => (
            <div
              key={i}
              className="bg-gray-200 p-5 rounded-xl shadow-lg text-gray-900"
            >
              <h3 className="text-xl font-bold mb-1">{ach.title}</h3>
              <p className="text-sm">{ach.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  