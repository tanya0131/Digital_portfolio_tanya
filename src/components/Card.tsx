"use client";
import { useEffect, useState } from "react";
import { HoverEffect } from "../components/ui/card-hover-effect";
import axios from "axios";

export function Projects() {
  const [project, setProject] = useState<
    { name: string; description: string; deployedUrl: string }[]
  >([]);
  // useEffect(() => {
  //   const func = async () => {
  //       const result = await axios.get('/api/get-project');
  //       setProject(result.data.data);
  //   }
  //   func();
  // }, [])

  return (
    <div className="max-w-5xl mx-auto px-8">
      <div className="flex justify-center font-bold text-4xl">Projects</div>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Employee Payroll Management",
    description:
      "Developed a secure dual-login Java Spring MVC system with Oracle Database, featuring separate admin and employee functionalities for efficient management of HR tasks like employee data, leave requests, and salary processing.",
    link: "https://github.com/tanya0131/employee-payroll-management",
  },
  {
    title: "Holistic e-learning website ",
    description:
      "Developed a self-learning Java Spring MVC e-learning platform with JavaScript quizzes, enabling students to register, access courses, progress at their own pace, and receive instant feedback.",
    link: "https://github.com/tanya0131/holistic-e-learning",
  },
  {
    title: "Deploying fitness tracking website on aws cloud ",
    description:
      "Implemented a CI/CD pipeline using AWS CodeCommit, CodeBuild, and CodeDeploy to automatically build and deploy a Spring Boot Java application on scalable and highly available EC2 instances within an Auto Scaling Group, while also automating infrastructure provisioning with AWS CloudFormation.",
    link: "https://github.com/tanya0131/Deploying_spring_boot_application_on_aws",
  },
  {
    title: "Text to Image Synthesizer using GANs ",
    description:
      "This project focuses on developing a deep learning model using Generative Adversarial Networks (GANs) that can take text descriptions as input and generate corresponding images. The model learns from a dataset of text-image pairs and creates visually accurate images based on provided text prompts. Finally, we present the findings and results of our study show that the diffusion model, with an accuracy of 76 percentage, out performed the GANs Model, which had an accuracy of 56 percentage.",
    link: "https://drive.google.com/file/d/1jdLmyUvQT9OEWTbHyiodrn2da3mN1RxK/view?usp=sharing",
  },
];
