import NetworkBackdrop from './NetworkBackdrop';
export default function Experience(){
  return <section className="experience-section" id="experience" aria-labelledby="experience-title">
    <NetworkBackdrop/>
    <header className="experience-heading is-visible"><span>04 / WORK EXPERIENCE</span><h2 id="experience-title">Learning through <em>experience.</em></h2><p>Practical experience in banking operations, customer service, and professional collaboration.</p></header>
    <article className="primary-experience is-visible">
      <header><div><span>BANKING INTERN</span><h3>People’s Bank</h3><p><strong>Regional Head Office, Kurunegala</strong><span>March 2023 - October 2023</span></p></div></header>
      <div className="role-progression"><article><i/><div><small>INTERNSHIP</small><span>Banking Intern</span><time>March 2023 - October 2023</time><p>Gained practical experience in banking operations, customer service, and administrative processes within a professional financial environment.</p><p>Developed communication, teamwork, time management, and problem-solving skills through daily banking activities.</p><p>Gained exposure to business operations and professional workplace practices in the banking sector.</p></div></article></div>
      <footer><strong>Core skills</strong><span>Communication</span><span>Teamwork</span><span>Time Management</span><span>Problem-Solving</span></footer>
    </article>
  </section>;
}
