import React from "react";

function Experience() {
  return (
    <div className="w-full h-full  my-6 py-10">
      <div className="justify-center flex text-4xl font-bold mb-6">Experience</div>
      <div className="justify-center flex">
        <div className="max-w-4xl mx-auto">
          <div>
            <div className="text-2xl mb-2 font-bold underline">
              Software developer Intern
            </div>
            <div className="underline mb-2">PTC Software Private Ltd</div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Contributed to a J2EE-based project codebase, utilizing the
                  Windchill Framework for enterprise-level applications.{" "}
                </li>
                <li>
                  Debugged and resolved bugs, improving system performance and
                  ensuring code quality.
                </li>
                <li>
                  ● Developed a Java program to automate the process of
                  generating and sending emails, enhancing communication
                  efficiency within the team.{" "}
                </li>
                <li>
                  {" "}
                  Worked with XML files and utilized the XML DOM parser to parse
                  and process data into Java collections for further
                  manipulation.{" "}
                </li>
                <li>
                  Developed a Java program to identify specific code patterns in
                  test cases, automating the modification of test files,
                  significantly reducing the need for manual adjustments across
                  multiple files.{" "}
                </li>
                <li>
                  Designed and implemented integration tests to verify API
                  functionality and ensure end-to-end system reliability.
                </li>
                <li>
                  {" "}
                  Utilized Object-Oriented Programming (OOP) concepts to
                  optimize code and add new functionalities, ensuring
                  maintainability and scalability.{" "}
                </li>
                <li>
                  Collaborated with cross-functional teams, providing valuable
                  insights to improve software features and optimize development
                  processes.{" "}
                </li>
                <li>
                  Gained hands-on experience with various Git commands commonly
                  used in the industry for version control and collaboration.{" "}
                </li>
              </ul>
            </div>
          </div>
          <br />
          <div>
            <div className="text-2xl font-bold mb-2 underline">Java programmer</div>
            <div className="underline mb-2">CodeSoft</div>
            <div>
              <ul className="list-disc pl-5">
                <li>
                  Developed and integrated a Student Form application using
                  Java, JDBC, and Oracle database.
                </li>
                <li>
                  Developed a Student Form application using JFrame and Swing to
                  manage student information, integrated with an Oracle database
                  via JDBC for real-time data persistence, and implemented CRUD
                  operations to interact with the database through a
                  user-friendly interface.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

