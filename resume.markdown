---
layout: resume
title: About
permalink: /resume/

notable_points:
  - <b>Australian Citizen</b>
  - Perth, Australia, 6069
  - <a href="mailto:cmclellen@gmail.com">cmclellen@gmail.com</a>

links:
  - url: https://cmclellen.github.io/
    description: A bit of a portfolio
  - url: https://au.linkedin.com/in/cmclellen
    description: My LinkedIn profile
  - url: https://www.stbrigidsmidland.com.au/
    description: An Umbraco CMS website I developed for the church I attend

summary: |
    A passionate polyglot full-stack developer and Solution Architect with over 25 years of development experience, specializing in scalable, high-performant cloud solutions across diverse industries. I've led the architecture and development of numerous cloud-based projects, notably an Azure integration project for an Australian government organization that had to handle vast volumes of streaming data, which needed to be accurately ingested and reported on, with life-critical implications. This involved meeting demanding throughput requirements, while ensuring all functional and remaining non-functional requirements are met.<br><br>
    I'm deeply passionate about cloud technologies and continually striving to enhance my knowledge and skills in this field, as demonstrated by the numerous certifications I've earned across both Azure and AWS. I've built DevOps pipelines for the projects I've worked on, including those that provision all necessary cloud resources (via Infrastructure-as-Code), as well as pipelines for building, testing, and deploying developed applications. Throughout, ensuring adherence to the pillars of the Well-Architected Framework, delivering secure, reliable, performant, cost-effective, and resilient systems. Most of my experience has been in software development, where I adhere to a TDD approach that fosters decoupled, testable, and maintainable SOLID code.

