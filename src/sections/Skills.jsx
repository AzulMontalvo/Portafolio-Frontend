function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>
      <section className="skills-grid">
      <ul id="frontSkills" className="skill-card">
        <h4>Frontend Development</h4>
        <li>React</li>
        <li>JavaScript (ES6+)</li>
        <li>HTML & CSS</li>
        <li>Bootstrap</li>
        <li>Responsive Design</li>
      </ul>
      <ul id="backSkills" className="skill-card">
        <h4>Backend & Data</h4>
        <li>C# / ASP.NET</li>
        <li>REST APIs</li>
        <li>SQL (PostgreSQL, MySQL, SQL Server)</li>
      </ul>
      <ul id="toolsSkills" className="skill-card">
        <h4>Tools & Engineering</h4>
        <li>Git & GitHub</li>
        <li>Postman</li>
        <li>Figma</li>
        <li>DevTools</li>
      </ul>
      </section>
    </section>
  );
}

export default Skills;
