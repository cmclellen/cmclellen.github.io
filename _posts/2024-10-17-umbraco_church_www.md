---
layout: post
title:  "Azure hosted Umbraco website"
subtitle: Developing an Umbraco website for the church I attend and hosting it in Azure.
date:   2024-10-17 05:00:44 +0800
image: umbracochurch.jpg
categories: jekyll update
---
### Background
The church I regularly attend recently asked the parish community for assistance in creating a new website. Their previous site was difficult to update and lacked flexibility. Given my background, I offered to help them with crteating a website that would serve their needs and allow them to self-serve and update the content themselves.

### Requirements
<ins>Functional</ins>
1. Admins of the site, in this case the parish secretary, needed to be able to login and alter content, i.e. self-serve.
1. The site needed to be usable across all device, i.e. desktop browsers but also mobiles.
1. Parishioners visiting the site needed to be able to fill request forms out related to various church ceremonies, bookings, etc. and submit them via the site. Once submitted, the parish secretary needed to be notified of these submissions and be able to view them so that further arrangements could be made to serve these requests. This was all previously done manually via paper forms that were submitted in person.
1. Visitors needed to be able to pay for any bookings, ceremonies, etc. that were requested via the site.

<ins>Non-Functional</ins>
1. Not expected to have heavy load, so DAU would be ~50 (if that).
1. Cost is a constraint, as the site wasn't core to operations and so needed to be hosted as cheaply as possible.

### High-Level Design
<img src="../../../../../assets/images/umbraco_church_diagram.png" />