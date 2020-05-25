# Working Agile, from a design team perspective

Written for Mirabeau.nl

There are a lot of articles published about Agile, but almost all of them feel like they are written from a management perspective and not a member of the Agile development team. I am Martijn, a Front-end Developer at Mirabeau and I would like to share my experiences with a truly Agile workflow. Focus is the key in this workflow, but how to create this? Next to focus, it’s also important to dare to make mistakes. As long as you can learn from them and improve the product with these new insights.

## Focus

A team needs focus to work in the most optimal way and deliver the best product for the user. If there is no focus, it’s much easier to work on topics that don’t add sufficient value to the user. A lack of focus can also create separation in a team. Therefore, focus - to my opinion - helps a team to perform and deliver the best product.

## One goal

The key to create focus for a team is to have one clear goal. If there are multiple goals for a development team, team members can pick up each goal separately and work on them as individuals. In case there is only one goal, the team is encouraged to collaborate if they want to finish this one goal. Lines between Back-end, Front-end, and Design begin to blur a bit because there is only one thing to strive for.

![List of features with a line of MVP](/static/img/articles/agile/mvp.jpg 'MVP')

### Prioritization

This single goal will also help with prioritizing the sprint or backlog with the team. At my latest client, my team created a single list of features/stories. We prioritize this list based on the goal and dependencies. After that, we draw one big line at the point where we think our list of features could function as the first version of a product, also called a Minimal Viable Product (MVP).

![Reprioritized list of features with a line of MVP](/static/img/articles/agile/reprioritize.jpg 'reprioritize')

### Adjusting

Of course, you are always learning. Usually, when the first set of features is delivered, new insights will come up. Maybe the stakeholders and the team didn’t fully understand each other. That will become clear in the first demo or after a quick user test. It can become clear that a part of the navigation doesn’t work well or that the login flow is not very intuitive. This is the perfect moment to adjust. Because you have only one goal, it’s much easier to adjust and re-prioritize. Just repeat the flow described above and you have a new prioritized backlog. This could also mean a feature will disappear or become less important due to another feature that already provided a solution.

## Going live

We - my team at my latest client - had a deadline, but the pressure wasn’t very high due to the fact we didn’t need to deliver the entire product. Only the minimal amount of features. Only the ones we prioritized as a team and put above the line of MVP. The rest was seen as an enhancement. You need a good product owner and experienced stakeholders to draw a realistic line because it’s quite difficult not to see everything as a must-have. For example: If you want to make it possible for a user to put something in a shopping basket, you could easily implement this without reloading the page. Add a shopping basket animation and show a pop-up in case the user wants to pay directly, or continue shopping. The minimal version only states: ”if the user puts an item in the basket, a call to the back-end is made and the page will get loaded again”. So, possible enhancements are:
Prevent page refresh

- Show animation when adding to basket
- Show pop-up after putting something in the basket

Of course, this is different for each brand or product. For our project, this was the minimal version which the stakeholders could approve on.

## Learn by failing

We ended up with a richer product than just the MVP that did not contain all must-have features. Along the way, we sometimes failed but learned lessons from our failures and improved based on those lessons.

Earlier on I already talked about adjusting based on new insights. In a lot of teams, failure is seen as something not desirable. However for a team to be able to learn, it's critical to accept failure. Maybe even encourage it!

At the college I attended, a sign "Fail often, fail hard" was hanging above the door. You will learn by failing therefore, they encouraged us to try. Sometimes we failed, but learned from that. If the product is built with scalability and quick development in mind, it’s not too big of a hit for a team to fail to learn and adjust.

### Our fail

Our team failed very hard in the first sprint. We delivered a first version of an advanced search and some search results. This was the core of our product. The search form contained, among other things, a date input. For us, there was only one date important so we created just one date input. This was a bit different for our users. They didn’t want to search for something on a specific date, rather within a date range. And with that, not on all days, but only on specific days on the week.

We got these new insights after the demo of the first sprint. We proudly performed a search and showed the search results. Everybody was happy until somebody asked; “And what if I want to buy 60 tickets for each Monday for half a year long? Then I need to search 60 times”. This would mean nobody would use our new tool. So we went back to the drawing board and came up with three new enhancements:

- Enhance search with two dates to create a start and end date
- Enhance search with "days of the week" filter
- Enhance search results to show results multiple results

They instantly became the features on the top of our backlog because this was the core of our product. After just half a sprint, the possibility to search in a specific period on specific days of the week was done.

![A sketch of the different versions of the application](/static/img/articles/agile/versions.jpg 'Versions')

If we didn't work in an agile process and if we didn't feel that we could fail, learn and adjust, the product would contain a search with one date input and no value to the user.

This also wouldn’t have been possible in the case that:

- We used waterfall or another process that isn't flexible
- Our PO and stakeholders created a scope that was too large and had no room for adjustments, failure, and improvements
- We had multiple goals and therefore didn’t have full focus on the core functionalities
- We worked with scrum, but never looked back at what we made
- We didn’t involve stakeholders and users into our demo’s/process
- We didn’t allow ourselves to try, fail and don’t be afraid to learn from this

## To summarize

For a team, it's very important to have only one goal. This creates a better collaborating team with a better focus. It also helps in prioritizing the backlog and making adjustments to it. Next to one goal, the possibility and mindset of failing is also very important. If a team feels that the possibility to fail is allowed, a better product can be created. Because a team can look back, review and adjust where needed, a truly agile workflow will help the team to create the best solutions for the user. And not just deliver a product with the requirements that were set at the beginning of the process. This all is only possible if there is only one goal that the entire team can strive to make.
