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
        
        //make sure that feeds have been filled out
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //ensure that there is data for the url
        it("should have URL defined and be not empty", function() {
            for (var i = 0; i < allFeeds.length; i++) {

                //Makes sure url property has been defined
                expect(allFeeds[i].url).toBeDefined();

                //Ensures url string is not empty
                expect(allFeeds[i].url).not.toEqual("");
            }
        });


        it("should have a name defined and not be empty", function() {
            for (var i = 0; i < allFeeds.length; i++) {

                //Makes sure url property has been defined
                expect(allFeeds[i].name).toBeDefined();

                //Ensures url string is not empty
                expect(allFeeds[i].name).not.toEqual("");
            }
        });
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


    describe("Initial Entries", function() {
        //load first entry and then state that it is done with done()
        var entryLength;
        beforeEach(function(done) {
            loadFeed(0, function() {
              entryLength = $('.feed .entry').length;
                done();
            });
        });

        //verifies that the feed div is not empty
        it("check if initial entry has been loaded", function() {
            expect(entryLength).toBeGreaterThan(0);
        });
    });



    describe('New Feed Selection', function() {
        //call html Display of first load
        var HtmlChecker = function() {
           document.querySelector(".feed");
        };
        var htmlInitial;
        var htmlChange; 
        console.log(htmlChange);

        //before each comparision run the load function for the first feed 
        // and then the second
        beforeEach(function(done) {
            loadFeed(0, function() {
                htmlInitial = new HtmlChecker;

                loadFeed(1, function() {
                    htmlChange = new HtmlChecker;
                    done();
                });
            });
        });

        //check to see the html of next load is not a copy of htmlInitial
        it('should change the content on a new load', function(done) {
            expect(htmlInitial).not.toBe(htmlChange);
            done();
        });
    });
}());