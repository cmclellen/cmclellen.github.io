---
layout: resume
title: Resume
permalink: /resume/
summary: |
    A passionate polyglot full-stack developer and Solution Architect with over 25 years of development experience, specializing in scalable, high-performant cloud solutions across diverse industries. I've led the architecture and development of numerous cloud-based projects, notably an Azure integration project for an Australian government organization that had to handle vast volumes of streaming data, which needed to be accurately ingested and reported on, with life-critical implications. This involved meeting demanding throughput requirements, while ensuring all functional and remaining non-functional requirements are met.<br><br>

    I'm deeply passionate about cloud technologies and continually striving to enhance my knowledge and skills in this field, as demonstrated by the numerous certifications I've earned across both Azure and AWS. I've built DevOps pipelines for the projects I've worked on, including those that provision all necessary cloud resources (via Infrastructure-as-Code), as well as pipelines for building, testing, and deploying developed applications. Throughout, ensuring adherence to the pillars of the Well-Architected Framework, delivering secure, reliable, performant, cost-effective, and resilient systems. Most of my experience has been in software development, where I adhere to a TDD approach that fosters decoupled, testable, and maintainable SOLID code.<br><br>

workItems:
  - company: Insight
    company_description: Cloud Apps and Integrations - Consultancy
    role: Architect
    projects:
      - name: ICWA - Integrations
        description: |
          Cloud architect and lead on the development of several integrations built within their Azure tenancy. The solution comprised several Function and Logic Apps scoped to a particular function of the business, which made sense having them contained within a GitHub repo (mono). The applications were developed using an event-driven architecture, where Azure Service Bus was the message broker of choice. The Outbox pattern aided in ensuring data consistency across domains, especially where integration events needed to be published (via Service Bus Topics) across service boundaries. The C# solutions for each of the Function & Logic apps followed a Clean architecture project structure, while Nuget packages were used to share code (keeping it DRY).
          <br><br>
          The GitHub Actions I built, tested and deployed these apps out to the relevant environment, depending on the progression of the commit. A commit could be deployed to DEV through a feature branch for further developer testing, but higher environments had stricter control via approval gates and specially designated branches (release for TEST and main from PROD).<br><br>
          An Angular SPA was also built to interact with these services via a secure API (using OAuth2 via Azure App Registrations that were created for both frontend and backends).

qualifications:
  - name: GitHub Copilot
    year: 2024-Present
    category: Software Development
  - name: TOGAF 10 Foundation
    year: 2024-Present
    category: Architecture
  - name: Azure Cosmos DB Developer Specialty
    year: 2024-Present
    category: Azure
  - name: Azure AI Engineer Associate
    year: 2023-Present
    category: Azure
  - name: Cybersecurity Architect Expert
    year: 2023-Present
    category: Azure
  - name: Azure Solutions Architect Expert
    year: 2022-Present
    category: Azure
  - name: Azure Security Engineer Associate
    year: 2023-Present
    category: Azure
  - name: Azure Administrator Associate
    year: 2022-Present
    category: Azure
  - name: AWS Solution Architect Professional
    year: 2018-2023
    category: AWS
  - name: AWS DevOps Engineer Professional
    year: 2018-2023
    category: AWS
  - name: AWS Solution Architect Associate
    year: 2017-2020 
    category: AWS
  - name: AWS Developer Associate
    year: 2018-2020
    category: AWS
  - name: IASA Global Certified IT Architect - Foundation
    year: 2015
    category: Architecture
  - name: <small><i>&bullet; Older Microsoft certifications omitted for brevity</i></small>
    category: Software Development

---
