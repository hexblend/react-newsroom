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

It all starts on the **Home** page which serves as login portal where the user is promted to authenticate in the app using their Google account. Since the backend of this app is solely made on Google's service **Firebase**, implementing an OAuth system based on a product from the same company is easier for both the developer and for the user to utilize. With just a click, an unregistered user can have access to the app, instead of creating an account using a tradition email/password method format. It is also more secure to have an authentication like this in place. A developer, instead of making sure that all the user information is stored securely, all the trust is put into Google. And being one of the largest tech companies in the world, security and infrastracture is their strength.

Once a user has logged in successfully, he will be redirected to the **/news** page where most the time will be spent. Esentially this is where all the interraction among all users are made. Right in the middle, the focus is made on the latest news which are organised cronologically. If one of the news is more important, it can be seen pinned at the top of the page by the use. Besides reading, a user will also be able to write an update for everybody else to see, or update his own post. On the left, there is a list of **all the memebers** that joined the news room at least once and on right there is just a **Logout** button.

Clicking on the **Logout** button the user will be redirected on the 3rd Route of the app, where it will be logged out and redirected back to home page, where all the access of the app is restricted unless he will log in again.

## Methodology

## Implementation

## Testing

## Results

## Recommendations

## Conclusions
