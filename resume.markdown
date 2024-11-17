---
layout: resume
title: About
permalink: /resume/
full_name: Anthony Craig McLellen
current_role: Architect

skills:
  - name: Programming Languages
    items:
      - C#.NET
      - Java
      - Typescript
      - NodeJs
      - Python
  - name: Azure
    items:
      - APIM
      - SQL MI, Database, Cosmos DB
      - Front Door & WAF
      - Functions, Logic Apps
      - Entra ID (App Registrations, Managed Identity, IODC, Client Credential Flow, Authorization Code Flow with PKCE, etc.)
      - KeyVault
      - Service Bus
      - Event Hub
      - Data Explorer
      - Data Factory
      - Storage Blobs, Files, Tables & Queues
      - VNets, Subnets, Service/Private Endpoints, Private DNS Zones, etc.
  - name: DevOps
    items:
      - GitHub Actions
      - Azure DevOps
      - Terraform
      - Bicep
  - name: Software Practices
    items:
      - Microservices Architecture
      - Event-Driven Architecture
      - CI/CD Pipelines
      - TDD
      - Docker Test Containers
      - SOLID Principles
      - Agile Methodologies
  - name: Frameworks
    items:
      - EntityFramework
      - OpenTelemetry
      - OpenAPI
      - Serilog
      - Azure & AWS SDKs
      - FluentValidations
      - MSTest, NUnit, Moq, Verify, Bogus, Autofixture, FluentAssertions
  - name: Web Development
    items:
      - Angular
      - ReactJs
      - Umbraco (CMS)

notable_points:
  - <b>Australian Citizen</b>
  - Perth, Australia, 6069
  - <a href="mailto:cmclellen@gmail.com">cmclellen@gmail.com</a>

other_notable_points:
  - AGSVA Baseline Security Clearance

links:
  - url: https://au.linkedin.com/in/cmclellen
    text: au.linkedin.com/in/cmclellen
  - url: https://cmclellen.github.io
    text: cmclellen.github.io

summary: |
    Passionate full-stack Software Engineer and Solution Architect with 25+ years of experience, leading the design and development of scalable, secure, and user-focused applications. Skilled in Agile methodologies, cloud computing, microservice & event-driven architectures, DevOps and writing SOLID TDD code, while often mentoring and guiding more junior developers.