workItems:
  - company: Insight
    company_description: Cloud Apps and Integrations - Consultancy
    duration: March 2024 - Present
    role: Architect
    projects:
      - name: ICWA
        type: Azure Integration
        description: |
          Cloud architect and lead on the development of several integrations built within their Azure tenancy. The solution comprised several Function and Logic Apps scoped to a particular function of the business, which made sense having them contained within a GitHub repo (mono). The applications were developed using an event-driven architecture, where Azure Service Bus was the message broker of choice. The Outbox pattern aided in ensuring data consistency across domains, especially where integration events needed to be published (via Service Bus Topics) across service boundaries. The C# solutions for each of the Function & Logic apps followed a Clean architecture project structure, while Nuget packages were used to share code (keeping it DRY).
          <br><br>
          The GitHub Actions I built, tested and deployed these apps out to the relevant environment, depending on the progression of the commit. A commit could be deployed to DEV through a feature branch for further developer testing, but higher environments had stricter control via approval gates and specially designated branches (release for TEST and main from PROD).<br><br>
          An Angular SPA was also built to interact with these services via a secure API (using OAuth2 via Azure App Registrations that were created for both frontend and backends).
    
  - company: Eighty20 Solutions
    company_description: Azure Cloud - Consultancy
    duration: May 2022 - March 2024
    role: Senior Consultant
    projects:
      - name: Allied Credit
        type: Customer Web Portal
        description: |
          Worked as team lead and designer on this project to develop a public facing web application to serve as a customer portal for an insurance company. I produced a solution architecture document describing the various design aspects of the system around security, scalability, performance, maintainability, supportability and monitoring. I had walkthroughs with the customer explaining the solutions and decisions made, and had to demo new features on a bi-weekly basis.
          <br><br>
          It’s a React SPA web application that interacts with a backend API developed using an Azure Function app. Requests are routed via Azure Front Door & WAF to the web server hosting the SPA, the Storage Account hosting the assets and the Azure Function backend. All resources deployed as IaC (Bicep) via Azure DevOps pipelines to DEV and gated PROD environments. All traffic remains on the private network after being received from Front Door, i.e. Private Endpoints are used to PaaS services and all public network access disabled. RBAC & Managed Identities are used to secure access to the various services used (Storage Account, KeyVault).

      - name: Adica
        type: Migration of SQL Server BI workloads to Azure
        description: |
          Team lead on this project and helped the solution architect also assigned to the project with ~90% of the design. I mostly helped with deciding and coordinating what tasks needed to be worked on to see the solution through to production, while also catering for a switch over scenario where the legacy and new systems had to run in parallel for a period of time.
          <br><br>
          Migration of SQL Server, SSIS, and SSAS workloads to Azure, specifically Azure SQL Managed Instance, with Multidimensional cubes hosted in SSAS running on an IaaS VM, and SSIS jobs migrated to Azure Data Factory. All resources deployed as IaC (Terraform) via Azure DevOps pipelines. This too is a multi-environment configuration with DEV and PROD. Again, RBAC and Managed Identities used for Data Factory, SQL Managed Instance, KeyVault and Storage Account. Configured Windows Auth with SQL MI so that authorized domain users are able to use their Windows accounts to connect to the databases using SSMS.

      - name: Nido Early Schools
        type: Azure integration
        description: |
          Team lead and architected the design of the system that I too had to produce the solution architecture document on for the customer. The solution predominately was an Azure Durable Function (along with the usual KeyVault for secrets, storage account to handle the orchestrations, etc.) that triggered off a web hook configured in the source API, that then pulled the updated data into a target API. As tasks were completed, the customer was able to validate functionality and as has been the case with all the other projects I’ve been assigned, ensuring Azure DevOps pipelines are implemented from the start, deployment out to the various environments, including to prod at time of go-live, was seamless.

      - name: Mind Australia
        type: Python development
        description: |
          Development of a Python based application that would read data in from a file and insert records into a database, making use of structured logging, dependency injection, unit tests, etc. to developing a Static Web App where I used React and .NET to deliver a UI the company required that would search through a significant amount of records stored in a Azure Storage Table.

  - company: Vanguard
    company_description: Global investment management company
    duration: Apr 2016 - Apr 2017; Oct 2019 – May 2022
    role: Senior Developer
    projects:
      - description: |
          Migration of several of their middle tier applications from WebMethods to a C#.NET WebAPI solution, and was able to achieve ~80% code coverage. 
          Worked on a large project to migrate a couple of their on-premise applications to the cloud. Implemented a core NodeJs library used across all the lambdas to abstract a lot of the complexity away (i.e. cross-cutting concerns) from the various lambda’s code bases, e.g. ensuring all logs are enriched with lambda request IDs & message queue IDs to ease tracing of lambda invocations along with auth token generation for API integration, etc. Was able to achieve ~90% unit test coverage for the numerous lambda’s that were implemented. 
          I also lead the development of Angular UIs to help manage critical systems. 

  - company: Emprevo
    company_description: SaaS solution for managing employee shift work
    duration: May 2017 - Jan 2018
    role: Senior Developer
    projects:
      - description: |
          Worked on refactoring existing test suite into a more maintainable and reliable test suite. Was able to improve significant portions of both frontend and backend code. The frontend is an Angular 5 application, while the backend was written using ASP.NET WebApi, Dapper, Ninject, and .NET Core for the AWS Lambda services. I refactored portions of their backend code to follow SOLID priciples, making for a more maintainable code base and gained significant experience working with AWS services (S3, Lambda’s, DynamoDB, RDS, Elasticsearch, EC2). Have also guided the team in tackling large stories in the sprint to completion.

  - company: Thomson Reuters
    company_description: Multinational mass media and information firm
    duration: Oct 2014 - Apr 2016
    role: Senior Developer
    projects:
      - description: |
          Reporting to the development manager and working on a brown fields project (handling fringe benefits tax for corporations within Australia) to port their existing desktop application to the web. I’ve setup automated deployments to various environments and configured automated running of unit and integrations tests (both client side and server side). 
          <br><br>
          Architected and implemented a scalable solution for their long running processes (large file imports, etc.) using WCF, WAS (Windows Process Activation Service) and MSMQ. SignalR was also incorporated to notify users of completion of these longer running jobs via toastr popups. A bad user experience for the user with the Desktop solution now became non-intrusive and users were now able to continue using the system and not be held up while these background jobs are being processed.
          Having had experience working on performance issues in the past, I was assigned the task of sorting out performance bottlenecks. After tweaking queries in Entityframework and optimizing the database (adding missing indexes, removing unescessary indexes, etc.) and implementing caching strategies (2nd level caching within EF), we were able to get queries on large datasets completing within the defined SLA (including server side paging, sorting, filtering and grouping).
          I advocated the separation of their Web API out from their main web application that hosted their AngularJS SPA. Implemented OWIN security using web token based authentication that would intercept calls to the Web API ensuring authenticated users were able to seamlessly use the web API once initially authenticated.

  - company: Dariel Solutions
    company_description: Consultancy
    duration: Mar 2010 - Sep 2014
    role: Senior Developer
    projects:
      - description: |
          Reports to the Project Manager and formed part of a team who were outsourced to projects based either at the client or developed at Dariel HQ.
          Development of bespoke web application for an insurance company using ASP.NET MVC v5 and AngularJs, with a WCF service backend with a MS SQL Server data tier. We used a Git SCM. 
          Subject matter expert on the development of cutting-edge products and applications including that of web-based solutions, product management systems, finance applications and more.
          Seconded to Life Healthcare on a new Group Product Management System that draws data from over 90+ hospitals and updates more than 100,000 products. I was lead developer and designer on this 2.5 year project where we developed the application using C#.NET v4, ASP.NET MVC v4, JavaScript (jQuery 1.7, KnockoutJs), WCF v4, and MS SQL 2008. We followed Agile Scrum methodologies with morning standups, iterations, retrospectives, CI/daily builds with tests being run on every checkin (MSBuild scripts were written & maintained and configured within TFS). The application was deployed at the start of every 4th week of the iteration for testing, while regression testing took place every 1st week of the following iteration. Testers were able to then test the new features(& bug fixes of previous iteration) and all task/bug tracking was handled via TFS.<br><br>
          Developer lead on a specialist Crime Capturing Systems for a South African mining; a fully multilingual localized multi-tiered application developed with C#.NET v3.5 (Silverlight v4 along with RIA services) for the front-end and WCF, with MS SQL 2008 database.
          Built a new client bespoke financial system using C#.NET v4 : WPF v4 for the front-end and WCF v4.
          Articulated, refined and promoted standard development methods and processes based on best practices, and lead development methodologies, tools, key performance indicators (KPIs).
          Analysed, designed, developed & debugged web-based applications.
          Drove the test management strategy using tools such as MsTest, NUnit and RhinoMocks for unit & integration tests with TFS 2010 (Team Foundation Server) as our CI build + SCM server.
          Embedded best-practice for software development processes and standards (Agile Development, GUI standards, etc.), thus ensuring projects were being delivered as per project plan and standards.
          Directed client and server-side development and WCF service oriented architecture.
          Increased software component reuse where applicable and deal with production issues.
          Ensured effective communication throughout SDLC, interacting during each stage with project managers, other

  - company: Microsoft SA
    company_description: Professional services
    duration: Mar 2008 - Mar 2010
    role: Consultant
    projects:
      - description: |
          Reported to the Professional Development Manager:
          Seconded to Nedbank and Standard Bank as part of a specialist team for the development and replacement of existing legacy systems and deployment of new banking platform. 
          Worked with Visual Studio 2008 (C#.NET 3.5), SQL Server 2008, Enterprise Library 4.1 (Unity & Logging Application Blocks specifically), MOSS 2007, WSS 3.0, and Team Foundation Server 2005, 2008.
          C# Developer to customers on developing and resolving specific customer issues.
          Build Master, creating and maintaining builds, ensuring latest code base is compiled, packaged, and deployed frequently for testing purposes, ensuring the quality of software being developed is of the highest standard,
          Wrote high and low level code design for framework being delivered, led design reviews against customer requirements, conducted code performance tuning and troubleshooting.
          Designed and developed High Level, Low Level Design, and Unit Test Plan, leading the team through integration / System / Performance testing based on integration and system test plans and supports UAT.
          Pro-actively developed the client relationship.
          Maintained continuous communication with client and Project/Programme Manager throughout development, build and go-live, and to Resource Manager as part of the internal team.

  - company: Prior work experience
    company_description: Omitted for brevity
    duration: Jan 2000 - Mar 2008
    role: Developer
    projects:
      - description: |
          Working as a mid/senior level developer on mostly C#.NET applications across a variety of technologies & frameworks like WWF (Windows Workflow Foundation) WPF (Windows Presentation Foundation), WCF (Windows Communication Foundation), Silverlight, Windows forms, ASP.NET MVC, but I also worked on a few Java applications too.

qualifications:
  - name: GitHub Copilot
    year: 2024-Present
    category: Software Development
  - name: TOGAF 10 Foundation
    year: 2024-Present
    category: Architecture
  - name: Azure Solutions Architect Expert
    year: 2022-Present
    category: Azure
  - name: Cybersecurity Architect Expert
    year: 2023-Present
    category: Azure
  - name: Azure Cosmos DB Developer Specialty
    year: 2024-Present
    category: Azure
  - name: Azure AI Engineer Associate
    year: 2023-Present
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
