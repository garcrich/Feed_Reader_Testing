/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it("should have URL defined and be not empty", function() {
            for (var i = 0; i < allFeeds.length; i++) {
                
                //Makes sure url property has been defined
                expect(allFeeds[i].url).toBeDefined();

                //Ensures url string is not empty
                expect(allFeeds[i].url).not.toEqual("");
            };
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */ it("should have a name defined and not be empty", function(){
            for (var i = 0; i < allFeeds.length; i++) {
                
                //Makes sure url property has been defined
                expect(allFeeds[i].name).toBeDefined();

                //Ensures url string is not empty
                expect(allFeeds[i].name).not.toEqual("");
            };  
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
                var body = document.body;
                it("should initially have the class 'menu-hidden'", function() {
                //grab body
                // check for class name
                var bodyHiddenClass = body.className;
                //set as toContain instead of toEqual in case new classes are added
                expect(bodyHiddenClass).toContain("menu-hidden");
                });
                
                it("should check the to if the class 'menu-hidden' on body is toggled when menu icon is clicked", function() {
            var updatedClass = document.querySelector(".menu-icon-link");

            //check first click behavior
            updatedClass.click();
            expect(body.className).not.toContain("menu-hidden");
            //check second click behavior and return application to preclicked state
            updatedClass.click();
            expect(body.className).toContain("menu-hidden");
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
