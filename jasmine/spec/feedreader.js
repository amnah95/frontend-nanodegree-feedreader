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


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('all URLs are defined', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                    expect(allFeeds[i].url).toBeDefined();
                    expect(allFeeds[i].url).not.toBeNull();
                }
        });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('all names are defined and are not empty', function() {
            for(var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('null');
            }
        });
    });

    /* This suite contains test related to the menue. */
    describe('The menu', function () {

    	var body = $('body'),
        	menu = document.querySelector('.menu-icon-link');

        /* This test ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element is initially hidden', function() {
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });

        /* This test ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */

        it('menu toggles when clicked', function() {
            menu.click();
            expect(body.hasClass('menu-hidden')).toEqual(false);
            
            menu.click();
            expect(body.hasClass('menu-hidden')).toEqual(true);
        });

    });

    /* This test suite containts test about the initial entries */
    describe('Initial Entries', function() {

        /* loadFeed() is asynchronous so this following tests will require
         * the use beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        /* this test ensures when the loadFeedf unction is called and
         * completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('there is at least entry', function (done) {
            expect(document.querySelector(".feed .entry")).toBeDefined();
            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        /* loadFeed() is asynchronous so this following tests will require
         * the use beforeEach and asynchronous done() function.
         */
        
        var originalContent, loadedContent; 

        beforeEach(function(done) {
            loadFeed(0, function() {
                var originalContent = document.querySelector(".feed").innerHTML; 

                loadFeed(1, function() {
                done();
                });
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('content changes',function(done){
            loadedContent = document.querySelector(".feed").innerHTML;
            expect(originalContent).not.toBe(loadedContent);
            done();
        });

    });

}());
