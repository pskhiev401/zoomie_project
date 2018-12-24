# Zoomie

### An Innovative DMV Automation Web Application.

#### Technologies: HTML, SASS, React, Redux, Node, Express, PostgreSQL

Created by Patric Khiev in October 2018.

A mock web app where users can get a replacement Drivers License or State ID by simply upload a photo of their DL or State ID Card. The goal of this application was to make it painless for the user.

The project goal was met by creating a scanner feature where users can simply upload an image of their credentials versus having to fill out a 20+ question form. However the form wizard was a necessary evil and part of the MVP plan should the user lose their ID or the ID became too mangled to scan.

![landing_login](https://s3.amazonaws.com/zoomie/v3.gif)

# Table of Contents

[Preplanning](#preplanning) - [1. Wireframing](#wireframing) - [2. User Stories](#user-stories) -[ 3. Admin Stories](#admin-stories) - [ 4. Component Tree](#component-tree) - [5. Schema](#schema)

[Main Challenges](#main-challenges) - [1. Conditional Styling](#conditional-styling) - [2. Group Programming](#averaged-profile-algorithm) -

- [Account Creation](#account-creation) - [Quiz](#quiz) [Authorization](#authorization)

* [Technology](#technology) - [Etc](#)

## Preplanning

#### Wireframing

In retrospect, wireframing was probably the most fruitful planning tool used for this project. It allowed us to see the totality of the project, revise features, and scale back features as necessary.

Below is a visual of the plan of attack.

![wireframe1](https://s3.amazonaws.com/zoomie/Zoomie+WireFrame.jpg)

Initially, Adobe XD was used to mock up some views.

![adobeXD](https://s3.amazonaws.com/zoomie/Planningv1.png)

![adobeXDv2](https://s3.amazonaws.com/zoomie/zoommobile1.gif)

#### User Stories

- Users should be able to: - Renew ID/DL online without having to go to the DMV - Have scanner feature to bypass filling out forms - Pay for services online

#### Admin Stories

- Admins should be able to: - track and distinguish 'pending' and 'completed' job tickets - change job status from 'pending' to 'complete' - notify customers via email about their order status

### Features

### Schema

![schema](https://s3.amazonaws.com/zoomie/Zoomie_schema.png)
