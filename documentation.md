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

The aim of this Documentation is to showcase the full proccess of building a Minimal Viable Product as a Full-Stack Web Application that will help students with solving their time-management problem. The proccess will cover everything from asking users opinions and get ideas up to making high fidelity designs and developing a fully-fledged funcitonal application.

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

The implementation stage consists of 2 stages:

1. implementing the ideas into a design
2. implementing the design into a fully working application

### Design implementation

Based on the decisions made in the **Defining** phase, a list of **features** is made before starting to design the app:

1. It is a real-time news app where students can organise their schedule better because they see everything as it is announced.
2. It should have the minimum amount of pages and the user journey should be as little as possible
3. In case a something extremely important needs to be announced, the posts should have a pinning feature
4. Show a list of memebers so that the University staff can keep track of who is in the News Room

In order to integrate everything into a modern high-fidelity prototype, Figma software is used as follows:

#### Login page

![](/docs_pics/login.png)

#### News page[members]

![](/docs_pics/members.png)

#### News page[Create a post]

![](/docs_pics/new-post.png)

#### News page[Single post (Delete / Pin / Unpin)]

![](/docs_pics/post.png)

#### News page[Notification]

![](/docs_pics/notification.png)

#### News page[Overall]

![](/docs_pics/news.png)

### Development implementation

Development phase is probabily the most important and the one that takes the most time in the project, so choosing the right technologies right from the beginning is a must.

Since the project needs to have data in real time, **Firebase** will be used as database system. Firebase is a NO-SQL database service made by Google that shares data with a front-end service i.e. the one it needs to be built. Also, Firebase itself as a database represents just a JSON type file, which is fine for a small size application. But this one will scale to possibly thousands of students, so Cloud Firestore comes in handy as a no-sql traditional database (with collections and documents) [Ref.](https://firebase.googleblog.com/2017/10/cloud-firestore-for-rtdb-developers.html)

To build the front end of this application, a front-end javascript framework called React is used, which, compared to a traditional website will load all the data at first and then the user will undertake actions on the platform without any loading time, making every interraction very efficient.

One of the main react's features is the possibility of creating custom components and using them throuout the whole application. However, in order for them to be dynamic, every component extracts their data from a variable called State. The state can also be passed from one component to another, however in a larger sized application this proccess can be tidious, and so the solution is to have a **Global State**. For this, Redux node package comes in handy. Using redux we can have a global variable that lives throughout the whole application and then whenever the data inside the variable is needed by a component, it can be extracted with ease.

This 3 main technologies are amazing on their own, but to make the development phase a bit easier, a package called [react-redux-firebase](http://react-redux-firebase.com/) is going to be used to connect all above technologies and transform the database data into a Global State.

#### The logic

Once the Firebase project is created, the Google Authentication method needs to be activated as well as the Firestore Database and Hosting. From there, a boilerplate [react-app](https://github.com/facebook/create-react-app) is going to be created and a .env file for storing the credentials from firestore.

Once all the technologies are connected (React, Redux and Firebase), the authentication logic can be made. On the main component a check for the Auth is made so that if an unknown user wants to go to the news page, he will be redirected back to login page.

Then all the logic for getting the news from the database should be created and getting them from the Global State. Same for creating a new post or deleteing a post. The proccess is similar on all of 3 actions.

For pinning a post, a new collection is made holding always just a single post, the pinned one. Once a post is pinned, it will be deleted from the posts collection and added to the pinnedPost collection. Vice-vers happens for un-pinning a post.

Logging a user out is actually done by having a simple /logout route which will hold the logging out logic.

The process of getting all the members to the page is similar to getting all the posts to the page, from Global State, which gets it from the Database.

In the end, the working product, looks exactly as planned and designed.

![](/docs_pics/preview.png)

## Testing & Results

Once the app was completed, a small sourvey was undertaken by the same students that gave the first oppinions in regard to the project idea.

They were asked if:

1. Is the results satisfactory in comparison to the expectansions?
2. Do you think it will be useful to be used inside of the university?
3. Any futures you would like the app to have?

The **Results** came with a positive outcome and good feedback.
The first question was answered 100% positively by everyone.

Second question, was answered positiviely with a few mentions:

- only if each group inside of university would have a different room (ex: Computing Room)
- yes, if the university stuff is the only one who can post, rather than everyone

Third question came with even more feedback:

- Different rooms, based on the majour, as mentioned
- Formatted news (with paragraphs and headings)
- Staff should be seen differently than the students
- Let only staff to post

## Recommendations

Based on the feedback got in the previous section a list of recommendations can be made as future updates for the app:

1. Have 2 user-types: staff & students
2. Let only the staff post
3. Formatted News
4. Edit the news
5. Make a staff user to have something different from a student user
6. Different news rooms based on student groups.

## Conclusions

Overall, the application was a learning experience. The development phase was a challange, but having it built on top of a strong infrastrucutre whilst still being small, will help a lot with the future updates. It was also a learning experience in terms of researching. It is now understood that the more users are going to be using the application the more individual needs they have and so the requirements for a Minimal Viable Product can be a lot more in depth than anticipated.
