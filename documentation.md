# Solent News - Documentation

**Solent University**

**Web Design for Industry(SWD600)**

**Assessment 2**

**Academic Year: 2019-2020**

**Unit Leader:** Joe Appleton

**Student**: Vlad-Marian Bibire

[Github Repo](https://github.com/scalipsum/react-newsroom)

[Live Preview](https://solent-news.web.app/)

## Table of Contents

1. [Introduction](#introduction)
2. [Project overview](#project-overview)
3. [Methodology](#methodology)
4. [Implementation](#implementation)
5. [Testing](#testing)
6. [Results](#results)
7. [Recommendations](#recommendations)
8. [Conclusions](#conclusions)

## Introduction

## Project overview

_Solent news_ is a full-stack web application made with the intent of helping students to get real time updates when an unplanned announcement is made. This is helpful in a case where students need a faster way than emailing to find out the current news or if for example they need to undertake their studies from home, and a fast way of communication news is required.

The strucure of the app is very simple. It only contains 2 pages and 3 URL Routes, the idea being that the user will spend as little time as possible whilst using it, just to get or write the latest updates and leave.

It all starts on the **Home** page which serves as login portal where the user is promted to authenticate in the app using their Google account. Since the backend of this app is solely made on Google's service **Firebase**, implementing an OAuth system based on a product from the same company is easier for both the developer and for the user to utilize. With just a click, an unregistered user can have access to the app, instead of creating an account using a tradition email/password method format. It is also more secure to have an authentication like this in place. A developer, instead of making sure that all the user information is stored securely, all the trust is put into Google. And being one of the largest tech companies in the world, security and infrastracture is their strength. [Ref.](https://www.forbes.com/sites/jonathanponciano/2019/05/15/worlds-largest-tech-companies-2019/#752ff888734f)

Once a user has logged in successfully, he will be redirected to the **/news** page where most the time will be spent. Esentially this is where all the interraction among all users are made. Right in the middle, the focus is made on the latest news which are organised cronologically. If one of the news is more important, it can be seen pinned at the top of the page by the use. Besides reading, a user will also be able to write an update for everybody else to see, or update his own post. On the left, there is a list of **all the memebers** that joined the news room at least once and on right there is just a **Logout** button.

Clicking on the **Logout** button the user will be redirected on the 3rd Route of the app, where it will be logged out and redirected back to home page, where all the access of the app is restricted unless he will log in again.

## Methodology

This web application consists of 2 phases: Design phase and Development phase. As mentioned in the planning phase of this project, _"Design thinking"_ methodology is used for creating this web application. Usually the 5 steps of this methodology are applied to each of the phases and if one failse, the whole process is being re-done until perfect positive results. However, due to time limitations, the 5 steps will be applied only once: **Empathize, Define, Ideate** (Design phase), **Prototype** (Development phase), **Test** (Final product).

The **empathizing** part is where a clear understanding of the users needs is made so that a real problem is solved using technology. Since the majortiy of the users are students, a quiz containing 5 questions will be undertaken by them. Based on the results the right descisions are made for the next phases, so that everything is planned out correctly.

Although a small number, a group of 6 students were asked the following questions:

1. What is one of your biggest weaknesses as a student?
2. What do you think is the factor that is causing this weakness?
3. Will an app be able to solve this problem?
4. If yes, will you be able to access it every day to improve yourself?

The **Defining** part is where the obtained results are analyzed and based on the analysis, some decisions are made. These decisions are very important because not only they influence directly the developmenent phase which then influence the development phase, but also there is only one iteration through the whole process, so all the decisions are crucial to be taken correctly.

Unsurprinsingly, the majority of the answers were actually very similar, determing a pattern in a lifestyle of a student. Apperantly, one of the biggest weakenss a student has is organisation which is caused by poor time management. The good part is that an app can help them fix it and they are willing to check it every day _as long as it doesn't take too much time_.

Based on the answers received, the following decisions are made:

- It must be an app that help students to organise better their schedule
- Since students have a poor time management, the app should not take much time to utilize
- It is going to be used on a daily basis

The **ideating** phase will actually consist of the designing high-fidelity prototypes of the app, based on the decisions made. All elements will be taken into consideration and it should be done in very detail so that the development phase is easier.

**Protyping** or Development is where the app is actually being built using the right technologies so that the students will benefit the most.

**Testing** is the final part, where again, the students are asked a few questions with regard to the final product.

## Implementation

## Testing

## Results

## Recommendations

## Conclusions
