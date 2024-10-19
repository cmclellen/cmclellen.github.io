---
layout: post
title:  "Azure hosted Umbraco website"
subtitle: Developing an Azure hosted Umbraco CMS website for the church I attend.
date:   2024-10-17 05:00:44 +0800
image: umbracochurch.jpg
categories: Azure Web Umbraco
---
### Background
The church I regularly attend recently asked the parish community for assistance in creating a new website. Their previous site was difficult to update and lacked flexibility. Given my background, I offered to help them with creating a website that would serve their needs and allow them to self-serve and update the content themselves.

Have a browse around the site <a href="https://stbrigidsmidland.com.au/" target="_blank">St Brigid’s & St Michael’s Churches</a>.

### Requirements
<ins>Functional</ins>
1. Admins of the site, in this case the parish secretary, needed to be able to login and alter content, i.e. self-serve.
1. The site needed to be usable across all devices, i.e. desktop browsers but also mobiles.
1. Parishioners visiting the site needed to be able to fill request forms out related to various church ceremonies, bookings, etc. and submit them via the site. Once submitted, the parish secretary needed to be notified of these submissions and be able to view them so that further arrangements could be made to serve these requests. This was all previously done manually via paper forms that were submitted in person.
1. Visitors needed to be able to pay for any bookings, ceremonies, etc. that were requested via the site.

<ins>Non-Functional</ins>
1. Not expected to have much load, so DAU would be <50.
1. Cost is a constraint, as the site wasn't core and so needed to be hosted as cheaply as possible.

### High-Level Design
<div class="border rounded-2 p-2">
    <img class="img-fluid" src="../../../../../assets/images/umbraco_church_diagram.png" />
</div>

### The Journey
###### The foundation
One of the key frustrations with the old site was that it was managed by a team overseeing a generic, relatively inflexible website platform that served multiple churches, with St. Brigid's being one of them. When the church admins wanted to change content on their site, they needed to submit a request for the change. Depending on whether the platform team could make the change given the constraints of the platform, the lead time from raising the request to its delivery was considerably lengthy. So it was important that the solution chosen would allow the church admins to self-serve and be able to change content by themselves. For this reason, a CMS (content management system) was what they needed, and as I come from a .NET background, decided to go with Umbraco.

We then needed to host the site. While I'm a certified Solution Architect across both AWS and Azure, I've been using Azure more frequently lately, so I felt confident selecting it for hosting the site.

###### Addressing remaining requirements
Since the website serves a church community, users access it from various locations, including while on the go. Therefore, it was crucial for the site to be usable and responsive across all device types. This is why a mobile-first approach was essential in its development.

While the Umbraco CMS offered church admins the flexibility to update content on the site, it was also essential to include forms for users to fill out and submit for various events. This functionality would help the church efficiently track registrations and bookings. Once a user submitted a form, the church secretary would receive an email notification. The flexibility of the Umbraco CMS made it possible to integrate these forms seamlessly.

Additionally, some events required a fee to be paid by the user submitting the form. This was facilitated through the integration of Stripe payment buttons, which were embedded in the relevant forms.

###### Getting started
Having not worked with Umbraco before, my initial plan was to just get a barebones version of an Umbraco site up and running and deployed as a webapp in Azure. 

I began by developing the solution locally. Then, I provisioned what I needed in Azure via clickops, so that I could understand what were all the Azure resources that I needed. Finally, I published the site via Visual Studio to the Azure resources I had set up. Once I got the site up and running in Azure, I then focused on developing the Azure DevOps pipeline that would run the IaC (infrastructure-as-code) bicep scripts. Once that was in place, I tore down what I initially click-opsed my way through, and then ran the new pipeline that then automatically provisioned all the resources I needed in Azure. I then moved onto developing an additional pipeline that would build, test and deploy the actual site. Once completed, instead of having to publish the site from Visual Studio now, on commits, the site would be built via an Azure DevOps build agent and deployed to a development environment.

###### The environments
I ended up with 2 environments in Azure, namely a `dev` and `prd` environment. My `dev` environment is where I would do the SIT testing before I deemed everything to be ok to then deploy to the higher environment, `prd`. To deploy to `prd`, obviously I didn't want everything to just roll out to both `dev` and `prd`, and so there was an approval gate for `prd` preventing that. Once I was happy with my deployment to `dev`, I would approve the deployment to `prd` that triggered the automatic deployment.

###### Tweaking
Cost was a key factor, as I was going to be paying for the site and obviously the cheaper, I could host the site for, the better. I used the Azure pricing calculator quite a bit to find ways to cut cost. Once example was, when the domain for the site was registered and I needed to configure the domain for the webapp, I realised that I needed a higher SKU of App Service Plan and so had to bump up from a `Free F1` plan to a `Basic B1` plan to accommodate the custom domain and SSL. As I had initially chosen Windows as the OS to get the initial MVP up and running, this was going to be expensive as it would have pushed the cost up from ~$16 to ~$90 per month. I found if I changed to using Linux as the OS instead, the same SKU would cost me ~$20 per month, and so opted for that. The `dev` environment doesn't need custom domains, SSL certificates, etc. and so I don't need the more expensive SKUs of resources provisioned there. I have a budget configured on the resource group where my resources are provisioned, just so that I'm notified of any unexpected costs.
