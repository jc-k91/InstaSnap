# InstaSnap [(link)](http://instasnap-ga.herokuapp.com)

## Approach
#### Picking a Project Idea
We discussed a few different ideas ranging from travel blogs to photo sharing apps, and thought that a photo sharing app would have a good range of stretch goal opportunities while also showcasing basic CRUD functionality.

#### Splitting the Work
We had a little bit of a hard time trying to split the work among 3 members for a basic CRUD app. A lot of the stretches consisted of modules/technologies/techniques that we all wanted to learn together. We attempted to work on separate components simultaneously, which ended up taking all of 5 minutes before we had to reconvene to test. That felt super inefficient, so we ended up pair programming almost everything so far (currently on Day 2).

#### Efficiently Rendering and Rewriting Full Pages
We brainstormed ideas for how to go about showing only certain pages without rendering every single thing and hiding most things. After spending some time researching possible solutions, we came across two main approaches to tackle this problem.
 1. Use functional components (which we didn't want to touch at this point)
 2. Conditionals embedded into the render function of a component.
We opted for the latter and created the necessary page components so as to not clutter up the App component's render function.

#### Data Structure
Without going into too much detail, we spent a lot of time trying to arrange our data structure for our db documents in such a way that would allow us to make the fewest API calls as possible.<br><br>

After speaking with a recent GA grad, we found the best way to structure our data would be to add refs in our mongoose schemas and use .populate() in our API calls to grab all of the pertinent data at once (e.g. in order to pull a user and all of their posts and each of those post's comments, we only have to make a single API call to the user and populate the post refs with their respective objects, and populate each post's comment refs with their respective objects)

## User Stories
#### Core
- As a user, my homepage should show me a post feed.
- As a user, I should be able to create new posts.
- As a user, I should be able to edit or delete (only) my posts.
- As a user, I should be able to upload photos instead of using image URLs.
- As a user, I should be able to log into my own account.
- As a user, I should be able to edit my profile.

#### Stretch
- As a user, I should be able to follow other users so I can see their posts.
- As a user, I should be able to have followers so I can drown in clout.
- As a user, I should be able to like other users' posts.
- As a user, I should be able to comment on posts.
- As a user, I should be able to dislike other users' posts.
- As a user, I should be able to see a list of users who are following me.
- As a user, I should be able to block other users.
- As a user, I should be able to see other users' profiles
- As a user, I should be able to search for other users.

#### Super Stretch
- As a user, I should be able to search for posts by tags
- As a user, I should be able to choose from a list of reactions so I can tell the poster how much they suck.
- As a user, I should be able to upload multiple photos to a single post to display as a carousel.

## Technologies Used
#### MERN Stack
- MongoDB
- Express
- React
- Node.js

#### Project management, hosting, and deployment
- GitHub
- Trello: workflow management
- Heroku: app deployment

#### Misc
- Cloudinary: image hosting and image upload widget.
- Bootstrap: CSS framework to make our app pretty.
- Undraw, Unsplash, Pexels: free illustrations and stock photos.

## Unsolved ~~Mysteries~~ Problems
- We don't know why e.target.value doesn't work for the delete button. We got around it using the getAttribute() method, but this is still <em>baffling</em>. We are <em>STILL BAFFLED</em>.
- There are instances when hitting back in our browser window takes us "back", which shouldn't happen because we're building a SPA. When this error occurs, the browser's URL bar is updated with the user's username and password visible as filters. This is not a game breaking for our project, but definitely a security issue in a production setting.

## Solved Problems
- Delete button didn't work until we changed e.target.value in app.js to e.target.getAttribute('value')
- We had some issues conceptualizing our data structures and how to nest models within one another while dynamically updating the parent document according to changes made in child documents.<br><br>

We reached out to a recent GA grad who was able to show us the (very very basic) ropes of using .populate() and properly calling refs within the models. This approach caused another bug where adding a new post wouldn't rewrite the grid-view with said new post.<br><br>

After digging through a ton of React, MongoDB, and Mongoose docs plus a bajillion StackOverflow threads, we were able to get everything figured out (shoutout to componentDidUpdate).



#### Reflection Section
- All three group members in different time zones
- Ended up pair programming mostly everything - ~~allowed us the opportunity~~ forced us to approach ~~big~~ <em>new</em> issues from multiple perspectives. We had to articulate our respective thought processes and find a way to reconcile any differences into a single actionable plan(?).
- 90% of this has been debugging random bullshit -Jesse
