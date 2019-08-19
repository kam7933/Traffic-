# Traffic-


-Make a web based application that notifies user of live traffic alerts to phone via text/ alerts within a specified radius. 

Project weeeeeeek

Project stand apart

Project Members
Amit
Kam
Mike
Zev

-Make a web based application that notifies user of live traffic alerts to phone via text/ alerts within a specified radius. 
-Bonus: 
*Selecting a specific area to have alerts pulled from (ie: future destination)


read me and plan written out by Zev.
Things to research:

How to properly use firebase or other locations for profile protections.
Google maps api
Twillio api
Phone number verification systems. 
Account creation best practises.

Notes: 
Who wants to take on what?
How do we want to break this up?
Well probably want to build this mobile compatible first.  
Depending on how we do this we may want multiple javascript files. Example one for the login screen one for the primary screen.  
Where are we going to store current incidents and how are we going to remove them when there out dated. 


Phase 1:
Google map api: location of you
List of surrounding incidents
Choosing radius of site
Choosing freeways or all reports
Text message push notifications

Phase 2:
Figure out how to scrape info from https://cad.chp.ca.gov/ 
 Incidents marked by pointers on map.
Added bonus incidents  pulled from chp are then given their own pointers on map.
Click on pointers to get a pop up display of pointer info. 
Button on display allows you to mark it for regular updates. Ie when it’s resolved.

????

Phase 3:
Profit!


Html:

Header:
		Title.
          		Drop down nav bar:
Create a profile.
			Get text notifications
			Look at a list of all surrounding incidence
			Look at chp for current area. 
	
Option bar:
         		Drop down menus:
             		radius 3,  5, 15, 20, 25 miles
             		Freeways, side streets, all streets. 
		Submit button

    	Main:
         		Map:
		anything this may entail

   	Footer:
       	Our info.

Javascript:

Written down as I think of them. Order of operations will need to be tweaked as we build.

import firebase.

Create functions to get the values from drop down menus. Radius and road type on submit button clicked

Map function
Create functions to fetch or get from our GM API.
Apply map to screen.
Apply radius.
Figure out how to attain instances off of Google. 
 (We may find it's easier to scrape info from chp and apply those addresses. If Google is dependent on directions to give you the relevant info. )
Apply search parameters
	Phase 2 map function
Apply drop pointers to insodense location. May be easier to implement if we plan for it from the get go. 



Create a function that holds current incidents compares them to list under users unique id on firebase, updates the outdated and new ones, and pushes then new ones to the textYou function. Also won’t push to text if more then 2..3?

textYou function:
Create functions to fetch or get from our Twillio API and sends texts.
Important! create parameters that limits the circumstance that a text will be sent. Also protects against for loops, and other ways of abusing this data. (requires research)
Compiles incidence data to an easily read text format, and sends the damn thing. I’m sure there’s more to this than that. 

Functions and parameters I haven’t thought of.

Phase2 
Apply pointers 

 Chp function
	Applies current area to search parameters and scrapes chp for relevant date.
	Applies info found to new (maybe different colored) pointers on map.

Click on pointer to get pop up window that shows info that incidences info.
	

CSS, bootstrap or other css frameworks.  


Firebase info:

Data:
Username, password, phone number
-favorites
-recents (local storage)



-Bonus: 

*Selecting a specific area to have alerts pulled from (ie: future destination)

need to finish login and log out screen.

*still need to include add a choose construction insident, event and congestion buttons 
as  well an option of how many results we want texted to us.
