# Zoomie

### An Innovative DMV Automation Web Application. 

Created by Patric Khiev in October 2018.

A mock web app where users can get a replacement Drivers License or State ID by simply upload a photo of their DL or State ID Card. The goal of this application was to make it painless for the user.  

The project goal was met by creating a scanner feature where users can simply upload an image of their credentials versus having to fill out a 20+ question form.  However the form wizard was a necessary evil and part of the MVP plan should the user lose their ID or the ID became too mangled to scan. 

![v4](https://s3.amazonaws.com/zoomie/v4.gif)

## Table of Contents

[Planning](#planning)

-  [Wireframing](#wireframing) 
- [User Stories](#user-stories) 
- [ Admin Stories](#admin-stories) 
- [ Component Tree](#component-tree) 
-  [Schema](#schema)

[Challenges](#challenges) 
- [Scanner](#scanner) 


## Planning

### Wireframing
In retrospect, wireframing was probably the most fruitful planning tool used for this project. It allowed us to see the totality of the project, revise features, and scale back features as necessary.

Below is a visual of the plan of attack.  

![wireframe1](https://s3.amazonaws.com/zoomie/Zoomie+WireFrame.jpg)

Initially, Adobe XD was used to mock up some views. 

![adobeXD](https://s3.amazonaws.com/zoomie/Planningv1.png)

Adobe XD Flow Demo

![adobeXDv2](https://s3.amazonaws.com/zoomie/zoommobile1.gif)

### User Stories
 - Renew ID/DL online without having to go to the DMV
- Have scanner feature to bypass filling out forms
- Pay for services online

### Admin Stories
- track and distinguish 'pending' and 'completed' job tickets
- change job status from 'pending' to 'completed'
- notify customers via email about their order status 
	

### Features
- Millennial-friendly UX/UI
- Form Wizard
- Scan DL/ID
- Notify Customers
- Manage Job Tickets

### Component Tree

![ComponentTree](https://s3.amazonaws.com/zoomie/Z_ComponentTree.png)

### Schema
![schema](https://s3.amazonaws.com/zoomie/Zoomie_schema.png)
## Challenges

### Scanner
The scanner feature was tough feature to implement for a variety of reasons. We spent a significant amount of time researching for different technologies to be able to 'read' ID cards. Although Google Vision API was very powerful, however it was overkill for the scope of this project. The real breakthrough happened when we discovered a 3rd Party API (Microblink) which does exactly what we're seeking to do. 

#### The 'Eureka!' Moment
The real challenge was to figure out a way to convert images of ones ID into base64 and then hit the Microblink API. Another issue was with Node, which has a preset payload capacity. Images like IDs are hard to read when its resolution is small, and figuring out the 'goldilocks' ratio between readability and not overwhelming our payload was a tricky balancing act.