workItems:
  - company: Insight
    company_description: Cloud Apps and Integrations-Consultancy
    duration: Mar'24-Present
    role: Architect
    projects:
      - name: ICWA
        type: Azure Integration
        characteristics:
        - Led and mentored the development team in successfully delivering an Azure Integration Services (AIS) solution to Azure.
        - Drove the adoption of TDD and visualised code coverage stats via the CI build dashboard.
        - Built out CI/CD pipelines using GitHub Action, and configuring the security thereof with environment appropriate approval gates.
        - Defined the branching strategy that was followed and configured branch related quality gates.
        - Guided the team with DDD (Domain-Driven Design) and the event-driven architecture that was implemented.
        - Helped develop an Angular SPA that fronted the APIs deployed as part of the solution.
        - Documented the architecture incorporating various diagrams created with tools like Structurizr (C4) and PlantUML/drawio (deployment, sequence, etc.).

  - company: Eighty20 Solutions
    company_description: Azure Cloud-Consultancy
    duration: May'22-Mar'24
    role: Senior Consultant
    projects:
      - name: DEFS (Department of Fire and Emergency Services)
        type: Tracking GPS coordinates of personal & vehicles
        characteristics:
        - Setup and configured Azure API Management, and built out Azure DevOps CI/CD pipelines to deploy APIs to it using APIOps.
        - Built Function Apps and Data Factory pipelines to process high volumes of GPS coordinate data streaming in via Azure Event Hub.
        - Due to the accuracy of the data being life-critical, quality was imperative, so code-coverage and quality tests were non-negotiable.

      - name: Department of Defence
        type: Migration of on-premises applications to Azure
        characteristics:
        - Built out the Azure DevOps pipeline to provision, via IaC (Bicep), the platform and application landing zones to their various Azure subscriptions for their various environments.
        - Solved issues with legacy applications having to use Azure AD as an IdP (Identity Provider).

      - name: Allied Credit
        type: Customer Web Portal
        characteristics:
        - Helped develop a Customer portal built using React fronting an Azure Function hosted API.
        - Drove the alignment with the key pillars of the Azure (WAF) Well-Architected Framework.
        - Delivered bi-weekly presentations to the customer, showcasing the latest features that had been implemented and in so doing, communicated tangible progress.
        - Remediated issues identified during the PEN testing exercise.
        - Developed the IaC scripts to provision resources to Azure, including provisioning and configuration of Azure Front Door and WAF (Web Application Firewall).

      - name: Adica
        type: Migration of SQL Server BI workloads to Azure
        characteristics:
        - Authored the Solution Architecture Design document outlining the current & target state architecture (with use of conceptual, logical and physical diagrams), RAID register, functional & non-functional requirements (with reference to the pillars of the Well-Architected Framework).
        - Devised plan to run old and new systems in parallel so that they could be switched over when given the green light.
        - Built out the IaC Terraform scripts to provision resources for the various environments to Azure.
        - Configured Windows Auth with an Azure hosted SQL MI enabling authorised domain users to login using their AD accounts.

      - name: Nido Early Schools
        type: Azure integration
        characteristics:
        - Architected and implemented an integration solution using Azure Durable Functions to orchestrate data synchronisation across systems triggered by webhooks.
        - Built out the Azure DevOps pipelines to provision resources via IaC and build, test and deploy the applications to Azure to the various environments.

      - name: Mind Australia
        type: Python development
        characteristics:
        - Developed a Python based application that ingested files into a database incorporating structured logging, dependency injection & unit tests.

  - company: Vanguard
    company_description: Global investment management company
    duration: Apr'16-Apr'17;Oct'19–May'22
    role: Senior Developer
    projects:
      - characteristics:
        - Migration of several of their middle tier applications from WebMethods to a C#.NET WebAPI solution.
        - Drove TDD and achieved ~90% code coverage.
        - Developed numerous NodeJs based AWS Lambdas to process messages published to SQS and SNS.
        - Developed several Angular SPAs that securely integrated with various APIs over HTTPS using JWT tokens with OAuth2.

  - company: Emprevo
    company_description: SaaS solution for managing employee shift work
    duration: May'17-Jan'18
    role: Senior Developer
    projects:
      - characteristics:
        - Refactoring existing test suite into a more maintainable and reliable test suite.
        - Helped develop and maintain core features of their Angular SPA fronting their SaaS service.
        - Developed various components that integrated with AWS S3, DynamoDB, RDS, and Elasticsearch.
        - Instrumental in guiding the team towards splitting large stories strategically into more sprint achievable sized stories that aided delivering the feature to production sooner.

  - company: Thomson Reuters
    company_description: Multinational mass media and information firm
    duration: Oct'14-Apr'16
    role: Senior Developer
    projects:
      - characteristics:
        - Helped port an existing desktop application to a web application which involved quite a bit of careful refactoring that relied on retrofitting tests to prevent regressions.
        - Configured Jenkins pipelines to build, test and deploy an Angular SPA and ASP.NET API applications to various environments.
        - Architected and helped implement a scalable solution to cater for long running processes (ingestion of large file, etc.) using WCF, WAS (Windows Process Activation Service) and MSMQ
        - Used SignalR to prove real-time feedback to users.
        - Investigating and resolving performance bottlenecks, specifically around tweaking EntityFramework queries and optimising database indexes.
        - Implemented server-side paging and 2nd-level caching with EntityFramework.
        - Drove the separating out of the Web API from the core web application that hosted the AngularJS SPA, allowing the API to be scaled out separately.

  - company: Dariel Solutions
    company_description: Consultancy
    duration: Mar'10-Sep'14
    role: Senior Developer
    projects:
      - name: Insurance
        characteristics:
        - Development of a bespoke web application for an insurance company using ASP.NET MVC and AngularJs.
        - Helped develop a WCF service backend by MS SQL Server.
      - name: Life Healthcare
        characteristics:
        - Designed and help developed a product management system that drew data from over 90 hospitals, enabling the hospitals to maintain records of over 100,000 products.
        - Created TFS CI pipelines using MSBuild that built & tested code on each commit.
      - name: AngloGold Ashanti
        characteristics:
        - Developer lead on a specialist Crime Capturing Systems for a South African mining; a fully multilingual localised multi-tiered application developed with C#.NET v3.5 (Silverlight v4 along with RIA services) for the front-end and WCF, with MS SQL 2008 database.
        - Drove the test management strategy using tools such as MsTest, NUnit and RhinoMocks for unit & integration tests with TFS 2010 (Team Foundation Server) as our CI build + SCM server.

  - company: Microsoft SA
    company_description: Professional services
    duration: Mar'08-Mar'10
    role: Consultant
    projects:
      - name: Nedbank
        characteristics:
        - Helped develop a replacement application for their existing legacy systems using Visual Studio 2008 (C#.NET 3.5), SQL Server 2008, Enterprise Library 4.1 (Unity & Logging Application Blocks specifically), MOSS 2007, WSS 3.0, and Team Foundation Server 2005, 2008.
      - name: Standard Bank
        characteristics:
        - Build Master, creating and maintaining builds, ensuring latest code base is compiled, packaged, and deployed frequently for testing purposes, ensuring the quality of software being developed is of the highest standard.

  - company: Earlier experience
    company_description: Omitted for brevity
    duration: Jan'00-Mar'08
    role: Developer
    projects:
      - characteristics:
        - Working as a mid/senior level developer on mostly C#.NET applications across a variety of technologies & frameworks like WWF (Windows Workflow Foundation) WPF (Windows Presentation Foundation), WCF (Windows Communication Foundation), Silverlight, Windows forms, ASP.NET MVC, etc.
        - Developed a few Java applications.

qualifications:
  - name: GitHub Copilot
    year: Nov 2024-Present
    category: Software Development
  - name: GitHub Foundation
    year: Nov 2024-Present
    category: Software Development
  - name: TOGAF 10 Foundation
    year: Oct 2024-Present
    category: Architecture
  - name: Azure Solutions Architect Expert
    year: Dec 2022 - Dec 2025
    category: Azure
  - name: Cybersecurity Architect Expert
    year: Jul 2023 - Jul 2025
    category: Azure
  - name: Azure Cosmos DB Developer Specialty
    year: May 2024 - May 2026
    category: Azure
  - name: Azure AI Engineer Associate
    year: Dec 2023 - Dec 2025
    category: Azure
  - name: Azure Security Engineer Associate
    year: Jun 2023 - Jun 2025
    category: Azure
  - name: Azure Administrator Associate
    year: Sep 2022 - Sep 2025
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
  - name: <small><i>Older Microsoft certifications omitted for brevity</i></small>
    category: Software Development

---
